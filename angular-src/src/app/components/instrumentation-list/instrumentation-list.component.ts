import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { InstrumentationService } from '../../services/instrumentation.service';
import { ExcelService } from '../../services/excel.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Availability } from '../../shared/Availability';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-instrumentation-list',
  templateUrl: './instrumentation-list.component.html',
  styleUrls: ['./instrumentation-list.component.css']
})
export class InstrumentationListComponent implements OnInit {

  projectId: string;
  instrumentations: Object;
  instrumentation: any;
  projectName: any;
  isChecked: Boolean = false;
  projectArray: any;
  instrumentationItem: any;
  instrumentationArrayList: any;
  test: any;
  project: any;
  isAdmin: boolean;
  isCanChange: boolean;
  userEmail: string;
  userGuid: string;

  constructor(
    private instrumentationService: InstrumentationService,
    private projectServise: ProjectService,
    private router: Router,
    private route: ActivatedRoute,
    private excelService: ExcelService,
    private spinnerService: Ng4LoadingSpinnerService
  ) {
    this.projectId = this.route.snapshot.params['id'];
    this.instrumentationArrayList = [];
    this.test = [];
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
    this.instrumentationService.getInstrumentationsList(this.projectId).subscribe(instrumentationList => {
      this.instrumentation = instrumentationList.instrumentations;
      this.projectServise.getProjectById(this.projectId).subscribe(itemProject => {
        this.project = itemProject;
        if (itemProject.creator === this.userGuid) {
          this.isCanChange = true;
        } else {
          const canChange = Availability.CanUserChange(this.project.team_project, this.userGuid);
          const canView = Availability.CanUserView(this.project.brows_team_project, this.userGuid);
          this.isCanChange = canChange || canView || this.isAdmin;
        }
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

  saveToExcell() {
    const wscols = [
      // A      // B       // C       // D       // E       // F       // G       // H      // I       // J       // K       // L
      {wch: 7}, {wch: 24}, {wch: 25}, {wch: 19}, {wch: 22}, {wch: 17}, {wch: 18}, {wch: 9}, {wch: 9}, {wch: 9}, {wch: 10}, {wch: 13},
      // M       // N       // O       // P       //Q         //R
      {wch: 14}, {wch: 14}, {wch: 19}, {wch: 15}, {wch: 15}, {wch: 17}
  ];
  const projectArray = [];
  for (let i = 0; i < this.instrumentation.length; ++i) {
    projectArray.push(this.instrumentation[i]._id);
  }
  const queryString = 'instrumentations-item-list';
  const scheetName = 'Instrumentations List';
  const controllerName = 'Instrumentations';
  const fileName = 'INSTRUMENT INDEX';
  this.excelService.exportToExcell(
    this.projectId,
    this.projectName.title,
    projectArray,
    queryString,
    scheetName,
    fileName,
    controllerName,
    wscols);
  }

  puchToInstrumentationArray(element) {
    if (!element.isChecked) {
      this.instrumentationArrayList.push(element._id);
    } else {
      this.instrumentationArrayList.pop();
    }
  }

  changeFlag(isCheck) {
    if (isCheck) {
      this.isChecked = false;
      for (let i = 0; i < this.instrumentation.length; ++i) {
        this.instrumentation[i].isChecked = false;
        this.instrumentationArrayList = [];
      }
    } else {
      this.isChecked = true;
      for (let i = 0; i < this.instrumentation.length; ++i) {
        this.instrumentation[i].isChecked = true;
        this.instrumentationArrayList.push(this.instrumentation[i]._id);
      }
    }
  }

  saveToExcellUIData() {
    const wscols = [
      // A       // B      // C       // D       // E       // F       // G       // H      // I       // J       // K       // L
      {wch: 7}, {wch: 22}, {wch: 25}, {wch: 20}, {wch: 22}, {wch: 18}, {wch: 18}, {wch: 7}, {wch: 10}, {wch: 10}, {wch: 10}, {wch: 13},
      // M       // N       // O       // P       // Q       // R       // S       // T       // U       // V       // W       // X
      {wch: 15}, {wch: 15}, {wch: 25}, {wch: 22}, {wch: 17}, {wch: 15}, {wch: 15}, {wch: 20}, {wch: 17}, {wch: 15}, {wch: 13}, {wch: 15},
      // Y       // Z     // AA      // AB      // AC      // AD      // AE      // AF      // AG     // AH     // AI
      {wch: 20}, {wch: 9}, {wch: 10}, {wch: 12}, {wch: 12}, {wch: 25}, {wch: 20}, {wch: 25}, {wch: 7}, {wch: 7}, {wch: 7}
  ];
    const projectArray = [];
    for (let i = 0; i < this.instrumentation.length; ++i) {
      if (this.instrumentation[i].isChecked === true) {
        projectArray.push(this.instrumentation[i]._id);
      }
    }
    const queryString = 'instrumentations-item';
    const scheetName = 'Instrumentations UI List';
    const controllerName = 'Instrumentations';
    const fileName = 'INSTRUMENT REPORT';
    this.excelService.exportToExcell(
      this.projectId,
      this.projectName.title,
      projectArray,
      queryString,
      scheetName,
      fileName,
      controllerName,
      wscols);
  }

  saveInstrimentation() {
    this.instrumentation = {};
    this.instrumentation.length = 0;
    this.spinnerService.show();
    this.instrumentationService.createInstrumentstion(this.projectId, this.instrumentation).subscribe(
      (res: Array<string>) => {
        // let id = res['_id'];
        const responseId = res[res.length - 1]['_id'];
        const routeToInstrumentationItem = '/project/' + this.route.snapshot.params['id'] + '/instrumentations/' + responseId;
        this.router.navigate([routeToInstrumentationItem]);
      }, (err) => {
        console.log(err);
      }
    );
    this.spinnerService.hide();
  }
}
