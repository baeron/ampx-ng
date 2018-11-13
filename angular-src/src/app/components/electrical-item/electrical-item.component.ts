import { Availability } from './../../shared/Availability';
// core modules
import { Component, OnInit, ViewChild, HostListener, DoCheck } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgModel } from '@angular/forms';
// helper classes and functions
// import { Availability } from '../../shared/Availability';
// models
import { IProject } from '../../models/IProject';
// servises
import { ProjectService } from '../../services/project.service';
import { ElectricalService } from '../../services/electrical.service';
// external packages
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-electrical-item',
  templateUrl: './electrical-item.component.html',
  styleUrls: ['./electrical-item.component.css']
})
export class ElectricalItemComponent implements OnInit, DoCheck {
  // users access part
  isAdmin: boolean;
  isCreator: boolean;
  isCanChange: boolean;
  userEmail: string;
  userGuid: string;
  projectId: string;
  project: IProject;
  // electrical item part
  electricalId: string;
  electricalItem: any;
  //
  sizeWindow: number;
  productsAfterChangeEvent = [];
  //
  selectedItemVoltage: any;
  //
  parentList: any;
  presetParentTag: any;
  //
  date: string;
  //
  @ViewChild('selectedHazlocZone') private selectedHazlocZone: NgModel;
  @ViewChild('selectedHazlocTemperature') private selectedHazlocTemperature: NgModel;
  @ViewChild('selectedHazlocGroup') private selectedHazlocGroup: NgModel;
  //

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.sizeWindow = event.target.innerWidth;
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private electricalService: ElectricalService,
    private projectServise: ProjectService,
    private spinnerService: Ng4LoadingSpinnerService
  ) {
    this.projectId = this.route.snapshot.params['id'];
    this.electricalId = this.route.snapshot.params['electricalid'];
    this.sizeWindow = window.innerWidth;
  }

  ngOnInit() {
    this.spinnerService.show();
    if (window.localStorage) {
      this.isAdmin = Availability.CheckIsAdmin(localStorage);
      this.userGuid = Availability.GetUserGuid(localStorage);
      // this.isCreator = Availability.CheckIsCreator(localStorage, this.userGuid);
    }
    // get user list who can change or view elements
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
    // get itemElectricalElement
    this.electricalService.getElectricalItem(this.projectId, this.electricalId).subscribe(electricals => {
      this.electricalItem = electricals.electrical;
      this.date = (new Date(this.electricalItem.dateCreate)).toLocaleDateString();
      if (this.electricalItem.selectedPowerSystem) {
        this.productsAfterChangeEvent = electricals.electrical.voltage.
          filter(p => p.powerSystemType === electricals.electrical.selectedPowerSystem);
      } else {
        return;
      }
      this.spinnerService.hide();
    }, err => {
        console.log(err);
        this.spinnerService.hide();
        return;
    });
    //
    this.electricalService.getElectricals(this.projectId).subscribe(electricalList => {
      this.project = electricalList;
      // console.log(this.project);
      this.parentList = [];
      for (const key in this.project.electricals) {
        if (this.project.electricals[key]._id === this.electricalId) {
        } else {
          this.parentList.push(this.project.electricals[key].equipmentTag);
        }
      }
    }, err => {
        console.log(err);
        this.spinnerService.hide();
        return;
    });
    this.spinnerService.hide();
  }

  onChanged(selectedElement: any, title: string): void {
    const dropDownName = title;
    switch (dropDownName) {
      case 'Equipment Type': {
        this.electricalItem.selectedEquipmentType = selectedElement;
        break;
      }
      case 'Pid Drawing': {
        this.electricalItem.selectedPidDrawing = selectedElement;
        break;
      }
      case 'Layout Drawing': {
        this.electricalItem.selectedLayoutDrawing = selectedElement;
        break;
      }
      case 'SLD Drawing': {
        this.electricalItem.selectedSldDraving = selectedElement;
        break;
      }
      case 'Location/Area': {
        this.electricalItem.selectedLocationArea = selectedElement;
        break;
      }
      case 'Location/Area': {
        this.electricalItem.selectedLocationArea = selectedElement;
        break;
      }
      case 'Equipment Description': {
        this.electricalItem.selectedEquipmentDescription = selectedElement;
        break;
      }
      default: {
        console.log('Invalid choice');
        break;
      }
    }
  }

  /**
   *
   * @param selectedElement
   * @param title
   */
  newOnChanged(selectedElement: any, title: string): void {
    const dropDownName = title;
    switch (dropDownName) {
      case 'Equipment Type': {
        this.electricalItem.selectedEquipmentType = selectedElement;
        break;
      }
      case 'Pid Drawing': {
        this.electricalItem.selectedPidDrawing = selectedElement;
        break;
      }
      case 'Layout Drawing': {
        this.electricalItem.selectedLayoutDrawing = selectedElement;
        break;
      }
      case 'SLD Drawing': {
        this.electricalItem.selectedSldDraving = selectedElement;
        break;
      }
      case 'Location/Area': {
        this.electricalItem.selectedLocationArea = selectedElement;
        break;
      }
      case 'Equipment Description': {
        this.electricalItem.selectedEquipmentDescription = selectedElement;
        break;
      }
      default: {
        console.log('Invalid choice');
        break;
      }
    }
  }

  onModelChange(event) {
    if (this.electricalItem.selectedEquipmentType !== event) {
    }
    this.electricalItem.selectedEquipmentType = event;
  }

  ngDoCheck() {
    if (!this.electricalItem) {
      return;
    } else {
      this.recalculationDependentValues();
    }
  }

  electricalChildList() {
    if (this.electricalItem.selectedParentTag) {
      if (this.presetParentTag === this.electricalItem.selectedParentTag) {
        return;
      } else {
        for (let i = 0; i < this.project.electricals.length; ++i) {
          const tempElectricalItem = this.project.electricals[i];
          for (let j = 0; j < tempElectricalItem.chiildList.length; ++j) {
            const childElement = tempElectricalItem.chiildList[j];
            if (childElement._id === this.electricalItem._id) {
              tempElectricalItem.chiildList.splice(j, 1);
              this.electricalService
                .updateElectricalItem(this.projectId, tempElectricalItem._id, tempElectricalItem, this.userGuid)
                .subscribe(res => {
              }, (err) => {
                console.log(err);
              });
            }
          }
          if (tempElectricalItem.equipmentTag === this.electricalItem.selectedParentTag) {
            this.project.electricals[i].chiildList.push(this.electricalItem);
            const temp = this.project.electricals[i];
            this.electricalService
              .updateElectricalItem(this.projectId, tempElectricalItem._id, temp, this.userGuid)
              .subscribe(err => {
                  console.log(err);
              });
            return;
          }
        }
      }
    } else {
      return;
    }
  }

  optionChanged($event) {
    this.selectedHazlocZone.reset(null);
    this.selectedHazlocTemperature.reset(null);
    this.selectedHazlocGroup.reset(null);
  }

  typeChanged() {
    if (!this.electricalItem) {
      return;
    } else {
      this.productsAfterChangeEvent = this.electricalItem.voltage
        .filter(p => p.powerSystemType === this.electricalItem.selectedPowerSystem);
    }
  }

  saveElectrical(idElectrical, data) {
    this.spinnerService.show();
    this.selectedItemVoltage = data.selectedVoltage;
    data.selectedVoltage = {};
    // ata.selectedVoltage.name = this.selectedItemVoltage;
    /*
    if (this.productsAfterChangeEvent.length === 0) {
      console.log('call this');
      data.voltage = this.electricalItem.voltage;
    } else {
      data.voltage = this.changeVoltageArrayObject(this.productsAfterChangeEvent, this.electricalItem.voltage);
    }
*/
    data.selectedVoltage.powerSystemType = data.selectedPowerSystem;
    data.dateCreate = this.date;
    // console.log(data.dateCreate);
    data.equipmentType = this.electricalItem.equipmentType;
    data.selectedEquipmentType = this.electricalItem.selectedEquipmentType;
    data.pidDrawing = this.electricalItem.pidDrawing;
    data.selectedPidDrawing = this.electricalItem.selectedPidDrawing;
    data.layoutDrawing = this.electricalItem.layoutDrawing;
    data.selectedLayoutDrawing = this.electricalItem.selectedLayoutDrawing;
    data.sldDraving = this.electricalItem.sldDraving;
    data.selectedSldDraving = this.electricalItem.selectedSldDraving;
    data.locationArea = this.electricalItem.locationArea;
    data.selectedLocationArea = this.electricalItem.selectedLocationArea;
    data.equipmentDescription = this.electricalItem.equipmentDescription;
    data.selectedEquipmentDescription = this.electricalItem.selectedEquipmentDescription;
    data.hazlocZone = this.electricalItem.hazlocZone;
    data.hazlocTemperature = this.electricalItem.hazlocTemperature;
    //
    data.totalConectedFla = this.electricalItem.totalConectedFla || 0;
    data.totalConectedKW = this.electricalItem.totalConectedKW || 0;
    data.totalConnectedKVAR = this.electricalItem.totalConnectedKVAR || 0;
    data.totalConnectedKVA = this.electricalItem.totalConnectedKVA || 0;
    data.totalDemandFLA = this.electricalItem.totalDemandFLA || 0;
    data.totalDemandKW = this.electricalItem.totalDemandKW || 0;
    data.totalDemandKVAR = this.electricalItem.totalDemandKVAR || 0;
    data.totalDemandKVA = this.electricalItem.totalDemandKVA || 0;
    data.scenarioFirstFLA = this.electricalItem.scenarioFirstFLA || 0;
    data.scenarioFirstKW = this.electricalItem.scenarioFirstKW || 0;
    data.scenarioFirstKVAR = this.electricalItem.scenarioFirstKVAR || 0;
    data.scenarioFirstKVA = this.electricalItem.scenarioFirstKVA || 0;
    //
    this.electricalService.updateElectricalItem(this.projectId, idElectrical, data, this.project.creator).subscribe(res => {
      this.spinnerService.hide();
      this.router.navigate(['project', this.projectId, 'electricals']);
    }, (err) => {
      console.log(err);
      this.spinnerService.hide();
    });
    this.electricalChildList();
  }

  deleteElectrical(electricalItemId) {
    this.spinnerService.show();
    if (this.electricalItem.chiildList.length >= 1) {
      for (let i = 0; i < this.project.electricals.length; ++i) {
        const temporaryElectricalItem = this.project.electricals[i];
        if (temporaryElectricalItem.selectedParentTag === this.electricalItem.equipmentTag) {
          temporaryElectricalItem.selectedParentTag = '';
          this.electricalService
            .updateElectricalItem(this.projectId, temporaryElectricalItem._id, temporaryElectricalItem, this.userGuid)
            .subscribe( err => {
              console.log(err);
          });
        }
      }
    }
    for (let j = 0; j < this.project.electricals.length; ++j) {
      const electricalItemElment = this.project.electricals[j];
      for (let k = 0; k < electricalItemElment.chiildList.length; ++k) {
        const temporalChildElement = electricalItemElment.chiildList[k];
        if (temporalChildElement._id === this.electricalItem._id) {
          electricalItemElment.chiildList.splice(j, 1);
          this.electricalService
            .updateElectricalItem(this.projectId, electricalItemElment._id, electricalItemElment, this.userGuid)
            .subscribe( err => {
              this.spinnerService.hide();
              console.log(err);
            });
        }
      }
    }
    this.electricalService.deleteElectricalItem(this.projectId, electricalItemId).subscribe(res => {
      // this.spinnerService.hide();
      this.router.navigate(['project', this.projectId, 'electricals']);
    }, (err) => {
      console.log(err);
      this.spinnerService.hide();
    });
    this.spinnerService.hide();
  }

  changeVoltageArrayObject(productsAfterChange, projectData) {
    const arayObjectsAfterFilter = projectData.filter(p => p.powerSystemType !== productsAfterChange[0].powerSystemType);
    for (let i = 0; i < productsAfterChange.length; ++i) {
      const itemElement = productsAfterChange[i];
      arayObjectsAfterFilter.push(itemElement);
    }
    return arayObjectsAfterFilter;
  }

  // method for calculate dependencies
  recalculationDependentValues() {
    this.electricalItem.totalConectedFla = 0;
    this.electricalItem.totalConectedKW = 0;
    this.electricalItem.totalConnectedKVA = 0;
    this.electricalItem.totalConnectedKVAR = 0;

    this.electricalItem.totalDemandFLA = 0;
    this.electricalItem.totalDemandKW = 0;
    this.electricalItem.totalDemandKVAR = 0;
    this.electricalItem.totalDemandKVA = 0;

    this.electricalItem.scenarioFirstFLA = 0;
    this.electricalItem.scenarioFirstKW = 0;
    this.electricalItem.scenarioFirstKVAR = 0;
    this.electricalItem.scenarioFirstKVA = 0;
    //
    const voltageValue = this.electricalItem.selectedVoltage.name;
    const toSimbol = voltageValue.search(' ');
    const voltageCalcValue = voltageValue.substring(0, toSimbol);
    // tslint:disable-next-line:radix
    const parsingValue = parseInt(voltageCalcValue);
    //
    if (this.electricalItem.selectedPowerSystem === this.electricalItem.powerSystem[0]) {                // AC-3P ALL CHECKED+2
      if (!this.electricalItem.totalPF) {
        this.electricalItem.totalPF = 0;
      }
      if (!this.electricalItem.totalEFF) {
        this.electricalItem.totalEFF = 0;
      }
      switch (this.electricalItem.selectedUnits) {
        case this.electricalItem.units[0]:                                                              // A check+2
          this.electricalItem.totalConectedFla = parseFloat(this.electricalItem.nameplateRating);
          break;
        case this.electricalItem.units[1]:                                                              // HP check+2
          if (this.electricalItem.selectedVoltage.name && this.electricalItem.totalPF !== 0 && this.electricalItem.totalEFF !== 0) {
            // tslint:disable-next-line:max-line-length
            const temporalTotalConectedFla = (parseFloat(this.electricalItem.nameplateRating) * 746) / (parsingValue * 1.73 * this.electricalItem.totalPF * this.electricalItem.totalEFF) * 10000;
            this.electricalItem.totalConectedFla = Math.ceil(temporalTotalConectedFla * 100) / 100;
          } else {
            this.electricalItem.totalConectedFla = 0;
          }
          break;
        case this.electricalItem.units[2]:                                                              // KW check+2
          if (this.electricalItem.selectedVoltage.name && this.electricalItem.totalPF !== 0) {
            // tslint:disable-next-line:max-line-length
            const temporalTotalConectedFla = (parseFloat(this.electricalItem.nameplateRating) * 1000) / (parsingValue * 1.73 * this.electricalItem.totalPF / 100);
            this.electricalItem.totalConectedFla = Math.ceil(temporalTotalConectedFla * 100) / 100;
          } else {
            this.electricalItem.totalConectedFla = 0;
          }
          break;
        case this.electricalItem.units[3]:                                                              // KVA check+2
          if (this.electricalItem.selectedVoltage.name) {
            const temporalTotalConectedFla = (parseFloat(this.electricalItem.nameplateRating) * 1000) / (parsingValue * 1.73);
            this.electricalItem.totalConectedFla = Math.ceil(temporalTotalConectedFla * 100) / 100;
          }
          break;
        default:
          break;
      }
      const tempTotalConnectedKVA = this.electricalItem.totalConectedFla * parsingValue * 1.73 / 1000;
      this.electricalItem.totalConnectedKVA = Math.ceil(tempTotalConnectedKVA * 100) / 100;
      const tempTotalConectedKW = this.electricalItem.totalConnectedKVA * this.electricalItem.totalPF / 100;
      this.electricalItem.totalConectedKW = Math.ceil(tempTotalConectedKW * 100) / 100;
      if (this.electricalItem.totalConectedKW === 0) {
        this.electricalItem.totalConnectedKVAR = 0;
      } else {
        // tslint:disable-next-line:max-line-length
        const tempTotalConnectedKVAR = Math.sqrt(Math.pow(this.electricalItem.totalConnectedKVA, 2) - Math.pow(this.electricalItem.totalConectedKW, 2));
        this.electricalItem.totalConnectedKVAR = Math.ceil(tempTotalConnectedKVAR * 100) / 100;
      }
    } else if (this.electricalItem.selectedPowerSystem === this.electricalItem.powerSystem[1]) {     // AC-1P ALL CHECKED+2
      if (!this.electricalItem.totalPF) {
        this.electricalItem.totalPF = 0;
      }
      if (!this.electricalItem.totalEFF) {
        this.electricalItem.totalEFF = 0;
      }
      switch (this.electricalItem.selectedUnits) {
        case this.electricalItem.units[0]:                                                          // A check+2
          this.electricalItem.totalConectedFla = parseFloat(this.electricalItem.nameplateRating);
          break;
        case this.electricalItem.units[1]:                                                          // HP check+2
          if (this.electricalItem.selectedVoltage.name && this.electricalItem.totalPF !== 0 && this.electricalItem.totalEFF !== 0) {
            // tslint:disable-next-line:max-line-length
            const temporalTotalConectedFla = (parseFloat(this.electricalItem.nameplateRating) * 746) / (parsingValue * this.electricalItem.totalPF * this.electricalItem.totalEFF) * 10000;
            this.electricalItem.totalConectedFla = Math.ceil(temporalTotalConectedFla * 100) / 100;
          } else {
            this.electricalItem.totalConectedFla = 0;
          }
          break;
        case this.electricalItem.units[2]:                                                          // KW check+2
          if (this.electricalItem.selectedVoltage.name && this.electricalItem.totalPF !== 0) {
            // tslint:disable-next-line:max-line-length
            const temporalTotalConectedFla = (parseFloat(this.electricalItem.nameplateRating) * 1000) / (parsingValue * this.electricalItem.totalPF / 100);
            this.electricalItem.totalConectedFla = Math.ceil(temporalTotalConectedFla * 100) / 100;
          } else {
            this.electricalItem.totalConectedFla = 0;
          }
          break;
        case this.electricalItem.units[3]:                                                          // KVA check+2
          if (this.electricalItem.selectedVoltage.name) {
            const temporalTotalConectedFla = (parseFloat(this.electricalItem.nameplateRating) * 1000) / (parsingValue);
            this.electricalItem.totalConectedFla = Math.ceil(temporalTotalConectedFla * 100) / 100;
          }
          break;
        default:
          break;
      }
      const tempTotalConnectedKVA = this.electricalItem.totalConectedFla * parsingValue / 1000;
      this.electricalItem.totalConnectedKVA = Math.ceil(tempTotalConnectedKVA * 100) / 100;
      const tempTotalConectedKW = this.electricalItem.totalConnectedKVA * this.electricalItem.totalPF / 100;
      this.electricalItem.totalConectedKW = Math.ceil(tempTotalConectedKW * 100) / 100;
      // tslint:disable-next-line:max-line-length
      const tempTotalConnectedKVAR = Math.sqrt(Math.pow(this.electricalItem.totalConnectedKVA, 2) - Math.pow(this.electricalItem.totalConectedKW, 2));
      this.electricalItem.totalConnectedKVAR = Math.ceil(tempTotalConnectedKVAR * 100) / 100;

    } else if (this.electricalItem.selectedPowerSystem === this.electricalItem.powerSystem[2]) {       // DC ALL CHECKED+2
      if (!this.electricalItem.totalEFF) {
        this.electricalItem.totalEFF = 0;
      }
      switch (this.electricalItem.selectedUnits) {
        case this.electricalItem.units[0]:                                                          // A check+2
          this.electricalItem.totalConectedFla = parseFloat(this.electricalItem.nameplateRating);
          this.electricalItem.totalConnectedKVA = 0;
          this.electricalItem.totalConnectedKVAR = 0;
          break;
        case this.electricalItem.units[1]:                                                          // HP check+2
          if (this.electricalItem.selectedVoltage.name && this.electricalItem.totalEFF !== 0) {
            // tslint:disable-next-line:max-line-length
            const temporalTotalConectedFla = (parseFloat(this.electricalItem.nameplateRating) * 746) / (parsingValue * this.electricalItem.totalEFF) * 100;
            this.electricalItem.totalConectedFla = Math.ceil(temporalTotalConectedFla * 100) / 100;
          } else {
            this.electricalItem.totalConectedFla = 0;
          }
          this.electricalItem.totalConnectedKVA = 0;
          this.electricalItem.totalConnectedKVAR = 0;
          break;
        case this.electricalItem.units[2]:                                                          // KW check+2
          if (this.electricalItem.selectedVoltage.name) {
            const temporalTotalConectedFla = (parseFloat(this.electricalItem.nameplateRating) * 1000) / parsingValue;
            this.electricalItem.totalConectedFla = Math.ceil(temporalTotalConectedFla * 100) / 100;
          } else {
            this.electricalItem.totalConectedFla = 0;
          }
          this.electricalItem.totalConnectedKVA = 0;
          this.electricalItem.totalConnectedKVAR = 0;
          break;
        default:
          this.electricalItem.totalConectedFla = 0;
          this.electricalItem.totalConectedKW = 0;
          this.electricalItem.totalConnectedKVA = 0;
          this.electricalItem.totalConnectedKVAR = 0;
          break;
      }
      const tempTotalConectedKW = this.electricalItem.totalConectedFla * parsingValue / 1000;
      this.electricalItem.totalConectedKW = Math.ceil(tempTotalConectedKW * 100) / 100;
    }
    const temporalTotalDemandFLA = (this.electricalItem.totalConectedFla * this.electricalItem.loadFactor) / 100;
    this.electricalItem.totalDemandFLA = Math.ceil(temporalTotalDemandFLA * 100) / 100;
    const temporalTotalDemandKW = (this.electricalItem.totalConectedKW * this.electricalItem.loadFactor) / 100;
    this.electricalItem.totalDemandKW = Math.ceil(temporalTotalDemandKW * 100) / 100;
    const temporalTotalDemandKVAR = (this.electricalItem.totalConnectedKVAR * this.electricalItem.loadFactor) / 100;
    this.electricalItem.totalDemandKVAR = Math.ceil(temporalTotalDemandKVAR * 100) / 100;
    const temporalTotalDemandKVA = (this.electricalItem.totalConnectedKVA * this.electricalItem.loadFactor) / 100;
    this.electricalItem.totalDemandKVA = Math.ceil(temporalTotalDemandKVA * 100) / 100;

    const scenarioFirstLoadFactor = parseFloat(this.electricalItem.scenarioFirstLoadFactor);
    const temporalScenarioFirstFLA = (this.electricalItem.totalConectedFla * scenarioFirstLoadFactor) / 100;
    this.electricalItem.scenarioFirstFLA = Math.ceil(temporalScenarioFirstFLA * 100) / 100;
    const temporalScenarioFirstKW = (this.electricalItem.totalConectedKW * scenarioFirstLoadFactor) / 100;
    this.electricalItem.scenarioFirstKW = Math.ceil(temporalScenarioFirstKW * 100) / 100;
    const temporalScenarioFirstKVAR = (this.electricalItem.totalConnectedKVAR * scenarioFirstLoadFactor) / 100;
    this.electricalItem.scenarioFirstKVAR = Math.ceil(temporalScenarioFirstKVAR * 100) / 100;
    const temporalScenarioFirstKVA = (this.electricalItem.totalConnectedKVA * scenarioFirstLoadFactor) / 100;
    this.electricalItem.scenarioFirstKVA = Math.ceil(temporalScenarioFirstKVA * 100) / 100;
  }
}
