import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public loginForm: FormGroup;

  constructor(private fb: FormBuilder,public navCtrl:NavController,) {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'),
      ]],
      password: ["", Validators.required],
    });
  }

  ngOnInit() {
  }
  updateValue(type:string,value:string){
    if(value!=null && type != null){
      this.loginForm.get(type)?.setValue(value)
    }
  }
  login(){
    const body=this.loginForm.value;
    //As i don't have login API so working with local values
    if(body.email=='a@a.com'&& body.password=='112233'){
      localStorage.setItem('isLoggedIn','true');
      this.navCtrl.navigateRoot(['/tabs']);
    }
  }

}
