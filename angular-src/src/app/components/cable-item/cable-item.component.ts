import { from } from 'rxjs/observable/from';
import { Component, OnInit, ViewChild, HostListener, DoCheck } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { NgModel } from '@angular/forms';
import { CableService } from '../../services/cable.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
//
import { ProjectService } from '../../services/project.service';
import { environment } from '../../../environments/environment';
import { Availability } from '../../shared/Availability';


@Component({
  selector: 'app-cable-item',
  templateUrl: './cable-item.component.html',
  styleUrls: ['./cable-item.component.css']
})
export class CableItemComponent implements OnInit {
  // Window size value for small devise
  userGuid: string;
  sizeWindow: any;
  isCanChange: boolean;
  projectId: any;
  cableId: any;
  cabelItem: any;
  cableLenth: Number;
  isAdmin: boolean;
  selectedItemVoltage: any;

  voltagePrefix: String;

  electricalList: any;
  electricalConectedFLA: Number;
  teamWork = true;
  project: any;
  userEmail: string;

  dropElementFlag: Boolean = true;
  voltage: String = 'Voltage';
  cableTypeModalName = 'Cable Type';
  cableDistanceModalHeader: String = 'Cable Distance';
  voltageAfterChangePowerSystem = [];
  conductorMaterialAfterChangePowerSystem = [];
  insTempRatingAfterChangeConductorMaterial = [];

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    // tslint:disable-next-line:no-unused-expression
    event.target.innerWidth;
    this.sizeWindow = event.target.innerWidth;
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cableService: CableService,
    private spinnerService: Ng4LoadingSpinnerService,
    private projectServise: ProjectService
  ) {
    this.projectId = this.route.snapshot.params['id'];
    this.cableId = this.route.snapshot.params['cableId'];
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
    this.spinnerService.show();
    this.cableService.getCableItem(this.projectId, this.cableId).subscribe(cables => {
      this.cabelItem = cables.cabel;
      //
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
      //
      this.voltageAfterChangePowerSystem = cables.cabel.voltage.filter(p => p.powerSystemType === cables.cabel.selectedPowerSystem);
      // tslint:disable-next-line:max-line-length
      this.conductorMaterialAfterChangePowerSystem = cables.cabel.conductorMaterial.filter(cm => cm.powerSystemType === cables.cabel.selectedPowerSystem);
      this.insTempRatingAfterChangeConductorMaterial = cables.cabel.insulationTemperatureRatingArray.filter(itr => itr.conductorMaterialType === cables.cabel.selectedConductorMaterial.name);
      this.spinnerService.hide();
    },
      err => {
        console.log(err);
        return false;
      });

    this.cableService.getElectricalName(this.projectId).subscribe(electricals => {
      this.electricalList = electricals.electricals;
    });
  }

  setCabelToConnectedFLA(elecList, selectedCableTo) {
    const electricalsList = elecList;
    for (const key in electricalsList) {
      if (electricalsList[key].equipmentTag === selectedCableTo) {
        this.cabelItem.connectedFLA = electricalsList[key].totalConectedFla;
      }
    }
  }

  getXYZValue(elList, from, to) {
    const listOfElecricals = elList;
    const cabelFrom = from;
    const cableTo = to;

    const cabelFromObject: any = {};
    const cabelToObject: any = {};

    if (!cabelFrom || !cableTo) {
      return;
    } else {
      for (const key in listOfElecricals) {
        if (listOfElecricals[key].equipmentTag === cabelFrom) {
          cabelFromObject.coordForX = listOfElecricals[key].coordForX;
          cabelFromObject.coordForY = listOfElecricals[key].coordForY;
          cabelFromObject.coordForZ = listOfElecricals[key].coordForZ;
        }
      }
      for (const key in listOfElecricals) {
        if (listOfElecricals[key].equipmentTag === cableTo) {
          cabelToObject.coordForX = listOfElecricals[key].coordForX;
          cabelToObject.coordForY = listOfElecricals[key].coordForY;
          cabelToObject.coordForZ = listOfElecricals[key].coordForZ;
        }
      }
      const sumCoordForX = cabelFromObject.coordForX - cabelToObject.coordForX;
      const absoluteCoordForX = Math.abs(sumCoordForX);
      const sumCoordForY = cabelFromObject.coordForY - cabelToObject.coordForY;
      const absoluteCoordForY = Math.abs(sumCoordForY);
      const sumCoordForZ = cabelFromObject.coordForZ - cabelToObject.coordForZ;
      const absoluteCoordForZ = Math.abs(sumCoordForZ);

      this.cabelItem.cableLenth = absoluteCoordForX + absoluteCoordForY + absoluteCoordForZ;
    }
  }

  getVoltagePrefix(voltageData) {
    this.voltagePrefix = voltageData;
    const index = this.voltagePrefix.lastIndexOf(' ');
    this.voltagePrefix = this.voltagePrefix.substring(index + 1);
  }

  typeChanged() {
    if (!this.cabelItem) {
      return;
    } else {
      this.voltageAfterChangePowerSystem = this.cabelItem.voltage.filter(p => p.powerSystemType === this.cabelItem.selectedPowerSystem);
      // tslint:disable-next-line:max-line-length
      this.conductorMaterialAfterChangePowerSystem = this.cabelItem.conductorMaterial.filter(cm => cm.powerSystemType === this.cabelItem.selectedPowerSystem);
      this.cabelItem.selectedConductorMaterial.name = '';
      this.cabelItem.selectedInsulationVoltage = '';
      this.cabelItem.selectedRaceway = '';
      this.conductorMaterialChanged();
    }
  }

  conductorMaterialChanged() {
    if (!this.cabelItem) {
      return;
    } else {
      // tslint:disable-next-line:max-line-length
      this.insTempRatingAfterChangeConductorMaterial = this.cabelItem.insulationTemperatureRatingArray.filter(itr => itr.conductorMaterialType === this.cabelItem.selectedConductorMaterial.name);
      this.cabelItem.selectedInsulationTemperatureRating.name = '';
    }
  }

  changeVoltageArrayObject(productsAfterChange, projectData) {
    const arayObjectsAfterFilter = projectData.filter(p => p.powerSystemType !== productsAfterChange[0].powerSystemType);
    for (let i = 0; i < productsAfterChange.length; ++i) {
      const itemElement = productsAfterChange[i];
      arayObjectsAfterFilter.push(itemElement);
    }
    return arayObjectsAfterFilter;
  }

  saveCable(idCable, data) {
    this.spinnerService.show();
    // Info part
    data.cableTagFirst = this.cabelItem.cableTagFirst;
    data.cableTagSecond = this.cabelItem.cableTagSecond;
    data.cableTagThird = this.cabelItem.cableTagThird;
    data.cableTagFourth = this.cabelItem.cableTagFourth;
    data.cableTagIndex = this.cabelItem.cableTagIndex;
    data.selectedCableTagIndex = this.cabelItem.selectedCableTagIndex;
    // START TODO chech how it save with electricalItem
    data.selectedCableFrom = this.cabelItem.selectedCableFrom;
    data.selectedCableTo = this.cabelItem.selectedCableTo;
    // END TODO
    this.selectedItemVoltage = data.selectedVoltage;
    data.selectedVoltage = {};
    data.selectedVoltage.name = this.selectedItemVoltage;
    data.voltage = this.changeVoltageArrayObject(this.voltageAfterChangePowerSystem, this.cabelItem.voltage);
    data.selectedVoltage.powerSystemType = data.selectedPowerSystem;
    data.selectedPowerSystem = this.cabelItem.selectedPowerSystem;
    data.selectedConductorMaterial = {};
    data.selectedConductorMaterial.name = this.cabelItem.selectedConductorMaterial.name;
    data.selectedConductorMaterial.powerSystemType = data.selectedPowerSystem;
    //
    data.selectedService = this.cabelItem.selectedService;
    data.selectedMaxAmbientTemp = this.cabelItem.selectedMaxAmbientTemp;
    // Physical part
    data.selectedCableType = this.cabelItem.selectedCableType;
    data.outJacket = this.cabelItem.outJacket;
    data.selectedInsulationVoltage = this.cabelItem.selectedInsulationVoltage;
    data.selectedJacketColor = this.cabelItem.selectedJacketColor;
    data.selectedInsulationRating = this.cabelItem.selectedInsulationRating;
    data.selectedRaceway = this.cabelItem.selectedRaceway;
    data.selectedConductorInsulationType = this.cabelItem.selectedConductorInsulationType;
    data.selectedFtRating = this.cabelItem.selectedFtRating;
    // TODO finish Ins Temp Rating
    data.selectedInsulationTemperatureRating = {};
    data.selectedInsulationTemperatureRating.name = this.cabelItem.selectedInsulationTemperatureRating.name;
    data.selectedInsulationTemperatureRating.conductorMaterialType = this.cabelItem.selectedConductorMaterial.name;
    //
    data.selectedWireColor = this.cabelItem.selectedWireColor;
    data.selectedShield = this.cabelItem.selectedShield;
    data.selectedApproval = this.cabelItem.selectedApproval;
    data.selectedArmour = this.cabelItem.selectedArmour;
    data.od = this.cabelItem.od;
    data.kgPerMetr = this.cabelItem.kgPerMetr;
    data.itemNum = this.cabelItem.itemNum;
    data.selectedItemType = this.cabelItem.selectedItemType;
    data.selectedCableSize = this.cabelItem.selectedCableSize;
    // Configuration part
    data.selectedInstallMethod = this.cabelItem.selectedInstallMethod;
    data.selectedSpacing = this.cabelItem.selectedSpacing;
    data.selectedSpacingCorrection = this.cabelItem.selectedSpacingCorrection;
    data.tempCorrection = this.cabelItem.tempCorrection;
    data.selectedCec = this.cabelItem.selectedCec;
    data.correctedCondAmp = this.cabelItem.correctedCondAmp;
    data.numberOfRunsPerPhase = this.cabelItem.numberOfRunsPerPhase;
    data.feederAmpacity = this.cabelItem.feederAmpacity;
    // Voltage Drop part
    data.cableLenth = this.cabelItem.cableLenth || 0;
    data.voltageDropPercent = this.cabelItem.voltageDropPercent || 0;
    // Load part
    data.connectedFLA = this.cabelItem.connectedFLA;
    data.selectedAmpacityMultiplier = this.cabelItem.selectedAmpacityMultiplier;
    data.minCondAmp = this.cabelItem.minCondAmp;
    data.condAmpacity = this.cabelItem.condAmpacity;
    data.ocAmpRating = this.cabelItem.ocAmpRating;
    data.internalNotes = this.cabelItem.internalNotes;
    this.cableService.updateCabelItem(this.projectId, idCable, data).subscribe(res => {
      this.spinnerService.hide();
      this.router.navigate(['project', this.projectId, 'cables']);
    }, (err) => {
      console.log(err);
    });
  }

  deleteCable(cableItemId) {
    this.spinnerService.show();
    this.cableService.deleteCableItem(this.projectId, cableItemId).subscribe(res => {
      this.spinnerService.hide();
      this.router.navigate(['project', this.projectId, 'cables']);
    }, (err) => {
      console.log(err);
    });
  }
}
