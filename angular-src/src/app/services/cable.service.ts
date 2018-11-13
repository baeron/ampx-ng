import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { environment } from '../../environments/environment';

const headers = new Headers();
headers.append('Content-Type', 'application/json');
const params = new URLSearchParams();

@Injectable()
export class CableService {
  baseUrl = environment.baseUrl;
  constructor(private http: Http) { }

  getObjectsById(id, arrayList, queryString) {
    const observableBatch = [];
    const projectCableUrl = this.baseUrl + 'project/' + id + '/' + queryString + '/';
    arrayList.forEach((key) => {
      observableBatch.push(this.http.get(projectCableUrl + key).map((res) => res.json()));
    });
    return Observable.forkJoin(observableBatch);
  }

  getCabelExcelList(id, array, queryString): Observable<any> {
    return Observable.forkJoin(
      this.getObjectsById(id, array, queryString)
    );
  }

  /**
   * Method to get the Cable list
   * @param id
   */
  getCables(id: string): Observable<any> {
    const cableUrl = this.baseUrl + 'project/' + id + '/cables';
    return this.http.get(cableUrl, {headers: headers})
      .map(res => res.json());
  }

  /**
   *
   * @param id
   */
  getElectricalName(id: string): Observable<any> {
    const electricalUrl = this.baseUrl + 'project/' + id + '/electrical';
    return this.http.get(electricalUrl, {headers: headers})
      .map(res => res.json());
  }

  /**
   *
   * @param id
   * @param cable
   */
  createCable(id: string, cable: any): Observable<any> {
    const createCableUrl = this.baseUrl + 'project/' + id + '/cable-create/';
      return this.http.post(createCableUrl, cable, {headers: headers})
        .map(res => res.json());
  }

  /**
   * Method to get a specific Cable by ID
   * @param projectId
   * @param cableId
   */
  getCableItem(projectId: string, cableId: string): Observable<any> {
    const cableUrlById = this.baseUrl + 'project/' + projectId + '/cables/' + cableId;
    return this.http.get(cableUrlById, {headers: headers})
      .map(res => res.json());
  }

  /**
   * Method to update Cable item by unique identifier
   * @param projectId
   * @param cabelId
   * @param cabelItem
   */
  updateCabelItem(projectId: string, cabelId: string, cabelItem: any): Observable<any> {
    const cableUpdateUrl = this.baseUrl + 'project/'  + projectId + '/cable-update/' + cabelId;
    return this.http.patch(cableUpdateUrl, cabelItem, {headers: headers})
      .map(res => res.json());
  }

  /**
   * Method for deleting an item by unique identifier
   * @param projectId
   * @param cableId
   */
  deleteCableItem(projectId: string, cableId: string) {
    const deleteCableUrl = this.baseUrl + 'project/' + projectId + '/cables/' + cableId;
    return this.http.delete(deleteCableUrl, {headers: headers})
      .map(res => res.json());
  }
}
