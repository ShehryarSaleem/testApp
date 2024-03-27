import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,public navCtrl:NavController,
    private translate: TranslateService,) {
    this.initializeApp()
  }
  initializeApp(){
    this.platform.ready().then(async () => {

      this.translate.setDefaultLang('en');
      this.translate.use('en');
      this.hideSplash();
    })
  }
  async hideSplash() {
      await SplashScreen.hide();
  }
}
