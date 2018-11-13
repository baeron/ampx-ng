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
export class InstrumentationService {
  baseUrl = environment.baseUrl;
  constructor(private http: Http) { }

  /**
   * Method to get a short data of Instrumental list elements
   * @param id
   */
  getInstrumentationsList(id: string): Observable<any> {
    const getInstrumentationListUrl = this.baseUrl + 'project/' + id + '/instrumentations-list';
      return this.http.get(getInstrumentationListUrl, {headers: headers})
        .map(res => res.json());
  }

  /**
   * Method to get a full data of Instrumental list elements
   * @param id
   */
  getInstrumentations(id: string): Observable<any> {
    const getInstrumentationsListUrl = this.baseUrl + 'project/' + id + '/instrumentations';
      return this.http.get(getInstrumentationsListUrl, {headers: headers})
        .map(res => res.json());
  }

  /**
   * Method to create a new instrument element
   * @param id
   * @param instrumentation
   */
  createInstrumentstion(id: string, instrumentation: any): Observable<any> {
    const createInstrumentationUrl = this.baseUrl + 'project/' + id + '/instrumentation-create/';
      return this.http.post(createInstrumentationUrl, instrumentation, {headers: headers})
        .map(res => res.json());
  }

  /**
   * Method for getting a specific Instrumental element by unique identifier.
   * @param projectId
   * @param instrumentationId
   */
  getInstrumentationItem(projectId: string, instrumentationId: string): Observable<any> {
    const getInstrumentationItemUrl = this.baseUrl + 'project/' + projectId + '/instrumentations/' + instrumentationId;
      return this.http.get(getInstrumentationItemUrl, {headers: headers})
        .map(res => res.json());
  }

  /**
   *
   * @param id
   * @param arrayList
   * @param queryString
   */
  getObjectsById(id: string, arrayList: any, queryString: string): Observable<any> {
    const observableBatch = [];
    const getObjectsByIdUrl = environment.baseUrl + 'project/' + id + '/' + queryString + '/';
    arrayList.forEach((key) => {
      observableBatch.push(this.http.get(getObjectsByIdUrl + key).map((res) => res.json()));
    });
    return Observable.forkJoin(observableBatch);
  }

  /**
   *
   * @param id
   * @param array
   * @param queryString
   */
  getInstrumentationsCheckList2(id: string, array: any, queryString: string): Observable<any> {
    return Observable.forkJoin(
      this.getObjectsById(id, array, queryString)
    );
  }

  /**
   * Method for updating a specific Instrumental element by unique identifier.
   * @param projectId
   * @param instrumentationId
   * @param instrumentationItem
   */
  updateInstrumentationItem(projectId: string, instrumentationId: string, instrumentationItem: any): Observable<any> {
    const updateInstrumentationItemUrl = this.baseUrl + 'project/' + projectId + '/instrumentation-update/' + instrumentationId;
    return this.http.patch(updateInstrumentationItemUrl, instrumentationItem, {headers: headers})
      .map(res => res.json());
  }

  /**
   * Method for deleting a specific Instrumental element by unique identifier.
   * @param projectId
   * @param instrumentationId
   */
  deleteInstrumentationItem(projectId: string, instrumentationId: string): Observable<any> {
    const deleteInstrumentationItemUrl = this.baseUrl + 'project/' + projectId + '/instrumentations/' + instrumentationId;
      return this.http.delete(deleteInstrumentationItemUrl, {headers: headers})
        .map(res => res.json());
  }
}
