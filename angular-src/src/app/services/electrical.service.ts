import { Electrical } from './../models/Electrical';
import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import { IElectrical } from '../models/IElectrical';

const headers = new Headers();
headers.append('Content-Type', 'application/json');
const params = new URLSearchParams();

@Injectable()
export class ElectricalService {
  baseUrl = environment.baseUrl;
  constructor(private http: Http) { }

  getObjectsById(id, arrayList, queryString) {
    const observableBatch = [];
    arrayList.forEach((key) => {
      const objectByIdUrl = this.baseUrl + 'project/' + id + '/' + queryString + '/' + key;
        observableBatch.push(this.http.get(objectByIdUrl).map((res) => res.json()));
    });
    return Observable.forkJoin(observableBatch);
  }

  getElectricalExcelList(id, array, queryString): Observable<any> {
    return Observable.forkJoin(
      this.getObjectsById(id, array, queryString)
    );
  }

  /**
   * Method to get the selected electrical item
   * @param projectId unique identifier for the project item
   */
  getElectricals(projectId: string): Observable<any> {
    params.delete('guid');
    const electricalItemUrl = this.baseUrl + 'project/' + projectId + '/electricals';
    return this.http.get(electricalItemUrl, {headers: headers})
      .map(res => res.json());
  }

  /**
   * Method to create a new electrical item
   * @param projectId unique identifier for the project item
   * @param electrical updated electrical model
   * @param userGuid unique identifier assigned user during registration
   */
  createElectrical(projectId: string, electrical: Electrical, userGuid: string): Observable<any> {
    // const newElectrical = new electrical();
    // console.log(electrical);
    params.delete('guid');
    params.append('guid', userGuid);
    const createElectricalUrl = this.baseUrl + 'project/' + projectId + '/electrical-create';
    return this.http.post(createElectricalUrl, electrical, { headers: headers, params: params })
      .map(res => res.json());
  }

  /**
   * Method to get the selected electrical item
   * @param projectId unique identifier for the project item
   * @param electricalId unique identifier for the electrical item
   */
  getElectricalItem(projectId: string, electricalId: string): Observable<any> {
    params.delete('guid');
    const getElectricalByIdUrl = this.baseUrl + 'project/' + projectId + '/electricals/' + electricalId;
    return this.http.get(getElectricalByIdUrl, {headers: headers})
      .map(res => res.json());
  }

  /**
   * Method for updating electric item element
   * @param projectId unique identifier for the project item
   * @param electricalId unique identifier for the electrical item
   * @param electricalItem updated electrical model
   * @param userGuid unique identifier assigned user during registration
   */
  updateElectricalItem(projectId: string, electricalId: string, electricalItem: any, userGuid: string): Observable<any> {
    params.delete('guid');
    params.append('guid', userGuid);
    console.log(electricalItem);
    debugger;
    console.log(userGuid);
    console.log(electricalItem);
    const updateElectricalByIdUrl = this.baseUrl + 'project/' + projectId + '/electrical-update/' + electricalId;
      return this.http.patch(updateElectricalByIdUrl, electricalItem, { headers: headers, params: params })
        .map(res => res.json());
  }

  /**
   * Method for removing item electric element
   * @param projectId unique identifier for the project item
   * @param electricalId unique identifier for the electrical item
   */
  deleteElectricalItem(projectId: string, electricalId: string): Observable<any> {
    params.delete('guid');
    const deleteElectricalByIdUrl = this.baseUrl + 'project/' + projectId + '/electricals/' + electricalId;
      return this.http.delete(deleteElectricalByIdUrl, {headers: headers})
        .map(res => res.json());
  }
}
