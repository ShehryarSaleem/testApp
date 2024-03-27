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
    const options = { body: body };
    this.utils.loading = true;
    return new Promise<void>((resolve, reject) => {
      this.http.request(requestType, environment.apiBaseUrl + endpoint, options).subscribe(
        (response: any) => {
          this.utils.loading = false;
          resolve(response);
        },
        (error: any) => {
          this.utils.loading = false;
          reject(error);
          this.utils.presentToast(error.message, 3000, "danger", "bottom");
        }
      );
    });
  }
}