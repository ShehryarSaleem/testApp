import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpCallService {

  constructor(private auth:AuthService) { }
  getList(){
    var promise = new Promise<void>(async (resolve, reject) => {
      this.auth.apiCall('get','v2/Characters',null).then((data:any)=>{
        resolve(data)
      }).catch((err)=>{
        reject(err);
      })
    })
    return promise;
  }
}
