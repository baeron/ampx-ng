import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

const headers = new Headers();
headers.append('Content-Type', 'application/json');
const params = new URLSearchParams();

@Injectable()
export class IoAssignmentService {
  baseUrl = environment.baseUrl;
  constructor(private http: Http) { }

  /**
   * Method to get the list of elements of the IO Assignment
   * @param projectId
   */
  getIoAssignmentList(projectId: string): Observable<any> {
    const getIoAssignmentListUrl = this.baseUrl + 'project/' + projectId + '/ioassignments';
      return this.http.get(getIoAssignmentListUrl, {headers: headers})
        .map(res => res.json());
  }

  /**
   * Method for creating a specific element of the IO Assignment
   * @param projectId
   * @param ioAssignment
   */
  createIoAssignment(projectId: string, ioAssignment: any): Observable<any> {
    const createIOAssignmentUrl = this.baseUrl + 'project/' + projectId + '/io_assignment-create';
      return this.http.post(createIOAssignmentUrl, ioAssignment, {headers: headers})
          .map(res => res.json());
  }

  /**
   * Method for updating a specific element of the IO Assignment
   * @param projectId
   * @param data
   */
  updateIOAssignment(projectId: string, data: any): Observable<any> {
    const updateIOAssignmentUrl = this.baseUrl + 'project/' + projectId + '/io_assignment-update/';
      return this.http.patch(updateIOAssignmentUrl, data, {headers: headers})
        .map(res => res.json());
  }
}
