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

@Injectable()
export class ControllerService {
  baseUrl = environment.baseUrl;
  constructor(private http: Http) { }

  /**
   *
   * @param id
   */
  getControllersList(id: string): Observable<any> {
    const getControllersListUrl = this.baseUrl + 'project/' + id + '/controllers-list';
    return this.http.get(getControllersListUrl, { headers: headers })
      .map(res => res.json());
  }

  /**
   *
   * @param id
   */
  getControllers(id: string): Observable<any> {
    const getControllersUrl = this.baseUrl + 'project/' + id + '/controllers';
    return this.http.get(getControllersUrl, { headers: headers })
      .map(res => res.json());
  }

  /**
   *
   * @param id
   * @param controller
   */
  createController(id: string, controller: any): Observable<any> {
    const createControllerUrl = this.baseUrl + 'project/' + id + '/controller-create';
    debugger;
    return this.http.post(createControllerUrl, controller, { headers: headers })
      .map(res => res.json());
  }

  /**
   *
   * @param projectId
   * @param controllerId
   */
  getControllerItem(projectId: string, controllerId: string): Observable<any> {
    const getControllerItemUrl = this.baseUrl + 'project/' + projectId + '/controllers/' + controllerId;
    return this.http.get(getControllerItemUrl, { headers: headers })
      .map(res => res.json());
  }

  /**
   *
   * @param projectId
   * @param controllerId
   * @param controllerItem
   */
  updateControllerItem(projectId: string, controllerId: string, controllerItem: any): Observable<any> {
    const updateControllerItemUrl = this.baseUrl + 'project/' + projectId + '/controller-update/' + controllerId;
    return this.http.patch(updateControllerItemUrl, controllerItem, { headers: headers })
      .map(res => res.json());
  }

  /**
   *
   * @param projectId
   * @param controllerId
   */
  deleteControllerItem(projectId: string, controllerId: string) {
    const deleteControlletItemUrl = this.baseUrl + 'project/' + projectId + '/controllers/' + controllerId;
    return this.http.delete(deleteControlletItemUrl, { headers: headers })
      .map(res => res.json());
  }

  getObjectsById(id, arrayList, queryString) {
    const observableBatch = [];
    arrayList.forEach((key) => {
      // for dev
      /*
      observableBatch.push(this.http.get('http://localhost:3000/project/'+id+'/'+queryString+'/'+key).map((res) => res.json()));
      */
      // for deploy
      /*
      observableBatch.push(this.http.get('project/' + id + '/' + queryString + '/' + key).map((res) => res.json()));
      */
    });
    return Observable.forkJoin(observableBatch);
  }

  getControllersCheckList(id, array, queryString): Observable<any> {
    return Observable.forkJoin(
      this.getObjectsById(id, array, queryString)
    );
  }
}
