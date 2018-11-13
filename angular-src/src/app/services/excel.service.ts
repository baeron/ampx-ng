import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/mergeMap';
import { InstrumentationService } from './instrumentation.service';
import { ControllerService } from './controller.service';
import { SldscheduleService } from './sldschedule.service';
import { CableService } from './cable.service';
import { ElectricalService } from './electrical.service';
import { saveAs as importedSaveAs } from 'file-saver';
import * as XLSX from 'xlsx';

@Injectable()
export class ExcelService {

  constructor(
    private http: Http,
    private instrumentationService: InstrumentationService,
    private controllerService: ControllerService,
    private sldsheduleService: SldscheduleService,
    private electricalService: ElectricalService,
    private cableService: CableService
  ) {
  }

  xlsxSaver(tmp, sheetName, fileName, projectName, wscols) {
    const ws = XLSX.utils.json_to_sheet(tmp, { cellDates: true });
    ws['!cols'] = wscols;
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary', cellStyles: true });
    function s2ab(s) {
      const buf = new ArrayBuffer(s.length);
      const view = new Uint8Array(buf);
      // tslint:disable-next-line:curly
      for (let i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
      return buf;
    }
    const options = { day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const dateNow = new Date();
    // tslint:disable-next-line:max-line-length
    importedSaveAs(new Blob([s2ab(wbout)], { type: 'application/octet-stream' }), fileName + " FROM PROJECT '" + projectName + "' - " + dateNow.toLocaleDateString('en-US', options) + '.xlsx');
  }

  exportToExcell(projectId, projectName, selectedArrayElements, queryString, sheetName, fileName, controllerName, wscols) {
    let arrayList = [];
    if (controllerName === 'Instrumentations') {
      // tslint:disable-next-line:max-line-length
      this.instrumentationService.getInstrumentationsCheckList2(projectId, selectedArrayElements, queryString).subscribe(instrupentations => {
        arrayList = instrupentations[0];
        const tmp = [];
        for (let index = 0; index < arrayList.length; ++index) {
          tmp.push(arrayList[index].instrumentationItem);
        }
        this.xlsxSaver(tmp, sheetName, fileName, projectName, wscols);
      });
    } else if (controllerName === 'Controllers') {
      this.controllerService.getControllersCheckList(projectId, selectedArrayElements, queryString).subscribe(controllersItem => {
        arrayList = controllersItem[0];
        const tmp = [];
        for (let index = 0; index < arrayList.length; ++index) {
          tmp.push(arrayList[index].controllerItem);
        }
        this.xlsxSaver(tmp, sheetName, fileName, projectName, wscols);
      });
    } else if (controllerName === 'Sldshadule') {
      this.sldsheduleService.getSldSheduleExcelList(projectId, selectedArrayElements, queryString).subscribe(sldsheduleItem => {
        arrayList = sldsheduleItem[0];
        const tmp = [];
        for (let index = 0; index < arrayList.length; ++index) {
          tmp.push(arrayList[index].sldsheduleItem);
        }
        this.xlsxSaver(tmp, sheetName, fileName, projectName, wscols);
      });
    } else if (controllerName === 'Cabel') {
      this.cableService.getCabelExcelList(projectId, selectedArrayElements, queryString).subscribe(cableItem => {
        arrayList = cableItem[0];
        const tmp = [];
        for (let index = 0; index < arrayList.length; ++index) {
          tmp.push(arrayList[index].cableItem);
        }
        this.xlsxSaver(tmp, sheetName, fileName, projectName, wscols);
      });
    } else if (controllerName === 'Electrical') {
      this.electricalService.getElectricalExcelList(projectId, selectedArrayElements, queryString).subscribe(electricalItem => {
        arrayList = electricalItem[0];
        const tmp = [];
        for (let index = 0; index < arrayList.length; ++index) {
          tmp.push(arrayList[index].electricalItem);
        }
        this.xlsxSaver(tmp, sheetName, fileName, projectName, wscols);
      });
    } else {
      console.log('Error');
      return;
    }
  }
}
