import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

const headers = new Headers();
headers.append('Content-Type', 'application/json');

@Injectable()
export class ContactUsService {
  baseUrl = environment.baseUrl;
  constructor(private http: Http) { }
  sendContactUsEmail(user) {
    const sendMessageUrl = this.baseUrl + 'users/contacts';
    return this.http.post(sendMessageUrl, user, {headers: headers})
      .map(res => res.json());
  }
}
