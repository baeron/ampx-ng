import { IElectrical } from './../../models/IElectrical';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProjectService } from '../../services/project.service';
import { ExcelService } from '../../services/excel.service';
import { ElectricalService } from '../../services/electrical.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

import { saveAs as importedSaveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import { IProject } from '../../models/IProject';
import { Electrical } from '../../models/Electrical';
import { IElectricals } from '../../models/IElectricals';
import { from } from 'rxjs/observable/from';
//
import { Availability } from '../../shared/Availability';
import { environment } from '../../../environments/environment';



@Component({
  selector: 'app-electrical-list',
  templateUrl: './electrical-list.component.html',
  styleUrls: ['./electrical-list.component.css']
})

export class ElectricalListComponent implements OnInit {
  projectId: string;
  electricals: IElectricals;
  electrical: Electrical = new Electrical();
  projectName: any;
  isChecked = false;
  isViewOnly: boolean;
  isCanChange: boolean;
  electricalArrayList: any;
  userGuid: string;
  teamWork = true;
  //
  project: IProject;
  isAdmin: boolean;
  userEmail: string;

  constructor(
    private electricalService: ElectricalService,
    private excelService: ExcelService,
    private projectServise: ProjectService,
    private router: Router,
    private route: ActivatedRoute,
    private spinnerService: Ng4LoadingSpinnerService,
  ) {
    this.isCanChange = false;
    this.isViewOnly = false;
    this.projectId = this.route.snapshot.params['id'];
    this.electricalArrayList = [];
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
    this.electricalService.getElectricals(this.projectId).subscribe(electricalList => {
      /*
      if (electricalList.electricals.length < 1) {
         this.spinnerService.hide();
        return;
       } else {
      */
        this.projectServise.getCommunityData(this.projectId).subscribe(itemProject => {
          const projectElement = itemProject;
          if (projectElement.creator === this.userGuid) {
            this.isCanChange = true;
            console.log(this.isCanChange);
          } else {
            const canChange = Availability.CanUserChange(projectElement.team_project, this.userGuid);
            const canView = Availability.CanUserView(projectElement.brows_team_project, this.userGuid);
            this.isCanChange = canChange || canView || this.isAdmin;
            console.log(this.isCanChange);
          }
        });
        /*
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
        */
        this.electricals = electricalList;
        this.recalculationParentValeu(electricalList);
        this.spinnerService.hide();
      // }
    }, err => {
        console.log(err);
        this.spinnerService.hide();
        return false;
      }
    );
  }

  puchToElectricalArray(element) {
    if (!element.isChecked) {
      this.electricalArrayList.push(element._id);
    } else {
      this.electricalArrayList.pop();
    }
  }

  /**
   * Method to add all items to the list for export to Excell Electrical UI Data
   * @param isCheck boolean flag
   */
  changeFlag(isCheck: boolean) {
    if (isCheck) {
      this.isChecked = false;
      for (let i = 0; i < this.electricals.electricals.length; ++i) {
        this.electricals.electricals[i].isChecked = false;
        this.electricalArrayList = [];
      }
    } else {
      this.isChecked = true;
      for (let i = 0; i < this.electricals.electricals.length; ++i) {
        this.electricals.electricals[i].isChecked = true;
        this.electricalArrayList.push(this.electricals.electricals[i]._id);
      }
    }
  }

  saveToExcell() {
    const wscols = [
      // A       // B       // C       // D     // E       // F       // G       // H       // I       // J       // K       // L
      // tslint:disable-next-line:max-line-length
      { wch: 5 }, { wch: 16 }, { wch: 12 }, { wch: 7 }, { wch: 10 }, { wch: 13 }, { wch: 14 }, { wch: 14 }, { wch: 25 }, { wch: 12 }, { wch: 12 }, { wch: 10 },
      // M       // N       // O     // P
      { wch: 7 }, { wch: 11 }, { wch: 7 }, { wch: 27 }
    ];
    const ws = XLSX.utils.table_to_book(document.getElementById('exportable')).Sheets.Sheet1;
    ws['!cols'] = wscols;
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Electricals List');
    const wbout = XLSX.write(wb, {
      bookType: 'xlsx',
      type: 'binary',
      cellStyles: true
    });
    function s2ab(s) {
      const buf = new ArrayBuffer(s.length);
      const view = new Uint8Array(buf);
      // tslint:disable-next-line:curly
      for (let i = 0; i !== s.length; ++i)
        // tslint:disable-next-line:no-bitwise
        view[i] = s.charCodeAt(i) & 0xFF;
      return buf;
    }
    // tslint:disable-next-line:max-line-length
    importedSaveAs(new Blob([s2ab(wbout)], { type: 'application/octet-stream' }), 'Report from project electricals ' + Date.now() + '.xlsx');
  }

  saveToExcellUIData() {
    const projectArray = [];
    const wscols = [
      // A        // B       // C       // D       // E      // F       // G       // H        // I       // J      // K       // L
      // tslint:disable-next-line:max-line-length
      { wch: 13 }, { wch: 12 }, { wch: 10 }, { wch: 10 }, { wch: 15 }, { wch: 12 }, { wch: 17 }, { wch: 13 }, { wch: 15 }, { wch: 17 }, { wch: 12 }, { wch: 17 },
      // M       // N       // O       // P       // Q       // R       // S       // T       // U       // V       // W       // X
      // tslint:disable-next-line:max-line-length
      { wch: 15 }, { wch: 22 }, { wch: 10 }, { wch: 12 }, { wch: 12 }, { wch: 12 }, { wch: 12 }, { wch: 12 }, { wch: 12 }, { wch: 25 }, { wch: 20 }, { wch: 15 },
      // Y       // Z       // AA      // AB      // AC      // AD      // AE      // AF      //AG       //AH       //AI       //AJ
      // tslint:disable-next-line:max-line-length
      { wch: 10 }, { wch: 12 }, { wch: 12 }, { wch: 17 }, { wch: 10 }, { wch: 12 }, { wch: 13 }, { wch: 12 }, { wch: 17 }, { wch: 15 }, { wch: 12 }, { wch: 17 },
      // AK      // AL      // AM      // AN      // AO      // AP      // AQ      // AR
      { wch: 22 }, { wch: 20 }, { wch: 20 }, { wch: 20 }, { wch: 15 }, { wch: 15 }, { wch: 15 }, { wch: 20 }
    ];
    for (let i = 0; i < this.electricals.electricals.length; ++i) {
      projectArray.push(this.electricals.electricals[i]._id);
    }
    const queryString = 'electrical-item';
    const scheetName = 'Electricals UI List';
    const controllerName = 'Electrical';
    const fileName = 'ELECTRICAL REPORT';
    this.excelService.exportToExcell(
      this.projectId,
      this.projectName.title,
      projectArray,
      queryString,
      scheetName,
      fileName,
      controllerName,
      wscols
    );
  }

  createNewElectrical() {
    this.spinnerService.show();
    const tempElectrical = this.electrical;
    // console.log(tempElectrical);
    // tempElectrical.isChecked = true;
    // this.electrical = {};
    this.electricalService.createElectrical(this.projectId, tempElectrical, this.userGuid).subscribe(
      electricalList => {
        const electricalLength = electricalList.electricals.length;
        const lastElectrical = electricalLength - 1;
        const responseId = electricalList.electricals[lastElectrical]['_id'];
        const routeToElectricalItem = '/project/' + this.route.snapshot.params['id'] + '/electricals/' + responseId;
        this.spinnerService.hide();
        this.router.navigate([routeToElectricalItem]);
      }, (err) => {
        console.error(err);
      }
    );
  }

  recalculationParentValeu(projects) {
    for (let i = 0; i < projects.electricals.length; ++i) {
      const electricalItem = projects.electricals[i];
      if (electricalItem.chiildList.length > 0) {
        electricalItem.totalPF = 0;
        electricalItem.totalEFF = 0;
        electricalItem.loadFactor = 0;
        electricalItem.scenarioFirstLoadFactor = 0;
        electricalItem.totalConnectedKVAR = 0;
        electricalItem.totalConnectedKVA = 0;
        electricalItem.totalDemandFLA = 0;
        electricalItem.totalDemandKW = 0;
        electricalItem.totalDemandKVAR = 0;
        electricalItem.totalDemandKVA = 0;
        electricalItem.scenarioFirstFLA = 0;
        electricalItem.scenarioFirstKW = 0;
        electricalItem.scenarioFirstKVAR = 0;
        electricalItem.scenarioFirstKVA = 0;

        for (let j = 0; j < electricalItem.chiildList.length; ++j) {
          const childElement = electricalItem.chiildList[j];
          electricalItem.totalConectedFla += childElement.totalConectedFla;
          electricalItem.totalConectedKW += childElement.totalConectedKW;
          electricalItem.totalConnectedKVAR += childElement.totalConnectedKVAR;
          electricalItem.totalConnectedKVA += childElement.totalConnectedKVA;
          //
          electricalItem.totalPF += childElement.totalPF;
          electricalItem.totalEFF += childElement.totalEFF;
          electricalItem.loadFactor += childElement.loadFactor;
          //
          electricalItem.totalDemandFLA += childElement.totalDemandFLA;
          electricalItem.totalDemandKW += childElement.totalDemandKW;
          electricalItem.totalDemandKVAR += childElement.totalDemandKVAR;
          electricalItem.totalDemandKVA += childElement.totalDemandKVA;
          //
          electricalItem.scenarioFirstLoadFactor += childElement.scenarioFirstLoadFactor;
          //
          electricalItem.scenarioFirstFLA += childElement.scenarioFirstFLA;
          electricalItem.scenarioFirstKW += childElement.scenarioFirstKW;
          electricalItem.scenarioFirstKVAR += childElement.scenarioFirstKVAR;
          electricalItem.scenarioFirstKVA += childElement.scenarioFirstKVA;
        }
        electricalItem.totalConectedFla = Math.ceil(electricalItem.totalConectedFla * 100) / 100;
        electricalItem.totalConectedKW = Math.ceil(electricalItem.totalConectedKW * 100) / 100;
        electricalItem.totalConnectedKVAR = Math.ceil(electricalItem.totalConnectedKVAR * 100) / 100;
        electricalItem.totalConnectedKVA = Math.ceil(electricalItem.totalConnectedKVA * 100) / 100;
        electricalItem.totalDemandKW = Math.ceil(electricalItem.totalDemandKW * 100) / 100;
        electricalItem.totalDemandFLA = Math.ceil(electricalItem.totalDemandFLA * 100) / 100;
        electricalItem.totalDemandKVAR = Math.ceil(electricalItem.totalDemandKVAR * 100) / 100;
        electricalItem.totalDemandKVA = Math.ceil(electricalItem.totalDemandKVA * 100) / 100;
        electricalItem.scenarioFirstFLA = Math.ceil(electricalItem.scenarioFirstFLA * 100) / 100;
        electricalItem.scenarioFirstKW = Math.ceil(electricalItem.scenarioFirstKW * 100) / 100;
        electricalItem.scenarioFirstKVAR = Math.ceil(electricalItem.scenarioFirstKVAR * 100) / 100;
        electricalItem.scenarioFirstKVA = Math.ceil(electricalItem.scenarioFirstKVA * 100) / 100;
        electricalItem.totalPF = Math.ceil((electricalItem.totalPF / electricalItem.chiildList.length) * 100) / 100;
        electricalItem.totalEFF = Math.ceil((electricalItem.totalEFF / electricalItem.chiildList.length) * 100) / 100;
        electricalItem.loadFactor = Math.ceil((electricalItem.loadFactor / electricalItem.chiildList.length) * 100) / 100;
        // electricalItem.selectedMotorSF
        // tslint:disable-next-line:max-line-length
        electricalItem.scenarioFirstLoadFactor = Math.ceil((electricalItem.scenarioFirstLoadFactor / electricalItem.chiildList.length) * 100) / 100;
      }
    }
  }
}
