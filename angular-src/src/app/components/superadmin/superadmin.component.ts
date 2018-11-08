import { IProject } from './../../models/IProject';
import { ProjectService } from './../../services/project.service';
import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Profile } from '../profile/profile.model';

@Component({
  selector: 'app-superadmin',
  templateUrl: './superadmin.component.html',
  styleUrls: ['./superadmin.component.css']
})

export class SuperadminComponent implements OnInit {
  users: Profile[];
  usersArr: any;
  projects: IProject;
  projectArray: IProject[];
  userEmail: string;
  isAdmin: boolean;
  userGuid: string;

  constructor(
    private usersService: UsersService,
    private projectService: ProjectService,
    private router: Router,
    private spinnerService: Ng4LoadingSpinnerService
  ) { }

  ngOnInit() {
    const superAdminEmail = 'superAdmin@ampx.ca';
    const adminEmail = 'admin@ampx.ca';
    this.isAdmin = false;
    if (window.localStorage) {
      const user = localStorage.getItem('user');
      const u = JSON.parse(user);
      this.userEmail = u.email;
      this.userGuid = u.guid;
      this.isAdmin = (this.userEmail === adminEmail);
    }
    this.usersService.getUsers().subscribe(userList => {
      this.users = userList;
      this.usersArr = [];
        for (let i = 0; i < this.users.length; ++i) {
          const itemUser = this.users[i];
          if ( itemUser.email === superAdminEmail || itemUser.email === adminEmail) {
          } else {
            this.usersArr.push(itemUser);
          }
        }
        for (let i = 0; i < this.usersArr.length; ++i) {
          const userItem = this.usersArr[i];
          userItem.projectList = [];
          this.projectService.getProject(userItem.guid).subscribe(userProjectList => {
              userItem.projectList.push(userProjectList);
            },
            err => {
              console.error(err);
              return false;
            });
        }
      }, err => {
        console.error(err);
        return false;
      });
  }

  public deleteUser(userId: string, userItemNumber: number, userGuid: string): void {
    this.usersService.deleteUser(userId).subscribe(req => {
      if (req.success) {
        this.usersArr.splice(userItemNumber, 1);
      }
    }, err => {
      console.error(err);
    });
    this.projectService.deleteProjectByUserGuid(userGuid).subscribe(req => {
      if (req.success) {
        console.log('It is work');
      }
    }, err => {
      console.error(err);
    });
  }

  public getProjectsList(userGuid: string): void {
    this.projectService.getProject(userGuid).subscribe(userProjectList => {
        this.projects = userProjectList;
        this.projectArray.push(userProjectList);
      }, err => {
        console.error(err);
        return false;
      });
  }
}
