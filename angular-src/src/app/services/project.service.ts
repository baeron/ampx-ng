import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import { IProject } from '../models/IProject';

const headers = new Headers();
headers.append('Content-Type', 'application/json');
const params = new URLSearchParams();


@Injectable()
export class ProjectService {
  baseUrl = environment.baseUrl;
  constructor(private http: Http) { }

  /**
   * GET method to get all projects created by a specific user.
   * @param userGuid Unique identifier assigned user during registration
   * @returns return an array of projects created by the user with a unique GUID identifier from server side
   */
  getProject(userGuid: string): Observable<any> {
    params.delete('guid');
    params.append('guid', userGuid);
    const options = new RequestOptions({ headers: headers, params: params });
    const prjectUrl = this.baseUrl + 'project';
    const allProjects =  this.http.get(prjectUrl, options)
      .map(res => res.json());
      return allProjects;
  }

  /**
   * GET method to getting all the projects available for collaboration of this user with other users of the app
   * @param userGuid unique user id
   * @returns return an array of projects created other user, but editable by this user
   */
  getTeamProject(userGuid: string): Observable<any> {
    params.delete('guid');
    params.append('guid', userGuid);
      const teamPrjectUrl = this.baseUrl + 'project/team-project';
      return this.http.get(teamPrjectUrl, { headers: headers, params: params })
        .map(res => res.json());
  }

  /**
   * GET method to get all the projects created by another user, but available for viewing to the currently registered user
   * @param userGuid unique user id
   * @returns return an array of projects created other user, but editable by this user
   */
  getBrowsingProject(userGuid: string): Observable<any> {
    params.delete('guid');
    params.append('guid', userGuid);
    const browsingProjectUrl = this.baseUrl + 'project/browsing-project';
      return this.http.get(browsingProjectUrl, { headers: headers, params: params })
        .map(res => res.json());
  }

  /*
  getCreatedProjects(userGuid) {
    params.append('guid', userGuid);
    const options = new RequestOptions({ headers: headers, params: params });
    const createdProjectsUrl = this.baseUrl + 'project/creating-project';
    return this.http.get(createdProjectsUrl, options)
      .map(res => res.json());
  }
  */

  /**
   * POST method to create a new project by the current user
   * @param project Get data from user, inherits IProject interface
   * @returns return JSON with status and message from server-side.
   */
  postProject(project: IProject): Observable<any> {
    params.delete('guid');
    const postProjectsUrl = this.baseUrl + 'project/project-create';
    return this.http.post(postProjectsUrl, project, {headers: headers})
      .map(res => res.json());
  }

  /**
   * PUT method for updating project name
   * @param id project identifier as a string variable
   * @param project updated project derived from the user interaction modal window
   * @returns return JSON with status and message from server-side.
   */
  updateProject(id: string, project: IProject) {
    params.delete('guid');
    const updateProjectUrl = this.baseUrl + 'project/' + id;
    return this.http.put(updateProjectUrl, project, {headers: headers})
      .map(res => res.json());
  }

  /**
   * DELETE method to delete a specific project
   * @param id project identifier as a string variable
   * @returns return JSON with status and message from server-side.
   */
  deleteProject(id: string): Observable<any> {
    params.delete('guid');
    const deleteProjectUrl = this.baseUrl + 'project/' + id;
      return this.http.delete(deleteProjectUrl, {headers: headers})
        .map(res => res.json());
  }

  /**
   * Method of deleting a project from a specific user database
   * @param creatorGuid unique user id
   * @returns return JSON with status and message from server-side.
   */
  deleteProjectByUserGuid(creatorGuid: string): Observable<any> {
    params.delete('guid');
    const deleteProjectUrl = this.baseUrl + 'project/' + creatorGuid;
    return this.http.delete(deleteProjectUrl, {headers: headers})
      .map(res => res.json());
  }

  /**
   *
   * @param id
   */
  getProjectById(id: string): Observable<any> {
    params.delete('guid');
    const projectByIdUrl = this.baseUrl + 'project/' + id;
      return this.http.get(projectByIdUrl, {headers: headers})
        .map(res => res.json());
  }

  /**
   *
   * @param id
   */
  getProjectNameById(id: string): Observable<any> {
    params.delete('guid');
    const projectNameByIdUrl = this.baseUrl + 'project/project-name/' + id;
      return this.http.get(projectNameByIdUrl, {headers: headers})
        .map(res => res.json());
  }
}
