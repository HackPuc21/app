import { Component } from '@angular/core';
import {BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner';
import { NavParams, NavController} from 'ionic-angular'

@Component({
    selector: 'page-qrcode',
    templateUrl: 'qrcode.html'
})

export class QrCodePage{
    listaFormatada: String;
    navCtrl: NavController;

    constructor(public navController: NavController, public navParams: NavParams, private barcode: BarcodeScanner){    
        this.navCtrl = navController;
        this.listaFormatada = navParams.get('listaFormatada');
        console.log(this.listaFormatada);
    }
}



