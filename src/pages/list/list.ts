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
  itemsSelecionados : Array<{nome: string, codigoBarras:string}>;
  resolve: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.itemsSelecionados = [];
    this.resolve = (_text)=> {
        console.log(_text);
        new Promise((ok, notOk) => {
          this.itemsSelecionados  = this.itemsSelecionados ? this.itemsSelecionados : [];
          console.log(this.itemsSelecionados);
          this.itemsSelecionados.push({
            nome: _text,
            codigoBarras: _text
          });
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
      listaFormatada: ''
    })
  }

  mock(event: any){
    this.itemsSelecionados.push({
        nome: 'item' + this.itemsSelecionados.length,
        codigoBarras: this.itemsSelecionados.length.toString()
      });
  }
}
