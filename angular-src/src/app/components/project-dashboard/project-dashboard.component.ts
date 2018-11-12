import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { IoAssignmentService } from '../../services/io-assignment.service';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

import { IProject } from '../../models/IProject';

@Component({
  selector: 'app-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.css']
})
export class ProjectDashboardComponent implements OnInit {
  project: IProject;
  projectId: string;
  // projectTitle: string;
  // ioAssignment: any;
  userEmail: string;
  isAdmin: boolean;
  userGuid: string;
  ioAssignment: any;

  constructor(
    // private route: ActivatedRoute,
    private projectService: ProjectService,
    private ioAssignmentService: IoAssignmentService,
    private spinnerService: Ng4LoadingSpinnerService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.projectId = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    const superAdminEmail = 'superAdmin@ampx.ca';
    const adminEmail = 'admin@ampx.ca';
    this.isAdmin = false;
    if (window.localStorage) {
      const user = localStorage.getItem('user');
      const u = JSON.parse(user);
      this.userEmail = u.email;
      this.userGuid = u.guid;
      const isItAdmin = (this.userEmail === adminEmail);
      const isItSuperadmin = (this.userEmail === superAdminEmail);
      this.isAdmin = isItAdmin || isItSuperadmin;
    }
    this.spinnerService.show();
    this.projectService.getProjectById(this.projectId).subscribe(itemProject => {
      this.project = itemProject;
      this.spinnerService.hide();
    },
      err => {
        console.log(err);
        return false;
      });
  }

  createIOAssignment() {
    this.spinnerService.show();
    this.ioAssignment = {};
    this.ioAssignment.length = 0;
    this.ioAssignmentService.createIoAssignment(this.projectId, this.ioAssignment).subscribe(
      (res: Array<string>) => {
        // let id = res['_id'];
        // let responseId = res[res.length-1]['_id']
        const routeToIOAssignment = '/project/' + this.route.snapshot.params['id'] + '/ioassignment/';
        this.spinnerService.hide();
        this.router.navigate([routeToIOAssignment]);
      }, (err) => {
        console.log(err);
      }
    );
  }
}
