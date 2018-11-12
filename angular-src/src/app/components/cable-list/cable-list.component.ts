import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CableService } from '../../services/cable.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ProjectService } from '../../services/project.service';
import { ExcelService } from '../../services/excel.service';

// import {saveAs as importedSaveAs} from "file-saver";
// import * as XLSX from 'xlsx';
import { environment } from '../../../environments/environment';
import { Availability } from '../../shared/Availability';

@Component({
  selector: 'app-cable-list',
  templateUrl: './cable-list.component.html',
  styleUrls: ['./cable-list.component.css']
})
export class CableListComponent implements OnInit {

  projectId: string;
  cables: any;
  cable: any;
  projectName: any;
  cableArrayList: any;
  isChecked: Boolean = false;
  userEmail: string;
  project: any;
  teamWork = false;
  isAdmin: boolean;
  userGuid: string;
  isCanChange: boolean;
  isViewOnly: boolean;

  constructor(
    private cableService: CableService,
    private router: Router,
    private route: ActivatedRoute,
    private spinnerService: Ng4LoadingSpinnerService,
    private projectServise: ProjectService,
    private excelService: ExcelService,
  ) {
    this.isCanChange = false;
    this.isViewOnly = false;
    this.projectId = this.route.snapshot.params['id'];
    this.cableArrayList = [];
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
    this.cableService.getCables(this.projectId).subscribe(cableList => {
      this.cables = cableList;
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

  puchToCabelArray(element) {
    if (!element.isChecked) {
      this.cableArrayList.push(element._id);
    } else {
      this.cableArrayList.pop();
    }
  }

  changeFlag(isCheck) {
    if (isCheck) {
      this.isChecked = false;
      for (let i = 0; i < this.cables.cabels.length; ++i) {
        this.cables.cabels[i].isChecked = false;
        this.cableArrayList = [];
      }
    } else {
      this.isChecked = true;
      for (let i = 0; i < this.cables.cabels.length; ++i) {
        this.cables.cabels[i].isChecked = true;
        this.cableArrayList.push(this.cables.cabels[i]._id);
      }
    }
  }

  saveToExcell() {
    const wscols = [
      // tslint:disable-next-line:max-line-length
      // A      // B       // C       // D      // E       // F       // G         // H     // I       // J       // K       // L       // M      // N       // O      // P
      { wch: 5 }, { wch: 18 }, { wch: 12 }, { wch: 7 }, { wch: 10 }, { wch: 13 }, { wch: 18 }, { wch: 25 }, { wch: 29 }, { wch: 12 }, { wch: 15 }, { wch: 10 }, { wch: 7 }, { wch: 11 }, { wch: 7 }, { wch: 32 }
    ];
    /*
      var ws = XLSX.utils.table_to_book(document.getElementById('exportable')).Sheets.Sheet1;
      ws['!cols'] = wscols;
      let wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Cabels List");
      let wbout = XLSX.write(wb, {
        bookType:'xlsx',
        type:'binary',
        cellStyles:true
        //bookSST:true
      });
      console.log(wbout);
      function s2ab(s) {
        let buf = new ArrayBuffer(s.length);
        let view = new Uint8Array(buf);
        for (let i=0; i!=s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
        return buf;
      }
      importedSaveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), "Report from project cabels "+Date.now()+".xlsx");
      */
    const projectArray = [];
    for (let i = 0; i < this.cables.cabels.length; ++i) {
      projectArray.push(this.cables.cabels[i]._id);
    }
    const queryString = 'cable-item-list';
    const scheetName = 'Cabels List';
    const controllerName = 'Cabel';
    const fileName = 'CABLE INDEX';
    // tslint:disable-next-line:max-line-length
    this.excelService.exportToExcell(this.projectId, this.projectName.title, projectArray, queryString, scheetName, fileName, controllerName, wscols);
  }

  saveToExcellUIData() {
    const wscols = [
      // tslint:disable-next-line:max-line-length
      // A       // B       //C        //D       //E        //F        //G        //H        // I       // J       // K       // L       // M       // N       // O       // P      // Q
      { wch: 20 }, { wch: 15 }, { wch: 15 }, { wch: 7 }, { wch: 21 }, { wch: 17 }, { wch: 14 }, { wch: 17 }, { wch: 15 }, { wch: 20 }, { wch: 12 }, { wch: 25 }, { wch: 17 }, { wch: 10 }, { wch: 10 }, { wch: 7 }, { wch: 12 },
      // tslint:disable-next-line:max-line-length
      // R       // S       // T       // U       // V       // W     // X       // Y      // Z       // AA      // AB      // AC      // AD      // AE      // AF      // AG      // AH
      { wch: 12 }, { wch: 12 }, { wch: 10 }, { wch: 12 }, { wch: 10 }, { wch: 7 }, { wch: 7 }, { wch: 7 }, { wch: 7 }, { wch: 16 }, { wch: 10 }, { wch: 20 }, { wch: 18 }, { wch: 12 }, { wch: 22 }, { wch: 22 }, { wch: 17 },
      // AI      // AJ      // AK      // AL      // AM      // AN      // AO      // AP
      { wch: 15 }, { wch: 17 }, { wch: 15 }, { wch: 20 }, { wch: 15 }, { wch: 15 }, { wch: 15 }, { wch: 15 }
    ];
    const projectArray = [];
    for (let i = 0; i < this.cables.cabels.length; ++i) {
      projectArray.push(this.cables.cabels[i]._id);
    }
    const queryString = 'cable-item';
    const scheetName = 'Cabels UI List';
    const controllerName = 'Cabel';
    const fileName = 'CABLE REPORT';
    // tslint:disable-next-line:max-line-length
    this.excelService.exportToExcell(this.projectId, this.projectName.title, projectArray, queryString, scheetName, fileName, controllerName, wscols);
  }

  saveCable() {
    this.cable = {};
    this.cable.length = 0;
    this.spinnerService.show();
    this.cableService.createCable(this.projectId, this.cable).subscribe(
      (res: Array<string>) => {
        const id = res['_id'];
        const responseId = res[res.length - 1]['_id'];
        const routeToCableItem = '/project/' + this.route.snapshot.params['id'] + '/cables/' + responseId;
        this.router.navigate([routeToCableItem]);
      }, (err) => {
        console.log(err);
      }
    );
    this.spinnerService.hide();
  }
}
