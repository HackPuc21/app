import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CarrinhoCompras } from '../list/list';
import { QrCodePage } from '../qrcode/qrcode';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

    abrirTelaLista(){
    this.navCtrl.push(CarrinhoCompras);
  }

}
