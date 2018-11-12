import { Component, OnInit, ViewChild, HostListener, DoCheck } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgModel } from '@angular/forms';

import { ControllerService } from '../../services/controller.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
//
import { ProjectService } from '../../services/project.service';
import { environment } from '../../../environments/environment';
import { Availability } from '../../shared/Availability';

@Component({
  selector: 'app-controller-item',
  templateUrl: './controller-item.component.html',
  styleUrls: ['./controller-item.component.css']
})
export class ControllerItemComponent implements OnInit {
  controllerItem: any;
  date: any;
  sizeWindow: any;
  //
  projectId: any;
  controllerId: any;
  //
  isAdmin: boolean;
  isCanChange: boolean;
  userGuid: string;
  userEmail: string;
  controller: any;
  project: any;
  //
  dropElementFlag = true;
  controlsEquipmentParentTag = 'Controls Equipment Parent Tag';
  location = 'Location';
  dataSheetNumberTitle = 'Data Sheet Number';
  layoutDrawing = 'Layout Drawing';
  schematicDrawing = 'Schematic Drawing';
  controllerType = 'Controller Type';
  controllerFunction = 'Controller Function';
  controllerManufacturer = 'Controller Manufacturer';
  controllerSeries = 'Controller Series';
  equipmentModel = 'Clone Equipment Type';
  ipAdress = 'IP Address';
  ioPerCard = 'I/O Per Card';
  ioTag = 'I/O Tag';
  ioType = 'Type I/O';
  IODescription = 'I/O Description';
  relayIOTag = 'Relay I/O Tag';
  relayIOType = 'Relay I/O Type';
  relayIODescription = 'Relay I/O Description';
  //
  changeControllerTypeAfterChangeEquipmentType = [];
  changeControllerFunctionAfterChangeEquipmentType = [];
  changeControllerManufactureAfterChangeEquipmentType = [];
  changeControllerSeriesAfterChangeEquipmentType = [];
  changeCloneEquipmentTypeAfterChangeEquipmentType = [];
  changeEquipmentModelAfterChangeEquipmentType = [];
  changeIpAdressAfterChangeEquipmentType = [];
  changeIOPerCardAfterChangeEquimpentTypeAndEquipmentModel = [];
  changeIOtagAfterChangeEquipmentElementTypeAndEquipmentModel = [];
  changeIOTypeAfterChangeEquipmentType = [];
  changeIODescriptionAfterChangeEquimpentTypeAndCloneEquipmentType = [];
  changeRelayIODescriptionAfterChangeEquimpentTypeAndCloneEquipmentType = [];
  changeRelayIOTypeAfterChangeEquimpentTypeAndCloneEquipmentType = [];
  changeIODescriptionRelayAfterChangeEquimpentTypeAndCloneEquipmentType = [];
  //
  dataSheetNumber = [];

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    // tslint:disable-next-line:no-unused-expression
    event.target.innerWidth;
    this.sizeWindow = event.target.innerWidth;
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private controllerService: ControllerService,
    private spinnerService: Ng4LoadingSpinnerService,
    private projectServise: ProjectService
  ) {
    this.projectId = this.route.snapshot.params['id'];
    this.controllerId = this.route.snapshot.params['controllerId'];
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
    this.controllerService.getControllerItem(this.projectId, this.controllerId).subscribe(controllers => {
      this.controllerItem = controllers.controller;
      this.controller = controllers;
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
      this.date = (new Date(this.controllerItem.dataAdded)).toLocaleDateString();
      this.changeControllerTypeAfterChangeEquipmentType = controllers.controller.controllerType
        .filter(et => et.equipmentElementType === controllers.controller.selectedEquipmentType);
      this.changeControllerFunctionAfterChangeEquipmentType = controllers.controller.controllerFunction
        .filter(et => et.equipmentElementType === controllers.controller.selectedEquipmentType);
      this.changeControllerManufactureAfterChangeEquipmentType = controllers.controller.controllerManufacturer
        .filter(et => et.equipmentElementType === controllers.controller.selectedEquipmentType);
      this.changeControllerSeriesAfterChangeEquipmentType = controllers.controller.сontrollerSeries
        .filter(et => et.equipmentElementType === controllers.controller.selectedEquipmentType);
      this.changeCloneEquipmentTypeAfterChangeEquipmentType = controllers.controller.сloneEquipmentType
        .filter(et => et.equipmentElementType === controllers.controller.selectedEquipmentType);
      this.changeEquipmentModelAfterChangeEquipmentType = controllers.controller.equipmentModel
        .filter(et => et.equipmentElementType === controllers.controller.selectedEquipmentType);
      this.changeIpAdressAfterChangeEquipmentType = controllers.controller.ipAdress
        .filter(et => et.equipmentElementType === controllers.controller.selectedEquipmentType);
      this.changeIOPerCardAfterChangeEquimpentTypeAndEquipmentModel = controllers.controller.ioPerCard
        .filter(et => et.equipmentElementType === controllers.controller.selectedEquipmentType &&
          et.equipmentModel === controllers.controller.selectedEquipmentModel.name);
      this.changeIOtagAfterChangeEquipmentElementTypeAndEquipmentModel = controllers.controller.ioTag
        .filter(et => et.equipmentElementType === controllers.controller.selectedEquipmentType &&
          et.cloneEquipmentTag === controllers.controller.selectedCloneEquipmentType.name);
      this.changeIOTypeAfterChangeEquipmentType = controllers.controller.ioType
        .filter(et => et.equipmentElementType === controllers.controller.selectedEquipmentType);
      this.changeIODescriptionAfterChangeEquimpentTypeAndCloneEquipmentType = controllers.controller.ioDescription
        .filter(et => et.equipmentElementType === controllers.controller.selectedEquipmentType &&
          et.cloneEquipmentTag === controllers.controller.selectedCloneEquipmentType.name);
      this.changeRelayIODescriptionAfterChangeEquimpentTypeAndCloneEquipmentType = controllers.controller.relayIODescription
        .filter(et => et.equipmentElementType === controllers.controller.selectedEquipmentType &&
          et.cloneEquipmentType === controllers.controller.selectedCloneEquipmentType.name);
      this.changeRelayIOTypeAfterChangeEquimpentTypeAndCloneEquipmentType = controllers.controller.relayIOType
        .filter(et => et.equipmentElementType === controllers.controller.selectedEquipmentType &&
          et.cloneEquipmentType === controllers.controller.selectedCloneEquipmentType.name);
      this.changeIODescriptionRelayAfterChangeEquimpentTypeAndCloneEquipmentType = controllers.controller.IODescriptionRelay
        .filter(et => et.equipmentElementType === controllers.controller.selectedEquipmentType &&
          et.cloneEquipmentType === controllers.controller.selectedCloneEquipmentType.name);
    },
    err => {
      console.log(err);
      return false;
    });
    this.spinnerService.hide();
  }

  controllerTypeChanged() {
    if (!this.controllerItem) {
      return;
    } else {
      this.changeControllerTypeAfterChangeEquipmentType = this.controllerItem.controllerType
      .filter(et => et.equipmentElementType === this.controllerItem.selectedEquipmentType);
      this.controllerItem.selectedControllerType.name = '';
    }
  }

  controllerFunctionChanged() {
    if (!this.controllerItem) {
      return;
    } else {
      this.changeControllerFunctionAfterChangeEquipmentType = this.controllerItem.controllerFunction
        .filter(et => et.equipmentElementType === this.controllerItem.selectedEquipmentType);
      this.controllerItem.selectedControllerFunction.name = '';
    }
  }

  controllerManufactureChanged() {
    if (!this.controllerItem) {
      return;
    } else {
      this.changeControllerManufactureAfterChangeEquipmentType = this.controllerItem.controllerManufacturer
        .filter(et => et.equipmentElementType === this.controllerItem.selectedEquipmentType);
      this.controllerItem.selectedControllerManufacturer.name = '';
    }
  }

  changeControllerSeries() {
    if (!this.controllerItem) {
      return;
    } else {
      this.changeControllerSeriesAfterChangeEquipmentType = this.controllerItem.сontrollerSeries
      .filter(et => et.equipmentElementType === this.controllerItem.selectedEquipmentType);
      this.controllerItem.selectedControllerSeries.name = '';
    }
  }

  changeCloneEquipmentType() {
    if (!this.controllerItem) {
      return;
    } else {
      this.changeCloneEquipmentTypeAfterChangeEquipmentType = this.controllerItem.сloneEquipmentType
        .filter(et => et.equipmentElementType === this.controllerItem.selectedEquipmentType);
      this.controllerItem.selectedCloneEquipmentType.name = '';
    }
  }

  changeEquipmentModel() {
    if (!this.controllerItem) {
      return;
    } else {
      this.changeEquipmentModelAfterChangeEquipmentType = this.controllerItem.equipmentModel
        .filter(et => et.equipmentElementType === this.controllerItem.selectedEquipmentType);
    }
  }

  changeIpAdress() {
    if (!this.controllerItem) {
      return;
    } else {
      this.changeIpAdressAfterChangeEquipmentType = this.controllerItem.ipAdress
        .filter(et => et.equipmentElementType === this.controllerItem.selectedEquipmentType);
      this.controllerItem.selectedIPAdress.name = '';
    }
  }

  changeIOPerCard(equipmentType) {
    if (!this.controllerItem) {
      return;
    } else {
      this.changeIOPerCardAfterChangeEquimpentTypeAndEquipmentModel = this.controllerItem.ioPerCard
        .filter(et => et.equipmentElementType === this.controllerItem.selectedEquipmentType &&
          et.equipmentModel === equipmentType);
    }
  }

  changeIOTag(equipmentType) {
    if (!this.controllerItem) {
      return;
    } else {
      this.changeIOtagAfterChangeEquipmentElementTypeAndEquipmentModel = this.controllerItem.ioTag
        .filter(et => et.equipmentElementType === this.controllerItem.selectedEquipmentType &&
          et.cloneEquipmentTag === equipmentType);
    }
  }

  changeIOType() {
    if (!this.controllerItem) {
      return;
    } else {
      this.changeIOTypeAfterChangeEquipmentType = this.controllerItem.ioType
        .filter(et => et.equipmentElementType === this.controllerItem.selectedEquipmentType);
      this.controllerItem.selectedIOType.name = '';
    }
  }

  changeIODEscription() {
    if (!this.controllerItem) {
      return;
    } else {
      this.changeIODescriptionAfterChangeEquimpentTypeAndCloneEquipmentType = this.controllerItem.ioDescription
      .filter(et => et.equipmentElementType === this.controllerItem.selectedEquipmentType &&
        et.cloneEquipmentTag === this.controllerItem.selectedCloneEquipmentType.name);
      this.controllerItem.selectedIODescription.name = '';
    }
  }

  changeRelayIODescription() {
    if (!this.controllerItem) {
      return;
    } else {
      this.changeRelayIODescriptionAfterChangeEquimpentTypeAndCloneEquipmentType = this.controllerItem.relayIODescription
        .filter(et => et.equipmentElementType === this.controllerItem.selectedEquipmentType &&
          et.cloneEquipmentType === this.controllerItem.selectedCloneEquipmentType.name);
      this.controllerItem.selectedRelayIODescription.name = '';
    }
  }

  changeRelayIOType() {
    if (!this.controllerItem) {
      return;
    } else {
      this.changeRelayIOTypeAfterChangeEquimpentTypeAndCloneEquipmentType = this.controllerItem.relayIOType
        .filter(et => et.equipmentElementType === this.controllerItem.selectedEquipmentType &&
          et.cloneEquipmentType === this.controllerItem.selectedCloneEquipmentType.name);
      this.controllerItem.selectedRelayIOType.name = '';
    }
  }

  changeIODescriptionRelay() {
    if (!this.controllerItem) {
      return;
    } else {
      this.changeIODescriptionRelayAfterChangeEquimpentTypeAndCloneEquipmentType = this.controllerItem.IODescriptionRelay
        .filter(et => et.equipmentElementType === this.controllerItem.selectedEquipmentType &&
          et.cloneEquipmentType === this.controllerItem.selectedCloneEquipmentType.name);
      this.controllerItem.selectedIODescriptionRelay.name = '';
    }
  }

  changeArrayObject(productsAfterChange, projectData) {
    const arayObjectsAfterFilter = projectData
      .filter(c => c.equipmentElementType !== productsAfterChange[0].equipmentElementType);
    for (let i = 0; i < productsAfterChange.length; ++i) {
      const itemElement = productsAfterChange[i];
      arayObjectsAfterFilter.push(itemElement);
    }
    return arayObjectsAfterFilter;
  }

  changeСomplexArrayObject(productsAfterChange, projectData) {
    if (productsAfterChange.length === 0) {
      return;
    } else {
      const arayObjectsAfterFilter = projectData
        .filter(c => c.equipmentElementType !== productsAfterChange[0].equipmentElementType &&
          c.cloneEquipmentTag !== productsAfterChange[0].equipmentElementType);
      for (let i = 0; i < productsAfterChange.length; ++i) {
        const itemElement = productsAfterChange[i];
        arayObjectsAfterFilter.push(itemElement);
      }
      return arayObjectsAfterFilter;
    }
  }

  changeArrayIoPerCard(productsAfterChange, projectData) {
    if (productsAfterChange.length === 0) {
      return;
    } else {
      const arayObjectsAfterFilter = projectData
      .filter(c => c.equipmentElementType !== productsAfterChange[0].equipmentElementType &&
        c.equipmentModel !== productsAfterChange[0].equipmentModel);
      for (let i = 0; i < productsAfterChange.length; ++i) {
        const itemElement = productsAfterChange[i];
        arayObjectsAfterFilter.push(itemElement);
      }
    return arayObjectsAfterFilter;
    }
  }


  saveController(idController, data) {
    this.spinnerService.show();
    // missed Item Number - don`t have logic for thes element
    // missed Revision - get by default
    // missed Date Added - don`t change, get this data when create new element
    // missed Controls Equipment Tag1 - get by default
    // missed Controls Equipment Tag2 - get by default
    // Controls Equipment Parent Tag
    data.controlsEquipmentParentTag = this.controllerItem.controlsEquipmentParentTag;
    data.selectedControlsEquipmentParentTag = data.selectedControlsEquipmentParentTag;
    // missed New Tag - don`t have logic for thes element
    data.location = this.controllerItem.location;
    data.selectedLocation = data.selectedLocation;
    data.dataSheetNumber = this.controllerItem.dataSheetNumber;
    data.selectedDataSheetNumber = data.selectedDataSheetNumber;
    data.layoutDrawing = this.controllerItem.layoutDrawing;
    data.selectedLayoutDraving = data.selectedLayoutDraving;
    data.schematicDrawing = this.controllerItem.schematicDrawing;
    data.selectedSchematicDraving = data.selectedSchematicDraving;
    data.equipmentType = this.controllerItem.equipmentType;
    data.selectedEquipmentType = data.selectedEquipmentType;
    // Controller Type
    data.controllerType = this.changeArrayObject(this.changeControllerTypeAfterChangeEquipmentType, this.controllerItem.controllerType);
    data.selectedControllerType = {};
    data.selectedControllerType.name = this.controllerItem.selectedControllerType.name;
    data.selectedControllerType.equipmentElementType = data.selectedEquipmentType;
    // Controller Function
    // tslint:disable-next-line:max-line-length
    data.controllerFunction = this.changeArrayObject(this.changeControllerFunctionAfterChangeEquipmentType, this.controllerItem.controllerFunction);
    data.selectedControllerFunction = {};
    data.selectedControllerFunction.name = this.controllerItem.selectedControllerFunction.name;
    data.selectedControllerFunction.equipmentElementType = data.selectedEquipmentType;
    // Controller Manufacturer
    // tslint:disable-next-line:max-line-length
    data.controllerManufacturer = this.changeArrayObject(this.changeControllerManufactureAfterChangeEquipmentType, this.controllerItem.controllerManufacturer);
    data.selectedControllerManufacturer = {};
    data.selectedControllerManufacturer.name = this.controllerItem.selectedControllerManufacturer.name;
    data.selectedControllerManufacturer.equipmentElementType = data.selectedEquipmentType;
    // Controller Series
    // tslint:disable-next-line:max-line-length
    data.сontrollerSeries = this.changeArrayObject(this.changeControllerSeriesAfterChangeEquipmentType, this.controllerItem.сontrollerSeries);
    data.selectedControllerSeries = {};
    data.selectedControllerSeries.name = this.controllerItem.selectedControllerSeries.name;
    data.selectedControllerSeries.equipmentElementType = data.selectedEquipmentType;
    // Clone Equipment Type
    data.сloneEquipmentType = this.controllerItem.сloneEquipmentType;
    data.selectedCloneEquipmentType = {};
    data.selectedCloneEquipmentType.name = this.controllerItem.selectedCloneEquipmentType.name;
    data.selectedCloneEquipmentType.equipmentElementType = data.selectedEquipmentType;
    // Equipment Model
    data.equipmentModel = this.changeArrayObject(this.changeEquipmentModelAfterChangeEquipmentType, this.controllerItem.equipmentModel);
    data.selectedEquipmentModel = {};
    data.selectedEquipmentModel.name = this.controllerItem.selectedEquipmentModel.name;
    data.selectedEquipmentModel.equipmentElementType = data.selectedEquipmentType;
    // Node - Chassis - Slot - Data
    data.node = this.controllerItem.node;
    data.chassis = this.controllerItem.chassis;
    data.slot = this.controllerItem.slot;
    data.data = this.controllerItem.data;
    // IP Address
    data.ipAdress = this.changeArrayObject(this.changeIpAdressAfterChangeEquipmentType, this.controllerItem.ipAdress);
    data.selectedIPAdress = {};
    data.selectedIPAdress.name = this.controllerItem.selectedIPAdress.name;
    data.selectedIPAdress.equipmentElementType = data.selectedEquipmentType;
    // I/O Per Card - не добавляется если второй элемент не определен
    // tslint:disable-next-line:max-line-length
    data.ioPerCard = this.changeArrayIoPerCard(this.changeIOPerCardAfterChangeEquimpentTypeAndEquipmentModel, this.controllerItem.ioPerCard);
    data.selectedIOPerCard = {};
    data.selectedIOPerCard.name = this.controllerItem.selectedIOPerCard.name;
    data.selectedIOPerCard.equipmentElementType = data.selectedEquipmentType;
    data.selectedIOPerCard.equipmentModel = data.selectedEquipmentModel.name;
    // Relay Quantity - DC Power - ESD Power
    data.relayQuantity = this.controllerItem.relayQuantity;
    data.dcPower  = this.controllerItem.dcPower;
    data.esdPower  = this.controllerItem.esdPower;
    // I/O Tag
    data.ioTag = this.changeСomplexArrayObject(this.changeIOtagAfterChangeEquipmentElementTypeAndEquipmentModel, this.controllerItem.ioTag);
    data.selectedIOTag = {};
    data.selectedIOTag.name = this.controllerItem.selectedIOTag.name;
    data.selectedIOTag.equipmentElementType = data.selectedEquipmentType;
    data.selectedIOTag.cloneEquipmentTag = data.selectedCloneEquipmentType.name;
    // I/O Type
    data.ioType = this.changeArrayObject(this.changeIOTypeAfterChangeEquipmentType, this.controllerItem.ioType);
    data.selectedIOType = {};
    data.selectedIOType.name = this.controllerItem.selectedIOType.name;
    data.selectedIOType.equipmentElementType = data.selectedEquipmentType;
    // I/O Description
    // tslint:disable-next-line:max-line-length
    data.ioDescription = this.changeСomplexArrayObject(this.changeIODescriptionAfterChangeEquimpentTypeAndCloneEquipmentType, this.controllerItem.ioDescription);
    data.selectedIODescription = {};
    data.selectedIODescription.name = this.controllerItem.selectedIODescription.name;
    data.selectedIODescription.equipmentElementType = data.selectedEquipmentType;
    data.selectedIODescription.cloneEquipmentTag = data.selectedCloneEquipmentType.name;
    // Relay I/O Tag
    // tslint:disable-next-line:max-line-length
    data.relayIODescription = this.changeСomplexArrayObject(this.changeRelayIODescriptionAfterChangeEquimpentTypeAndCloneEquipmentType, this.controllerItem.relayIODescription);
    data.selectedRelayIODescription = {};
    data.selectedRelayIODescription.name = this.controllerItem.selectedRelayIODescription.name;
    data.selectedRelayIODescription.equipmentElementType = data.selectedEquipmentType;
    data.selectedRelayIODescription.cloneEquipmentType = data.selectedCloneEquipmentType.name;
    // Relay I/O Type
    // tslint:disable-next-line:max-line-length
    data.relayIOType = this.changeСomplexArrayObject(this.changeRelayIOTypeAfterChangeEquimpentTypeAndCloneEquipmentType, this.controllerItem.relayIOType);
    data.selectedRelayIOType = {};
    data.selectedRelayIOType.name = this.controllerItem.selectedRelayIOType.name;
    data.selectedRelayIOType.equipmentElementType = data.selectedEquipmentType;
    data.selectedRelayIOType.cloneEquipmentType = data.selectedCloneEquipmentType.name;
    // Relay I/O Description
    // tslint:disable-next-line:max-line-length
    data.IODescriptionRelay = this.changeСomplexArrayObject(this.changeRelayIODescriptionAfterChangeEquimpentTypeAndCloneEquipmentType, this.controllerItem.IODescriptionRelay);
    data.selectedIODescriptionRelay = {};
    data.selectedIODescriptionRelay.name = this.controllerItem.selectedRelayIODescription.name;
    data.selectedIODescriptionRelay.equipmentElementType = data.selectedEquipmentType;
    data.selectedIODescriptionRelay.cloneEquipmentType = data.selectedCloneEquipmentType.name;
    // data.selectedCloneEquipmentType.name
    this.controllerService.updateControllerItem(this.projectId, idController, data).subscribe(res => {
      this.spinnerService.hide();
      this.router.navigate(['project', this.projectId, 'controllers']);
    }, (err) => {
      console.log(err);
    });
  }

  deleteController(controllerId) {
    this.spinnerService.show();
    this.controllerService.deleteControllerItem(this.projectId, controllerId).subscribe(res => {
      this.spinnerService.hide();
      this.router.navigate(['project', this.projectId, 'controllers']);
    }, (err) => {
      console.log(err);
    });
  }
}
