import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Characters } from '../CharacterModal';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  character!: Characters;
  constructor(public router: Router,public navCtrl:NavController, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.character=this.router.getCurrentNavigation()!.extras.state?.['character'];
      if(!this.character){
        this.navCtrl.navigateBack(['/tabs/tabs1'])
      }
    })
  }

}
