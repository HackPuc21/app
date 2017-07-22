import { Component } from '@angular/core';
import { NavController, NavParams, Platform, ToastController } from 'ionic-angular';
import {BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner';

@Component({
    selector: 'page-camera',
    templateUrl: 'camera.html'
})

export class CameraPage{
    navCtrl: NavController;
    options: BarcodeScannerOptions;
    resolve: any;
    toasterController: ToastController;

    constructor(public navController: NavController, public navParams: NavParams, private barcode: BarcodeScanner, private toaster : ToastController){
        this.toasterController = toaster;
        this.navCtrl = navController;
        this.resolve = navParams.get("resolve");
        this.scanBarcode();
    }

    async scanBarcode(){
        await this.barcode.scan().then((result) => {
            console.log(result);
            this.navCtrl.pop().then(()=>{
                this.resolve(result.text);
            });
        }, () => {
            this.toaster.create(
            {
                message: 'Erro ao ler código de barras.',
                duration: 1,
                position: "top"
            })
        });   
    }
}