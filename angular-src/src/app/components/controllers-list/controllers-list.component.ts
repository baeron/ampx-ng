import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ControllerService } from '../../services/controller.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ExcelService } from '../../services/excel.service';
import { ProjectService } from '../../services/project.service';
//
import { environment } from '../../../environments/environment';
import { Availability } from '../../shared/Availability';

@Component({
  selector: 'app-controllers-list',
  templateUrl: './controllers-list.component.html',
  styleUrls: ['./controllers-list.component.css']
})
export class ControllersListComponent implements OnInit {

  projectId: string;
  controllers: any;
  controller: any;
  controllersArrayList: any;
  isChecked: Boolean = false;
  projectName: any;
  //
  isAdmin: boolean;
  userEmail: string;
  userGuid: string;
  //
  project: any;
  isCanChange: boolean;

  constructor(
    private controllerService: ControllerService,
    private router: Router,
    private route: ActivatedRoute,
    private spinnerService: Ng4LoadingSpinnerService,
    private projectServise: ProjectService,
    private excelService: ExcelService,
  ) {
      this.projectId = this.route.snapshot.params['id'];
      this.controllersArrayList = [];
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
    this.controllerService.getControllersList(this.projectId).subscribe(controllerList => {
      this.controllers = controllerList;
      if (controllerList.creator === this.userGuid) {
        this.isCanChange = true;
      } else {
        const canChange = Availability.CanUserChange(this.controllers.team_project, this.userGuid);
        const canView = Availability.CanUserView(this.controllers.brows_team_project, this.userGuid);
        this.isCanChange = canChange || canView || this.isAdmin;
      }
    },
    err => {
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

  pushToControllerArray(element) {
    if (!element.isChecked) {
      this.controllersArrayList.push(element._id);
    } else {
      this.controllersArrayList.pop();
    }
  }

  changeFlag(isCheck) {
    if (isCheck) {
      this.isChecked = false;
      for (let i = 0; i < this.controllers.controllers.length; ++i) {
        this.controllers.controllers[i].isChecked = false;
        this.controllersArrayList = [];
      }
    } else {
      this.isChecked = true;
      for (let i = 0; i < this.controllers.controllers.length; ++i) {
        this.controllers.controllers[i].isChecked = true;
        this.controllersArrayList.push(this.controllers.controllers[i]._id);
      }
    }
  }

  saveToExcell() {
    const wscols = [
      // A      // B        // C       // D      // E       // F       // G       // H       // I      // J         // K     // L
      {wch: 5}, {wch: 25}, {wch: 32}, {wch: 17}, {wch: 27}, {wch: 22}, {wch: 20}, {wch: 17}, {wch: 22}, {wch: 18}, {wch: 7}, {wch: 7},
      // M      // N      // O       // P       // Q       // R       // S       // T       // U       // V       // W       // X
      {wch: 7}, {wch: 7}, {wch: 10}, {wch: 12}, {wch: 12}, {wch: 15}, {wch: 12}, {wch: 10}, {wch: 10}, {wch: 17}, {wch: 14}, {wch: 15},
      // Y
      {wch: 22}
    ];
    const projectArray = [];
    for (let i = 0; i < this.controllers.controllers.length; ++i) {
      projectArray.push(this.controllers.controllers[i]._id);
    }
    const queryString = 'controllers-item-list';
    const scheetName = ' Controllers List';
    const controllerName = 'Controllers';
    const fileName = 'CONTROLLER INDEX';
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

  saveToExcellUIData() {
    const wscols = [
      // A       // B       // C       // D       // E        // F      // G        // H      // I        // J      // K        // L
      {wch: 14}, {wch: 10}, {wch: 22}, {wch: 28}, {wch: 28}, {wch: 32}, {wch: 12}, {wch: 18}, {wch: 18}, {wch: 21}, {wch: 15}, {wch: 17},
      // M       // N       // O       // P       //Q        //R       //S       //T       //U       //V       //W
      {wch: 19}, {wch: 27}, {wch: 19}, {wch: 22}, {wch: 19}, {wch: 8}, {wch: 8}, {wch: 7}, {wch: 7}, {wch: 13}, {wch: 12},
      // X       // Y       // Z       // AA     // AB      // AC      // AD      // AE      // AF      // AG      // AH
      {wch: 15}, {wch: 13}, {wch: 13}, {wch: 9}, {wch: 12}, {wch: 16}, {wch: 15}, {wch: 15}, {wch: 22}, {wch: 16}, {wch: 8}
    ];
    const projectArray = [];
    for (let i = 0; i < this.controllers.controllers.length; ++i) {
      projectArray.push(this.controllers.controllers[i]._id);
    }
    const queryString = 'controllers-item';
    const scheetName = 'Controllers UI List';
    const controllerName = 'Controllers';
    const fileName = 'CONTROLLER REPORT';
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

  saveController() {
    this.controller = {};
    this.controller.length = 0;
    this.spinnerService.show();
    this.controllerService.createController(this.projectId, this.controller).subscribe(
      (res: Array<string>) => {
        const responseId = res[res.length - 1]['_id'];
        const routeToControllerItem = '/project/' + this.route.snapshot.params['id'] + '/controllers/' + responseId;
        this.router.navigate([routeToControllerItem]);
      }, (err) => {
        console.log(err);
      }
    );
    this.spinnerService.hide();
  }
}
