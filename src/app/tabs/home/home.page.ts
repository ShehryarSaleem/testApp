import { Component } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { ActionSheetController, NavController } from '@ionic/angular';

//Services
import { HttpCallService } from 'src/app/services/http/http-call.service';
import { UtilsService } from 'src/app/services/utils/utils.service';

//Interface
import { Characters } from './CharacterInterface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  public charactersList: Characters[] = [];
  constructor(private httpCall: HttpCallService, private navCtrl: NavController, public utils: UtilsService, private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
    this.httpCall.getList().then((res: any) => {
      this.charactersList = res;
    })
  }


  detail(character: Characters) {
    let navigationExtras: NavigationExtras = {
      state: {
        character: character
      }
    };
    this.navCtrl.navigateForward(['tabs/home/details'], navigationExtras);
  }


  async logout() {
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Logout',
          role: 'destructive',
          handler: () => {
            localStorage.clear();
            this.navCtrl.navigateRoot('login');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });
    await actionSheet.present();
  }

}

