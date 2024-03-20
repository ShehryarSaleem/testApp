import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,public navCtrl:NavController) {
    this.initializeApp()
  }
  initializeApp(){
    this.platform.ready().then(async () => {
      const status=localStorage.getItem('isLoggedIn');
      if(status=='true'){
        this.navCtrl.navigateRoot('tabs/tab1');
      }
      this.hideSplash();
    })
  }
  async hideSplash() {
      await SplashScreen.hide();
  }
}
