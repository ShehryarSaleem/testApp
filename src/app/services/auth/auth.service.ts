import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UtilsService } from '../utils/utils.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(
    private http: HttpClient,
    private utils: UtilsService,
  ) { }

  async apiCall(requestType: any, endpoint: any, body: any) {
    var options = { body: body }
    this.utils.loading = true;
    var promise = new Promise<void>((resolve, reject) => {
      this.http.request(requestType, environment.apiBaseUrl + endpoint, options).subscribe((response: any) => {
        resolve(response);
        this.utils.loading = false;
      }),
        (error: any) => {
          this.utils.loading = false;
          reject(error);
        }
    });
    return promise;
  }

}
