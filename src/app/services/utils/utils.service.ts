import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  public loading: boolean = false;

  constructor(private loadingCtrl: LoadingController, private toastController: ToastController) { }

  async showLoading(message?: any) {
    const loader = await this.loadingCtrl.create({
      message: message,
      cssClass: 'loadingCss'
    });
    loader.present();
  }
  stopLoading() {
    setTimeout(() => {
      this.loadingCtrl.dismiss();
    }, 500);
  }
  async presentToast(message: any, duration: any, color: any, position: any) {
    const toast = await this.toastController.create({
      message: message,
      duration: duration,
      color: color,
      position: position
    });
    toast.present();
  }
}
