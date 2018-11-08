import { Component, OnInit, ViewChild, HostListener, DoCheck, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgModel } from '@angular/forms';

import { InstrumentationService } from '../../services/instrumentation.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
// import {IMyDpOptions} from 'mydatepicker';
import { ProjectService } from '../../services/project.service';
import { Availability } from '../../shared/Availability';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-instrumentation-item',
  templateUrl: './instrumentation-item.component.html',
  styleUrls: ['./instrumentation-item.component.css']
})
export class InstrumentationItemComponent implements OnInit {
  sizeWindow: any;
    //
    projectId: any;
    instrumentationId: any;
    instrumentationItem: any;
    instrumentationLenth: Number;
    //
    dropElementFlag = true;
    //
    hazlocZoneTitle = 'Hazloc Zone';
    hazlocTemperatureTitle = 'Hazloc Temperature';
    pidNumberTitle = 'Pid Number';
    serviceDescriptionTitle = 'Service Description';
    lineEquipmentNumberTitle = 'Line Equipment Number';
    firstInstrumentTypeTitle = 'Instrument Type 1';
    manufacturerTitle = 'Manufacturer';
    modelNumberTitle = 'Model Number';
    dataSheetNumberTitle = 'Data Sheet Number';
    mrPoNumberTitle = 'MR/PO Number';
    installationDetailTitle = 'Installation Detail';
    wiringDrawingTitle = 'Wiring Drawing';
    locationTitle = 'Location';
    systemTitle = 'System';
    secondInstrumentTypeTitle = 'Instrument Type 2';
    statusTitle = 'Status';
    vendorTitle = 'Vendor';
    suppliedByTitle = 'Supplied By';
    installedByTitle = 'Installed By';
    signalLevelTitle = 'Signal Level';
    ioTypeTitle = 'I/O Type';
    powerSupplyTitle = 'Power Supply';
    instrumentFunctionTitle = 'Instrument Function';
    instrumentDescriptionTitle = 'Instrument Description';
    //
    dateInstrumentAdded: any;
    isAdmin: boolean;
    userGuid: string;
    userEmail: string;
    project: any;
    isCanChange: boolean;

    @ViewChild('selectedHazlocZone') private selectedHazlocZone: NgModel;
    @ViewChild('selectedHazlocTemperature') private selectedHazlocTemperature: NgModel;
    @ViewChild('selectedHazlocGroup') private selectedHazlocGroup: NgModel;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    // tslint:disable-next-line:no-unused-expression
    event.target.innerWidth;
    this.sizeWindow = event.target.innerWidth;
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private instrumentationService: InstrumentationService,
    private spinnerService: Ng4LoadingSpinnerService,
    private projectServise: ProjectService
  ) {
    this.projectId = this.route.snapshot.params['id'];
    this.instrumentationId = this.route.snapshot.params['instrumentationId'];
    this.sizeWindow = window.innerWidth;
   }

  ngOnInit() {
    this.isAdmin = false;
    const superAdminEmail = environment.sadmin;
    const adminEmail = environment.admin;
    if (window.localStorage) {
      const user = localStorage.getItem('user');
      const u = JSON.parse(user);
      this.userGuid = u.guid;
      this.userEmail = u.email;
      //
      const isItAdmin = (this.userEmail === adminEmail);
      const isItSuperadmin = (this.userEmail === superAdminEmail);
      this.isAdmin = isItAdmin || isItSuperadmin;
    }
    //
    this.spinnerService.show();
    this.instrumentationService.getInstrumentationItem(this.projectId, this.instrumentationId).subscribe(instrupentations => {
      this.instrumentationItem = instrupentations.instrumentation;
      this.projectServise.getProjectById(this.projectId).subscribe(itemProject => {
        this.project = itemProject;
        if (itemProject.creator === this.userGuid) {
          this.isCanChange = true;
          console.log(this.isCanChange);
          debugger;
        } else {
          const canChange = Availability.CanUserChange(this.project.team_project, this.userGuid);
          const canView = Availability.CanUserView(this.project.brows_team_project, this.userGuid);
          this.isCanChange = canChange || canView || this.isAdmin;
          console.log(this.isCanChange);
          debugger;
        }
      });
      //
      this.dateInstrumentAdded = (new Date(this.instrumentationItem.dateInstrumentAdded)).toLocaleDateString();
      this.spinnerService.hide();
    },
    err => {
      console.log(err);
      return false;
    });
    this.spinnerService.hide();
  }

  optionChanged($event) {
    this.selectedHazlocZone.reset(null);
    this.selectedHazlocTemperature.reset(null);
    this.selectedHazlocGroup.reset(null);
  }

  saveInstrumentation(idInstrumentationItem, data) {
    this.spinnerService.show();
    data.hazlocZone = this.instrumentationItem.hazlocZone;
    data.hazlocTemperature = this.instrumentationItem.hazlocTemperature;
    data.pidNumber = this.instrumentationItem.pidNumber;
    data.serviceDescription = this.instrumentationItem.serviceDescription;
    data.lineEquipmentNumber = this.instrumentationItem.lineEquipmentNumber;
    data.firstInstrumentType = this.instrumentationItem.firstInstrumentType;
    data.manufacturer = this.instrumentationItem.manufacturer;
    data.modelNumber = this.instrumentationItem.modelNumber;
    data.dataSheetNumber = this.instrumentationItem.dataSheetNumber;
    data.mrPoNumber = this.instrumentationItem.mrPoNumber;
    data.installationDetail = this.instrumentationItem.installationDetail;
    data.wiringDrawing = this.instrumentationItem.wiringDrawing;
    data.location = this.instrumentationItem.location;
    data.system = this.instrumentationItem.system;
    data.secondInstrumentType = this.instrumentationItem.secondInstrumentType;
    data.status = this.instrumentationItem.status;
    data.vendor = this.instrumentationItem.vendor;
    data.suppliedBy = this.instrumentationItem.suppliedBy;
    data.installedBy = this.instrumentationItem.installedBy;
    data.signalLevel = this.instrumentationItem.signalLevel;
    data.ioType = this.instrumentationItem.ioType;
    data.powerSupply = this.instrumentationItem.powerSupply;
    data.instrumentFunction = this.instrumentationItem.instrumentFunction;
    data.instrumentDescription = this.instrumentationItem.instrumentDescription;
    this.instrumentationService.updateInstrumentationItem(this.projectId, idInstrumentationItem, data).subscribe(res => {
      this.spinnerService.hide();
      this.router.navigate(['project', this.projectId, 'instrumentations']);
    }, (err) => {
      console.log(err);
      // this.spinnerService.hide();
    });
  }

  deleteInstrumentation(instrumentationId) {
    this.spinnerService.show();
    this.instrumentationService.deleteInstrumentationItem(this.projectId, instrumentationId).subscribe(res => {
      this.spinnerService.hide();
      this.router.navigate(['project', this.projectId, 'instrumentations']);
    }, (err) => {
      console.log(err);
    });
  }
}
