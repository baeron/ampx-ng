import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { SldscheduleService } from '../../services/sldschedule.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ExcelService } from '../../services/excel.service';
import { environment } from '../../../environments/environment';

import { Availability } from '../../shared/Availability';

@Component({
  selector: 'app-sld-schedule-list',
  templateUrl: './sld-schedule-list.component.html',
  styleUrls: ['./sld-schedule-list.component.css']
})
export class SldScheduleListComponent implements OnInit {
  projectId: string;
  sldSchedules: any;
  sldSchedule: any;
  projectName: any;
  sldSheduleArrayList: any;
  isChecked: Boolean = false;
  userEmail: string;
  project: any;
  teamWork = false;
  isAdmin: boolean;
  userGuid: string;
  isCanChange: boolean;

  constructor(
    private sldscheduleService: SldscheduleService,
    private router: Router,
    private route: ActivatedRoute,
    private projectServise: ProjectService,
    private spinnerService: Ng4LoadingSpinnerService,
    private excelService: ExcelService,
  ) {
    this.projectId = this.route.snapshot.params['id'];
    this.sldSheduleArrayList = [];
  }

  ngOnInit() {
    this.isAdmin = false;
    const superAdminEmail = environment.sadmin;
    const adminEmail = environment.admin;
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
    this.sldscheduleService.getSldScheduleList(this.projectId).subscribe(sldSchedulesList => {
      this.sldSchedules = sldSchedulesList.sldschedules;
      this.projectServise.getProjectById(this.projectId).subscribe(itemProject => {
        this.project = itemProject;
        if (itemProject.creator === this.userGuid) {
          this.isCanChange = true;
        } else {
          const canChange = Availability.CanUserChange(this.project.team_project, this.userGuid);
          const canView = Availability.CanUserView(this.project.brows_team_project, this.userGuid);
          this.isCanChange = canChange || canView || this.isAdmin;
        }
        /*
        for (let i = 0; i < this.project.team_project.length; ++i) {
          const teamWorker = this.project.team_project[i];
          if (this.project.creator === this.userEmail || teamWorker === this.userEmail) {
            this.teamWork = true;
            break;
          } else {
            this.teamWork = false;
          }
        }
        */
      });
    },
      err => {
        this.spinnerService.hide();
        console.log(err);
        return false;
      });
    this.projectServise.getProjectNameById(this.projectId).subscribe(project => {
      this.projectName = project;
    }, err => {
      this.spinnerService.hide();
      console.log(err);
      return false;
    });
    this.spinnerService.hide();
  }

  puchToSldSheduleArray(element) {
    if (!element.isChecked) {
      this.sldSheduleArrayList.push(element._id);
    } else {
      this.sldSheduleArrayList.pop();
    }
  }

  changeFlag(isCheck) {
    if (isCheck) {
      this.isChecked = false;
      for (let i = 0; i < this.sldSchedules.length; ++i) {
        this.sldSchedules[i].isChecked = false;
        this.sldSheduleArrayList = [];
      }
    } else {
      this.isChecked = true;
      for (let i = 0; i < this.sldSchedules.length; ++i) {
        this.sldSchedules[i].isChecked = true;
        this.sldSheduleArrayList.push(this.sldSchedules[i]._id);
      }
    }
  }

  saveToExcell() {
    const wscols = [
      // tslint:disable-next-line:max-line-length
      // A     // B         // C       // D       // E       // F       // G       // H       // I       // J       // K       // L     // M       // N       // O       // P
      // tslint:disable-next-line:max-line-length
      { wch: 5 }, { wch: 29 }, { wch: 23 }, { wch: 11 }, { wch: 13 }, { wch: 11 }, { wch: 12 }, { wch: 17 }, { wch: 15 }, { wch: 17 }, { wch: 15 }, { wch: 8 }, { wch: 13 }, { wch: 12 }, { wch: 7 }, { wch: 12 },
      // Q       // R       // S       // T       // U       // V       // W        // X     // Y     // Z      // AA     // AB     // AC      // AD     //AE     // AF     // AG
      // tslint:disable-next-line:max-line-length
      { wch: 12 }, { wch: 7 }, { wch: 10 }, { wch: 12 }, { wch: 12 }, { wch: 15 }, { wch: 15 }, { wch: 5 }, { wch: 7 }, { wch: 5 }, { wch: 7 }, { wch: 7 }, { wch: 9 }, { wch: 9 }, { wch: 9 }, { wch: 9 }, { wch: 9 },
      // AH      // AI      // AJ      // AK     // AL      // AM      // AN      // AO      // AP
      { wch: 9 }, { wch: 29 }, { wch: 29 }, { wch: 29 }, { wch: 29 }, { wch: 27 }, { wch: 27 }, { wch: 27 }, { wch: 27 }
    ];
    const projectArray = [];
    for (let i = 0; i < this.sldSchedules.length; ++i) {
      projectArray.push(this.sldSchedules[i]._id);
    }
    const queryString = 'sldshedule-item-list';
    const scheetName = 'SLD Schedules List';
    const controllerName = 'Sldshadule';
    const fileName = 'SLD Schedule INDEX';
    // tslint:disable-next-line:max-line-length
    this.excelService.exportToExcell(this.projectId, this.projectName.title, projectArray, queryString, scheetName, fileName, controllerName, wscols);
  }

  saveToExcellUIData() {
    const wscols = [
      // tslint:disable-next-line:max-line-length
      // A       // B        // C       // D     // E       // F       // G       // H       // I       // J       // K       // L     // M       // N       // O       // P
      { wch: 25 }, { wch: 25 }, { wch: 22 }, { wch: 29 }, { wch: 16 }, { wch: 10 }, { wch: 19 }, { wch: 15 }, { wch: 19 }, { wch: 13 }, { wch: 17 }, { wch: 8 }, { wch: 8 }, { wch: 12 }, { wch: 15 }, { wch: 12 },
      // tslint:disable-next-line:max-line-length
      // Q       // R       // S       // T       // U       // V       // W       // X       // Y       // Z       // AA     // AB      // AC        // AD    // AE      // AF      // AG
      // tslint:disable-next-line:max-line-length
      { wch: 12 }, { wch: 15 }, { wch: 15 }, { wch: 12 }, { wch: 13 }, { wch: 12 }, { wch: 15 }, { wch: 8 }, { wch: 12 }, { wch: 16 }, { wch: 12 }, { wch: 12 }, { wch: 12 }, { wch: 10 }, { wch: 16 }, { wch: 17 }, { wch: 17 },
      // AH      // AI      // AJ      // AK      // AL      // AM      // AN      // AO      // AP    // AQ      // AR      // AS      // AT      // AU      // AV      // AW
      // tslint:disable-next-line:max-line-length
      { wch: 17 }, { wch: 7 }, { wch: 10 }, { wch: 13 }, { wch: 15 }, { wch: 17 }, { wch: 13 }, { wch: 17 }, { wch: 16 }, { wch: 16 }, { wch: 14 }, { wch: 14 }, { wch: 18 }, { wch: 6 }, { wch: 22 }, { wch: 20 },
      // AX      // AY      // AZ      // BA      // BB      // BC
      { wch: 20 }, { wch: 20 }, { wch: 20 }, { wch: 20 }, { wch: 20 }, { wch: 20 }
    ];
    const projectArray = [];
    for (let i = 0; i < this.sldSchedules.length; ++i) {
      projectArray.push(this.sldSchedules[i]._id);
    }
    const queryString = 'sldshedule-item';
    const scheetName = 'SLD Shedules UI List';
    const controllerName = 'Sldshadule';
    const fileName = 'SLD Shedule REPORT';
    // tslint:disable-next-line:max-line-length
    this.excelService.exportToExcell(this.projectId, this.projectName.title, projectArray, queryString, scheetName, fileName, controllerName, wscols);
  }

  saveSldShedule() {
    this.sldSchedule = {};
    this.sldSchedule.length = 0;
    this.spinnerService.show();
    this.sldscheduleService.createSldSchedule(this.projectId, this.sldSchedule).subscribe(
      (res: Array<string>) => {
        // let id = res['_id'];
        const responseId = res[res.length - 1]['_id'];
        const routeToCableItem = '/project/' + this.route.snapshot.params['id'] + '/sldshedules/' + responseId;
        this.router.navigate([routeToCableItem]);
      }, (err) => {
        console.log(err);
      }
    );
    this.spinnerService.hide();
  }
}
