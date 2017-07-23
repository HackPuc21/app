import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { QRCodeComponent } from 'angular2-qrcode';
import { SpeechRecognition } from '@ionic-native/speech-recognition';

import { HomePage } from '../pages/home/home';
import { CarrinhoCompras } from '../pages/list/list';
import { CameraPage } from '../pages/camera/camera';
import { QrCodePage } from '../pages/qrcode/qrcode';
import { VozPage } from '../pages/voz/voz';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CarrinhoCompras,
    CameraPage,
    QrCodePage,
    QRCodeComponent,
    VozPage
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
    QrCodePage,
    VozPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    SpeechRecognition,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    
  ]
})
export class AppModule {}
