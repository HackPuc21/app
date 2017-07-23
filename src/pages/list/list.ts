import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CameraPage } from '../camera/camera';
import { QrCodePage } from '../qrcode/qrcode'

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class CarrinhoCompras {
  selectedItem: any;
  icons: string[]; 
  itemsSelecionados : Array<{nome: string, codigoBarras:string, quantidade:number}>;
  resolve: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.itemsSelecionados = [];
    this.resolve = (_text)=> {
        if(!_text) return;
        new Promise((ok, notOk) => {
          this.itemsSelecionados  = this.itemsSelecionados ? this.itemsSelecionados : [];
          console.log(this.itemsSelecionados);
          
          let index = this.itemsSelecionados.findIndex((item) => {
            return item.codigoBarras == _text
          })

          if(index >= 0){
            this.itemsSelecionados[index].quantidade++;
          } else {
 
          this.itemsSelecionados.push({
            nome: _text,
            codigoBarras: _text,
            quantidade: 1
          });
          }
        });
    };
  }

  deletar(event: any, index : any) {
    console.log(index);
    this.itemsSelecionados.splice(index, 1)
  }

  abrirTelaCamera(){
    this.navCtrl.push(CameraPage, {
      resolve: this.resolve
    });
  }

  abrirTelaQrCode(){
    this.navCtrl.push(QrCodePage, {
      listaFormatada: this.formatarString()
    })
  }

  mock(event: any){
    this.itemsSelecionados.push({
        nome: 'item' + this.itemsSelecionados.length,
        codigoBarras: this.itemsSelecionados.length.toString(),
        quantidade: 1
      });
  }

  alteraQuantidade(index:number, alteracao:number) {
    this.itemsSelecionados[index].quantidade += alteracao
  };

  formatarString(){
    let listaFormatada = "";
    for(let produto of this.itemsSelecionados){
      listaFormatada = listaFormatada.concat(produto.quantidade+"*"+produto.codigoBarras+" ");
    }
    console.log(listaFormatada);
    return listaFormatada;
  }
}
