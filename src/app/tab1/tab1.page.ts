import { Component } from '@angular/core';
import { HttpCallService } from '../services/auth/http-call.service';
import { Characters } from './CharacterModal';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { UtilsService } from '../services/utils/utils.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  charactersList:Characters[]=[];
  constructor(private httpCall:HttpCallService, private navCtrl:NavController,public utils:UtilsService) {}

  ngOnInit() {
    this.httpCall.getList().then((res:any)=>{
      this.charactersList=res;
    })
  }
  detail(character:Characters){
    let navigationExtras: NavigationExtras = {
      state: {
        character: character
      }
    };
    this.navCtrl.navigateForward(['tabs/tab1/details'],navigationExtras);
  }

}

