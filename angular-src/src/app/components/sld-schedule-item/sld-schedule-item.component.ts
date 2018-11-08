import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SldscheduleService } from '../../services/sldschedule.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
//
import { ProjectService } from '../../services/project.service';

import { environment } from '../../../environments/environment';
import { Availability } from '../../shared/Availability';

@Component({
  selector: 'app-sld-schedule-item',
  templateUrl: './sld-schedule-item.component.html',
  styleUrls: ['./sld-schedule-item.component.css']
})
export class SldScheduleItemComponent implements OnInit {
  sizeWindow: any;
  projectId: any;
  sldSheduleId: any;
  sldScheduleItem: any;
  value = false;
  electricalList: any;
  firstPanelElementDescription = 'First Panel Element Description';
  secondPanelElementDescription = 'Second Panel Element Description';
  thirdPanelElementDescription = 'Third Panel Element Description';
  dropElementFlag = true;
  //
  teamWork = true;
  project: any;
  userEmail: string;
  isCanChange: boolean;
  userGuid: string;
  isAdmin: boolean;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    // tslint:disable-next-line:no-unused-expression
    event.target.innerWidth;
    this.sizeWindow = event.target.innerWidth;
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sldscheduleService: SldscheduleService,
    private spinnerService: Ng4LoadingSpinnerService,
    private projectServise: ProjectService
  ) {
    this.projectId = this.route.snapshot.params['id'];
    this.sldSheduleId = this.route.snapshot.params['sldsheduleId'];
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
      const isItAdmin = (this.userEmail === adminEmail);
      const isItSuperadmin = (this.userEmail === superAdminEmail);
      this.isAdmin = isItAdmin || isItSuperadmin;
    }
    this.spinnerService.show();
    this.sldscheduleService.getSldScheduleItem(this.projectId, this.sldSheduleId).subscribe(sldShedules => {
      this.sldScheduleItem = sldShedules.sldschedule;
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
      //
      this.spinnerService.hide();
    },
      err => {
        console.log(err);
        return false;
      });
    this.sldscheduleService.getElectricalName(this.projectId).subscribe(electricals => {
      this.electricalList = electricals.electricals;
    });
  }

  changeBooleanFlag(boolValue) {
    return boolValue = boolValue ? false : true;
  }

  onChanged(selectedElement: any, title: string): void {
    const dropDownName: string = title;
    switch (dropDownName) {
      case 'PDP Panel First Value': {
        this.sldScheduleItem.selectedFirstPanelValue = selectedElement;
        break;
      }
      case 'PDP Panel Second Value': {
        this.sldScheduleItem.selectedSecondPanelValue = selectedElement;
        break;
      }
      case 'PDP Panel Third Value': {
        this.sldScheduleItem.selectedThirdPanelValue = selectedElement;
        break;
      }
      default: {
        console.log('Invalid choice');
        break;
      }
    }
  }

  newOnChanged(selectedElement: any, title: string): void {
    const dropDownName: string = title;
    switch (dropDownName) {
      case 'PDP Panel First Value': {
        this.sldScheduleItem.selectedFirstPanelValue = selectedElement;
        break;
      }
      case 'PDP Panel Second Value': {
        this.sldScheduleItem.selectedSecondPanelValue = selectedElement;
        break;
      }
      case 'PDP Panel Third Value': {
        this.sldScheduleItem.selectedThirdPanelValue = selectedElement;
        break;
      }
      default: {
        console.log('Invalid choice');
        break;
      }
    }
  }

  setSystemVoltage(elecList, selectedMajorEquipmentElement) {
    const electList = elecList;
    for (let i = 0; i < electList.length; ++i) {
      const element = electList[i];
      return element.selectedVoltage.name;
    }
  }


  setEquipmentDescription(elecList, selectedMajorEquipmentElement) {
    const selectMajorElement = selectedMajorEquipmentElement;
    const electList = elecList;
    for (let i = 0; i < electList.length; ++i) {
      const element = electList[i];
      if (element.equipmentTag === selectMajorElement) {
        return element.selectedEquipmentDescription;
      }
    }
  }

  saveSldShedule(idSldScheduleItem, data) {
    this.spinnerService.show();
    data.firstPanelValue = this.sldScheduleItem.firstPanelValue;
    data.selectedFirstPanelValue = this.sldScheduleItem.selectedFirstPanelValue;
    //
    data.secondPanelValue = this.sldScheduleItem.secondPanelValue;
    data.selectedSecondPanelValue = this.sldScheduleItem.selectedSecondPanelValue;
    data.thirdPanelValue = this.sldScheduleItem.thirdPanelValue;
    data.selectedThirdPanelValue = this.sldScheduleItem.selectedThirdPanelValue;
    this.sldscheduleService.updateSldScheduleItem(this.projectId, idSldScheduleItem, data).subscribe(res => {
      this.spinnerService.hide();
      this.router.navigate(['project', this.projectId, 'sldshedules']);
    }, (err) => {
      console.log(err);
    });
  }

  deleteSldSchedule(sldScheduleId) {
    this.spinnerService.show();
    this.sldscheduleService.deleteSldScheduleItem(this.projectId, sldScheduleId).subscribe(res => {
      this.spinnerService.hide();
      this.router.navigate(['project', this.projectId, 'sldshedules']);
    }, (err) => {
      console.log(err);
    });
  }
}
