import { Component } from '@angular/core';
import {BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner';

@Component({
    selector: 'page-camera',
    templateUrl: 'camera.html'
})

export class CameraPage{
    options: BarcodeScannerOptions;

    constructor(private barcode: BarcodeScanner){

    }

    async scanBarcode(){
        const results = await this.barcode.scan();
        console.log(results);
    }
}