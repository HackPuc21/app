import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { QRCodeComponent } from 'angular2-qrcode';

import { HomePage } from '../pages/home/home';
import { CarrinhoCompras } from '../pages/list/list';
import { CameraPage } from '../pages/camera/camera';
import { QrCodePage } from '../pages/qrcode/qrcode';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CarrinhoCompras,
    CameraPage,
    QrCodePage,
    QRCodeComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CarrinhoCompras,
    CameraPage,
    QrCodePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    
  ]
})
export class AppModule {}
