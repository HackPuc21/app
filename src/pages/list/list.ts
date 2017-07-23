import { Component } from '@angular/core';
import { NavController, NavParams, AlertController  } from 'ionic-angular';
import { CameraPage } from '../camera/camera';
import { QrCodePage } from '../qrcode/qrcode'
import { VozPage } from '../voz/voz';
import { SpeechRecognition} from '@ionic-native/speech-recognition';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class CarrinhoCompras {
  alertCtrl: AlertController;
  selectedItem: any;
  icons: string[]; 
  itemsSelecionados : Array<{nome: string, codigoBarras:string, quantidade:number}>;
  resolve: any;
  speech: SpeechRecognition;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertController:AlertController, private speechModule: SpeechRecognition) {
    this.itemsSelecionados = [];
    this.alertCtrl = alertController;
    this.resolve = (_text)=> {
        if(!_text) return;
        new Promise((ok, notOk) => {
          this.adicionarProduto(_text)
        });
    };

    this.speech = speechModule;
  }

  adicionarProduto(codBarras){
    if(!codBarras) return;
     this.itemsSelecionados  = this.itemsSelecionados ? this.itemsSelecionados : [];
          
    let index = this.itemsSelecionados.findIndex((item) => {
      return item.codigoBarras == codBarras
    })

    if(index >= 0){
      this.itemsSelecionados[index].quantidade++;
    } else {

    this.itemsSelecionados.push({
      nome: codBarras,
      codigoBarras: codBarras,
      quantidade: 1
    });
    }
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

  mostraModalConfirmacao(melhorPalavra){
    let confirm = this.alertCtrl.create({
      title: 'Confirmação de coódigo de barras',
      message: 'Confira, e altere caso necessário o codigo de Barras. O Código de barras confere?',
      inputs: [
      {
        name: 'melhorPalavra',
        placeholder: 'Cod. Barras',
        value:melhorPalavra
      }],
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
          }
        },
        {
          text: 'Não, Repetir Teste',
          handler: () => {
            this.tratarEntradaDeVoz();
          }
        },
        {
          text: 'Sim',
          handler: (data) => {
            this.adicionarProduto(data.melhorPalavra);
          }
        }
      ]
    });
    confirm.present();
  }
  
  tratarEntradaDeVoz(){
    this.speech.hasPermission().then(result => {
      if(!result) this.speech.requestPermission().then(() => this.tratarEntradaDeVoz());
      else{
        this.speech.startListening().subscribe(data => {
          if(data && data.length){
            console.log(data)
            let melhorCaso;
            for(let i = 0; i < data.length; i++){
              if(data[i][0] >= '0' && data[i][0] <= '9'){
                melhorCaso = data[i];
              }
            }

            melhorCaso = melhorCaso.trim();
            var aux = "";
            var i = 0
            while (i < melhorCaso.length) {
              if(melhorCaso[i] >= '0' && melhorCaso[i] <= '9'){
                aux += melhorCaso[i];
              }
              i++;
            };
            
            this.mostraModalConfirmacao(aux);
          }
        }, error => console.log(error));
      }
    })  
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
