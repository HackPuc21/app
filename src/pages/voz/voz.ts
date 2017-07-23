import { Component } from '@angular/core';
import { SpeechRecognition} from '@ionic-native/speech-recognition';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-voz',
    templateUrl: 'voz.html'
})

export class VozPage{
    constructor(private speech: SpeechRecognition, public navController: NavController){

    }

    async isSpeechSupported():Promise<boolean>{
        const isAvailable = await this.speech.isRecognitionAvailable();
        console.log(isAvailable);
        return isAvailable;
    }

    async getPermission():Promise<void>{
        try{
            const permission = await this.speech.requestPermission();
            console.log(permission);
        }
        catch(e){
            console.log(e);
        }
    }

    async hasPermition():Promise<boolean>{
        try{
            const permission = await this.speech.hasPermission();
            console.log(permission);
            return permission;
        }
        catch(e){
            console.log(e);
        }
    }

    async getSupportedLanguages():Promise<Array<String>>{
        try{
            const langagues = this.speech.getSupportedLanguages();
            console.log(langagues);
            return langagues;
        }
        catch(e){
            console.log(e);
        }
    }

    listenForSpeech():void{
        this.speech.startListening().subscribe(data => console.log(data), error => console.log(error));  
    }
}