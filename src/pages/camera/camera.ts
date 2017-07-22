import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import {BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner';

@Component({
    selector: 'page-camera',
    templateUrl: 'camera.html'
})

export class CameraPage{
    options: BarcodeScannerOptions;

    constructor(public navCtrl: NavController, public navParams: NavParams, private barcode: BarcodeScanner){
        this.scanBarcode();
    }

    async scanBarcode(){
        const results = await this.barcode.scan();
        console.log(results);
    }
}