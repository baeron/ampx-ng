import { Component, OnInit, DoCheck } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Router } from '@angular/router';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

import { IProject } from '../../models/IProject';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit, DoCheck {
  project: IProject[];
  projectLenth: number;
  teamProjects: IProject[];
  browsingProjects: IProject[];
  // value: any;
  createProject: Boolean = true;
  dropProject: Boolean = true;
  chengeProject: Boolean = true;
  addTeamUser: Boolean = false;
  addViewerUser: Boolean = false;
  userGuid: string;
  creatorEmail: string;

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private spinnerService: Ng4LoadingSpinnerService
  ) {
    this.project = [];
    this.teamProjects = [];
    this.browsingProjects = [];
  }

  ngOnInit() {
    if (window.localStorage) {
      const user = localStorage.getItem('user');
      const u = JSON.parse(user);
      this.userGuid = u.guid;
      this.creatorEmail = u.email;
    }
    // this.spinnerService.show();
    this.projectService.getProject(this.userGuid).subscribe(projectList => {
      this.project = projectList;
      this.projectLenth = projectList.length || 0;
      // this.spinnerService.hide();
    },
      err => {
        console.log(err);
        return false;
      });
    //
    // this.spinnerService.show();
    this.projectService.getTeamProject(this.userGuid).subscribe(teamProjectList => {
      this.teamProjects = teamProjectList;
      // this.teamProjectLength = teamProjectList.length || 0;
      // console.log(this.teamProjects);
      // this.spinnerService.hide();
    },
      err => {
        console.error('Somthing was wrong in service for team work');
        return false;
      });
    // this.spinnerService.show();
    this.projectService.getBrowsingProject(this.userGuid).subscribe(browsingProjectList => {
      this.browsingProjects = browsingProjectList;
      // this.browsingProjectLength = browsingProjectList.length || 0;
      // console.log(this.browsingProjects);
      // this.spinnerService.hide();
    },
      err => {
        console.error('Somthing was wrong in servise for browsing project');
        return false;
      });
  }

  ngDoCheck() {
    if (!this.project) {
      return;
    } else if (this.projectLenth < Object.keys(this.project).length || this.projectLenth > Object.keys(this.project).length) {
      this.projectService.getProject(this.userGuid).subscribe(projectList => {
        if (projectList) {
          this.project = projectList;
          this.projectLenth = projectList.length;
        } else {
          console.error('Some problem with serwer-side or servise params for getting update project list');
          return;
        }
      },
        err => {
          console.log(err);
          return false;
        });
    }
    return;
  }
}
