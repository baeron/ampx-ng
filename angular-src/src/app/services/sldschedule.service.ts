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
export class SldscheduleService {
  baseUrl = environment.baseUrl;
  constructor(private http: Http) { }

  /**
   *
   * @param id
   * @param arrayList
   * @param queryString
   */
  getObjectsById(id: string, arrayList: any, queryString: string) {
    const observableBatch = [];
    const getObjectByIdUrl = this.baseUrl + 'project/' + id + '/' + queryString + '/';
    arrayList.forEach((key) => {
      observableBatch.push(this.http.get(getObjectByIdUrl + key).map((res) => res.json()));
    });
    return Observable.forkJoin(observableBatch);
  }

  /**
   *
   * @param id
   * @param array
   * @param queryString
   */
  getSldSheduleExcelList(id: string, array: any, queryString: string): Observable<any> {
    return Observable.forkJoin(
      this.getObjectsById(id, array, queryString)
    );
  }

  /**
   *
   * @param id
   */
  getSldScheduleList(id: string): Observable<any> {
    const getSldShaduleListUrl = this.baseUrl + 'project/' + id + '/sld-schedules-list';
      return this.http.get(getSldShaduleListUrl, {headers: headers})
        .map(res => res.json());
  }

  /**
   *
   * @param id
   */
  getSldSchedule(id: string): Observable<any> {
    const getSldShaduleUrl = this.baseUrl + 'project/' + id + '/sld-schedules';
      return this.http.get(getSldShaduleUrl, {headers: headers})
        .map(res => res.json());
  }

  /**
   *
   * @param id
   * @param sldschedule
   */
  createSldSchedule(id: string, sldschedule: any): Observable<any> {
    const createSldShaduleUrl = this.baseUrl + 'project/' + id + '/sld-schedule-create/';
      return this.http.post(createSldShaduleUrl, sldschedule, {headers: headers})
        .map(res => res.json());
  }


  /**
   *
   * @param projectId
   * @param sldscheduleId
   */
  getSldScheduleItem(projectId: string, sldscheduleId: string) {
    const getSldShaduleItemUrl = this.baseUrl + 'project/' + projectId + '/sld-schedules/' + sldscheduleId;
      return this.http.get(getSldShaduleItemUrl, {headers: headers})
        .map(res => res.json());
  }

  /**
   *
   * @param id
   */
  getElectricalName(id: string): Observable<any> {
    const getElectricalNameUrl = this.baseUrl + 'project/' + id + '/electrical-for-sld';
      return this.http.get(getElectricalNameUrl, {headers: headers})
        .map(res => res.json());
  }

  /**
   *
   * @param projectId
   * @param sldScheduleId
   * @param scheduleItem
   */
  updateSldScheduleItem(projectId: string, sldScheduleId: string, scheduleItem: any): Observable<any> {
    const updateSldShaduleItemUrl = this.baseUrl + 'project/' + projectId + '/sld-schedule-update/' + sldScheduleId;
      return this.http.patch(updateSldShaduleItemUrl, scheduleItem, {headers: headers})
        .map(res => res.json());
  }


  /**
   *
   * @param projectId
   * @param sldScheduleId
   */
  deleteSldScheduleItem(projectId: string, sldScheduleId: string): Observable<any> {
    const deleteSldScheduleIdUrl = this.baseUrl + 'project/' + projectId + '/sld-schedules/' + sldScheduleId;
        return this.http.delete(deleteSldScheduleIdUrl, {headers: headers})
          .map(res => res.json());
  }
}
