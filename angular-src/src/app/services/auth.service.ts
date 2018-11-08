import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import { error } from 'util';
import { environment } from '../../environments/environment';
import { IUser } from '../models/user';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';

const headers = new Headers();
headers.append('Content-Type', 'application/json');
const params = new URLSearchParams();

@Injectable()
export class AuthService {
  authToken: any;
  user: IUser;
  baseUrl = environment.baseUrl;
  superAdmin: string;
  admin: string;
  constructor(private http: Http) {
    this.superAdmin = 'superAdmin@ampx.ca';
    this.admin = 'admin@ampx.ca';
  }

  /**
   * Method for registration new user
   * @param user Get data from user registration form, inherits IUser interface
   * @returns return HTTP status and message from server-side.
   */
  registerUser(user: IUser): Observable<any> {
    const registerUrl = this.baseUrl + 'users/register';
    return this.http.post(registerUrl, user, {headers: headers})
      .map(res => res.json()
    );
  }

  /**
   * Method for authenticate user
   * @param user Get data from user login form, inherits IUser interface
   * @returns return HTTP status and message from server-side.
   */
  authenticateUser(user: IUser): Observable<any> {
    const authenticateUrl = this.baseUrl + 'users/authenticate';
      return this.http.post(authenticateUrl, user, {headers: headers})
        .map(res => res.json());
  }

  /**
   *
   */
  getProfile() {
    this.loadToken();
    headers.append('Authorization', this.authToken);
    const profileUrl = this.baseUrl + 'users/profile';
    return this.http.get(profileUrl, {headers: headers})
      .map(res => res.json());
  }

  /**
   *
   * @param token
   * @param user
   */
  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  /**
   *
   */
  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  /**
   *
   */
  loggedIn() {
    return tokenNotExpired('id_token');
  }

  /**
   *
   */
  masterLogedIn() {
    if (window.localStorage) {
      const user = localStorage.getItem('user');
      const u = JSON.parse(user);
      const userEmail = u.email;
      if (userEmail === this.superAdmin || userEmail === this.admin) {
        return true;
      }
    } else {
      console.log(error);
      return false;
    }
  }

  /**
   *
   */
  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
