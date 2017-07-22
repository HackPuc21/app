import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CameraPage } from '../camera/camera';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class CarrinhoCompras {
  selectedItem: any;
  icons: string[];
  itemsSelecionados : Array<{nome: string, codigoBarras:string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.itemsSelecionados = [];
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

  resolve(nome:any){
    console.log(this.itemsSelecionados);
    this.itemsSelecionados.push(nome);
  }

  mock(event: any){
    this.itemsSelecionados.push({
        nome: 'item' + this.itemsSelecionados.length,
        codigoBarras: this.itemsSelecionados.length.toString()
      });
  }
}
