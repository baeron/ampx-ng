import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { ContentType } from '@angular/http/src/enums';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

const headers = new Headers();
headers.append('Content-Type', 'application/json');

@Injectable()
export class UsersService {
  baseUrl = environment.baseUrl;
  constructor(private http: Http) { }

  /**
   * Method for getting all users registered on the site
   */
  getUsers(): Observable<any> {
    const getUserUrl = this.baseUrl + 'users';
      return this.http.get(getUserUrl, {headers: headers})
        .map(res => res.json());
  }

  /**
   * Method for obtaining a unique identifier using the mailing address specified by the user
   * @param email unique identifier assigned to the user during registration
   */
  getItemUserByEmail(email: string): Observable<any> {
    const getUserByGuidUrl = this.baseUrl + 'users/team/' + email;
    return this.http.get(getUserByGuidUrl, {headers: headers})
      .map(res => res.json());
  }

  /**
   * Method to remove user from application
   * @param userId unique user id
   */
  deleteUser(userId: string): Observable<any> {
    const deleteUserUrl = this.baseUrl + 'users/' + userId;
    return this.http.delete(deleteUserUrl, {headers: headers})
      .map(res => res.json());
  }
}
