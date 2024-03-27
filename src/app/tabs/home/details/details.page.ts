import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Characters } from '../../../interfaces/CharacterInterface';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  character: Characters | undefined;
  constructor(public router: Router,public navCtrl:NavController) { }
  ngOnInit() {
    const currentNavigation = this.router.getCurrentNavigation();
    if (currentNavigation) {
      const character = currentNavigation.extras.state?.['character'];
      if (character) {
        this.character = character;
      } else {
        this.navCtrl.pop();
      }
    } else {
      this.navCtrl.pop();
    }
  }

}
