import { Input, Component } from '@angular/core';

@Component({
  selector: 'app-controller-modal',
  templateUrl: './controller-modal.component.html',
  styleUrls: ['./controller-modal.component.css']
})
export class ControllerModalComponent {
  @Input() dataValue;
  @Input() selectedValue;
  @Input() title: string;

  itenElement: string;
  visible = false;
  modalFlag: boolean;
  public visibleAnimate = false;

  constructor() { }

  public showAddModal(): void {
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  public showDropModal(flag): void {
    this.modalFlag = flag;
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
    this.modalFlag = false;
  }

  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }

  public addItem(itenEl: string) {
    // console.log(this.selectedValue);
    // console.log(this.dataValue);
    /*
    if(typeof this.dataValue[0] == 'string' || typeof this.dataValue[0] == 'undefined' ){
      console.log(this.title + ' Simple element');
      console.log(this.dataValue);
      this.dataValue.push(itenEl);
      this.selectedValue = itenEl;
      console.log(this.selectedValue);
      console.log(this.dataValue);
      this.visible = false;
      setTimeout(() => this.visible = false, 300);
      this.itenElement = null;
      return itenEl;
    } else {
      */
    let elementArrayObject = {};
    //I/O TAG
    if (this.title == "I/O Tag") {
      console.log(this.title + 'I/O Tag');
      let firstValueParentElement = this.dataValue[0].equipmentElementType;
      let secondValueParent = this.dataValue[0].cloneEquipmentTag;
      console.log(firstValueParentElement);
      console.log(secondValueParent);
      if (
        firstValueParentElement == 'POWER SUPPLY' ||
        firstValueParentElement == 'CHASSIS' ||
        firstValueParentElement == 'PROCESSOR CARD' ||
        firstValueParentElement == 'ETHERNET CARD' ||
        firstValueParentElement == 'DIGITAL INPUT CARD' ||
        firstValueParentElement == 'ANALOG OUTPUT CARD' ||
        firstValueParentElement == 'SPARE CARD SLOT' ||
        firstValueParentElement == 'SPARE CARD SLOT 1' ||
        firstValueParentElement == 'SPARE CARD SLOT 2' ||
        firstValueParentElement == 'SPARE CARD SLOT 3' ||
        firstValueParentElement == 'DIGITAL OUTPUT CARD' &&
        secondValueParent == ""
      ) {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = firstValueParentElement;
        elementArrayObject['cloneEquipmentTag'] = secondValueParent;
      } else if (
        firstValueParentElement == 'DIGITAL INPUT CARD' &&
        secondValueParent == "PRESSURE SWITCH"
      ) {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = firstValueParentElement;
        elementArrayObject['cloneEquipmentTag'] = secondValueParent;
      } else if (
        firstValueParentElement == 'DIGITAL INPUT CARD' && secondValueParent == "TEMPERATURE SWITCH"
      ) {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = firstValueParentElement;
        elementArrayObject['cloneEquipmentTag'] = secondValueParent;
      } else if (
        firstValueParentElement == 'DIGITAL INPUT CARD' && secondValueParent == "FLOW SWITCH"
      ) {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = firstValueParentElement;
        elementArrayObject['cloneEquipmentTag'] = secondValueParent;
      } else if (
        firstValueParentElement == 'DIGITAL INPUT CARD' && secondValueParent == "POSITION SWITCH CLOSED"
      ) {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = firstValueParentElement;
        elementArrayObject['cloneEquipmentTag'] = secondValueParent;
      } else if (
        firstValueParentElement == 'DIGITAL INPUT CARD' && secondValueParent == "POSITION SWITCH OPEN"
      ) {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = firstValueParentElement;
        elementArrayObject['cloneEquipmentTag'] = secondValueParent;
      } else if (
        firstValueParentElement == 'DIGITAL INPUT CARD' && secondValueParent == "MOTOR RUN STATUS"
      ) {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = firstValueParentElement;
        elementArrayObject['cloneEquipmentTag'] = secondValueParent;
      } else if (
        firstValueParentElement == 'DIGITAL OUTPUT CARD' && secondValueParent == "INTERPOSING RELAY"
      ) {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = firstValueParentElement;
        elementArrayObject['cloneEquipmentTag'] = secondValueParent;
      } else if (
        firstValueParentElement == 'DIGITAL OUTPUT CARD' && secondValueParent == "INTERPOSING RELAY 1"
      ) {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = firstValueParentElement;
        elementArrayObject['cloneEquipmentTag'] = secondValueParent;
      } else if (
        firstValueParentElement == 'DIGITAL OUTPUT CARD' && secondValueParent == "INTERPOSING RELAY 2"
      ) {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = firstValueParentElement;
        elementArrayObject['cloneEquipmentTag'] = secondValueParent;
      } else if (
        firstValueParentElement == 'DIGITAL OUTPUT CARD' && secondValueParent == "INTERPOSING RELAY 3"
      ) {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = firstValueParentElement;
        elementArrayObject['cloneEquipmentTag'] = secondValueParent;
      } else if (
        firstValueParentElement == 'DIGITAL OUTPUT CARD' && secondValueParent == "INTERPOSING RELAY 4"
      ) {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = firstValueParentElement;
        elementArrayObject['cloneEquipmentTag'] = secondValueParent;
      } else if (
        firstValueParentElement == 'DIGITAL OUTPUT CARD' && secondValueParent == "INTERPOSING RELAY 5"
      ) {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = firstValueParentElement;
        elementArrayObject['cloneEquipmentTag'] = secondValueParent;
      } else if (
        firstValueParentElement == 'DIGITAL OUTPUT CARD' && secondValueParent == "INTERPOSING RELAY 6"
      ) {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = firstValueParentElement;
        elementArrayObject['cloneEquipmentTag'] = secondValueParent;
      } else if (
        firstValueParentElement == 'DIGITAL OUTPUT CARD' && secondValueParent == "INTERPOSING RELAY 7"
      ) {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = firstValueParentElement;
        elementArrayObject['cloneEquipmentTag'] = secondValueParent;
      } else if (
        firstValueParentElement == 'ANALOG INPUT CARD' && secondValueParent == "INLET PRESSURE TRANSMITTER"
      ) {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = firstValueParentElement;
        elementArrayObject['cloneEquipmentTag'] = secondValueParent;
      } else if (
        firstValueParentElement == 'ANALOG INPUT CARD' && secondValueParent == "INLET TEMPERATURE TRANSMITTER"
      ) {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = firstValueParentElement;
        elementArrayObject['cloneEquipmentTag'] = secondValueParent;
      } else if (
        firstValueParentElement == 'ANALOG INPUT CARD' && secondValueParent == "FLOW TRANSMITTER"
      ) {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = firstValueParentElement;
        elementArrayObject['cloneEquipmentTag'] = secondValueParent;
      } else if (
        firstValueParentElement == 'ANALOG OUTPUT CARD' && secondValueParent == "CONTROL VALVE POSITION"
      ) {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = firstValueParentElement;
        elementArrayObject['cloneEquipmentTag'] = secondValueParent;
      } else {
        console.log('Я тут');
      }
    } else if (
      this.title == 'I/O Description'
    ) {
      console.log(this.title + 'I/O Description');
      let firstValueParentElement = this.dataValue[0].equipmentElementType;
      let secondValueParent = this.dataValue[0].cloneEquipmentTag;
      console.log(firstValueParentElement);
      console.log(secondValueParent);
      if (
        firstValueParentElement == '' &&
        secondValueParent == ''
      ) {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = firstValueParentElement;
        elementArrayObject['cloneEquipmentTag'] = secondValueParent;
      } else if (
        firstValueParentElement == 'POWER SUPPLY' ||
        firstValueParentElement == 'CHASSIS' ||
        firstValueParentElement == 'PROCESSOR CARD' ||
        firstValueParentElement == 'ETHERNET CARD' ||
        firstValueParentElement == 'DIGITAL INPUT CARD' ||
        firstValueParentElement == 'DIGITAL OUTPUT CARD' ||
        firstValueParentElement == 'ANALOG INPUT CARD' ||
        firstValueParentElement == 'SPARE CARD SLOT' ||
        firstValueParentElement == 'SPARE CARD SLOT 1' ||
        firstValueParentElement == 'SPARE CARD SLOT 2' ||
        firstValueParentElement == 'SPARE CARD SLOT 3' &&
        secondValueParent == ''
      ) {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = firstValueParentElement;
        elementArrayObject['cloneEquipmentTag'] = secondValueParent;
      } else if (
        secondValueParent == 'INTERPOSING RELAY' ||
        secondValueParent == 'INTERPOSING RELAY 1' ||
        secondValueParent == 'INTERPOSING RELAY 2' ||
        secondValueParent == 'INTERPOSING RELAY 3' ||
        secondValueParent == 'INTERPOSING RELAY 4' ||
        secondValueParent == 'INTERPOSING RELAY 5' ||
        secondValueParent == 'INTERPOSING RELAY 6' ||
        secondValueParent == 'INTERPOSING RELAY 7' &&
        firstValueParentElement == 'DIGITAL OUTPUT CARD'
      ) {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = firstValueParentElement;
        elementArrayObject['cloneEquipmentTag'] = secondValueParent;
      } else if (
        firstValueParentElement == 'ANALOG INPUT CARD' &&
        secondValueParent == 'INLET PRESSURE TRANSMITTER'
      ) {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = firstValueParentElement;
        elementArrayObject['cloneEquipmentTag'] = secondValueParent;
      } else if (
        firstValueParentElement == 'ANALOG INPUT CARD' &&
        secondValueParent == 'INLET TEMPERATURE TRANSMITTER'
      ) {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = firstValueParentElement;
        elementArrayObject['cloneEquipmentTag'] = secondValueParent;
      } else if (
        firstValueParentElement == 'ANALOG INPUT CARD' &&
        secondValueParent == 'FLOW TRANSMITTER'
      ) {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = firstValueParentElement;
        elementArrayObject['cloneEquipmentTag'] = secondValueParent;
      } else if (
        firstValueParentElement == 'NALOG OUTPUT CARD' &&
        secondValueParent == 'CONTROL VALVE POSITION'
      ) {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = firstValueParentElement;
        elementArrayObject['cloneEquipmentTag'] = secondValueParent;
      } else {
        return;
      }//Relay I/O Tag
    } else if (this.title == "Relay I/O Tag") {
      console.log(this.title + 'Relay I/O Type');
      let firstValueParentElement = this.dataValue[0].equipmentElementType;
      let secondValueParent = this.dataValue[0].cloneEquipmentType;
      if (
        firstValueParentElement == 'POWER SUPPLY' ||
        firstValueParentElement == 'CHASSIS' ||
        firstValueParentElement == 'PROCESSOR CARD' ||
        firstValueParentElement == 'ETHERNET CARD' ||
        firstValueParentElement == 'DIGITAL INPUT CARD' ||
        firstValueParentElement == 'DIGITAL OUTPUT CARD' &&
        secondValueParent == ''
      ) {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = firstValueParentElement;
        elementArrayObject['cloneEquipmentType'] = secondValueParent;
      } else if (
        secondValueParent == 'PRESSURE SWITCH' ||
        secondValueParent == 'TEMPERATURE SWITCH' ||
        secondValueParent == 'FLOW SWITCH' ||
        secondValueParent == 'POSITION SWITCH CLOSED' ||
        secondValueParent == 'POSITION SWITCH OPEN' ||
        secondValueParent == 'MOTOR RUN STATUS' &&
        firstValueParentElement == 'DIGITAL INPUT CARD'
      ) {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = firstValueParentElement;
        elementArrayObject['cloneEquipmentType'] = secondValueParent;
      } else if (
        secondValueParent == 'INTERPROSING RELAY' ||
        secondValueParent == 'INTERPROSING RELAY 1' ||
        secondValueParent == 'INTERPROSING RELAY 2' ||
        secondValueParent == 'INTERPROSING RELAY 3' ||
        secondValueParent == 'INTERPROSING RELAY 4' ||
        secondValueParent == 'INTERPROSING RELAY 5' ||
        secondValueParent == 'INTERPROSING RELAY 6' ||
        secondValueParent == 'INTERPROSING RELAY 7' &&
        firstValueParentElement == 'DIGITAL OUTPUT CARD'
      ) {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = firstValueParentElement;
        elementArrayObject['cloneEquipmentType'] = secondValueParent;
      } else {
        return;
      }
    } else if (this.title == 'Relay I/O Type') {
      console.log(this.title + 'Relay I/O Type');
      let firstValueParentElement = this.dataValue[0].equipmentElementType;
      let secondValueParent = this.dataValue[0].cloneEquipmentType;
      if (
        firstValueParentElement == 'DIGITAL OUTPUT CARD' && secondValueParent == ''
      ) {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = firstValueParentElement;
        elementArrayObject['cloneEquipmentType'] = secondValueParent;
      } else if (
        firstValueParentElement == 'DIGITAL OUTPUT CARD' && secondValueParent == 'INTERPROSING RELAY'
      ) {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = firstValueParentElement;
        elementArrayObject['cloneEquipmentType'] = secondValueParent;
      } else if (
        firstValueParentElement == 'DIGITAL OUTPUT CARD' && secondValueParent == 'INTERPROSING RELAY 1'
      ) {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = firstValueParentElement;
        elementArrayObject['cloneEquipmentType'] = secondValueParent;
      } else {
        return;
      }
    } else if (this.title == 'I/O Per Card') {
      console.log(this.title + 'I/O Per Card');
      let firstValueParentElement = this.dataValue[0].equipmentElementType;
      let secondValueParent = this.dataValue[0].equipmentModel;
      if (firstValueParentElement == '') {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = firstValueParentElement;
        elementArrayObject['equipmentModel'] = secondValueParent;
      } else if (firstValueParentElement == 'POWER SUPPLY') {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = firstValueParentElement;
        elementArrayObject['equipmentModel'] = secondValueParent;
      } else if (
        firstValueParentElement == 'CHASSIS'
      ) {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = firstValueParentElement;
        elementArrayObject['equipmentModel'] = secondValueParent;
      } else if (
        firstValueParentElement == 'PROCESSOR CARD'
      ) {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = firstValueParentElement;
        elementArrayObject['equipmentModel'] = secondValueParent;
      } else if (
        firstValueParentElement == 'ETHERNET CARD'
      ) {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = firstValueParentElement;
        elementArrayObject['equipmentModel'] = secondValueParent;
      } else if (
        firstValueParentElement == 'DIGITAL INPUT CARD' &&
        secondValueParent == "1756-IB16"
      ) {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = firstValueParentElement;
        elementArrayObject['equipmentModel'] = secondValueParent;
      } else if (
        firstValueParentElement == 'DIGITAL INPUT CARD' &&
        secondValueParent == "1756-IB32"
      ) {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = firstValueParentElement;
        elementArrayObject['equipmentModel'] = secondValueParent;
      } else if (
        firstValueParentElement == 'DIGITAL OUTPUT CARD' &&
        secondValueParent == "1756-OB16"
      ) {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = firstValueParentElement;
        elementArrayObject['equipmentModel'] = secondValueParent;
      } else if (
        firstValueParentElement == 'DIGITAL OUTPUT CARD' &&
        secondValueParent == "1756-OB32"
      ) {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = firstValueParentElement;
        elementArrayObject['equipmentModel'] = secondValueParent;
      } else if (
        firstValueParentElement == 'ANALOG INPUT CARD' &&
        secondValueParent == "1756-IF16"
      ) {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = firstValueParentElement;
        elementArrayObject['equipmentModel'] = secondValueParent;
      } else if (
        firstValueParentElement == 'ANALOG INPUT CARD' &&
        secondValueParent == "1756-IF16H"
      ) {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = firstValueParentElement;
        elementArrayObject['equipmentModel'] = secondValueParent;
      } else if (
        firstValueParentElement == 'ANALOG OUTPUT CARD' &&
        secondValueParent == "1756-OF8"
      ) {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = firstValueParentElement;
        elementArrayObject['equipmentModel'] = secondValueParent;
      } else if (
        firstValueParentElement === 'SPARE CARD SLOT' ||
        firstValueParentElement === 'SPARE CARD SLOT 1' ||
        firstValueParentElement === 'SPARE CARD SLOT 2' ||
        firstValueParentElement === 'SPARE CARD SLOT 3'
      ) {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = firstValueParentElement;
        elementArrayObject['equipmentModel'] = secondValueParent;
      } else {
        return;
      }
      //console.log('I/O Per Card');
    } else if (this.title == 'Type I/O') {
      console.log(this.title + 'Type I/O');
      let valueParentElement = this.dataValue[0].equipmentElementType;
      if (
        valueParentElement == '' ||
        valueParentElement == 'POWER SUPPLY' ||
        valueParentElement == 'CHASSIS' ||
        valueParentElement == 'PROCESSOR CARD' ||
        valueParentElement == 'ETHERNET CARD' ||
        valueParentElement == 'SPARE CARD SLOT' ||
        valueParentElement == 'SPARE CARD SLOT 1' ||
        valueParentElement == 'SPARE CARD SLOT 2' ||
        valueParentElement == 'SPARE CARD SLOT 3'
      ) {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = valueParentElement;
      } else if (valueParentElement == 'DIGITAL INPUT CARD') {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = valueParentElement;
      } else if (valueParentElement == 'DIGITAL OUTPUT CARD') {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = valueParentElement;
      } else if (valueParentElement == 'ANALOG INPUT CARD') {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = valueParentElement;
      } else if (valueParentElement == 'ANALOG OUTPUT CARD') {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = valueParentElement;
      } else {
        console.log('Somthing was wrong');
      }
    } else if (this.title == 'IP Address') {
      console.log(this.title);
      let valueParentElement = this.dataValue[0].equipmentElementType;
      if (
        valueParentElement == '' ||
        valueParentElement == 'POWER SUPPLY' ||
        valueParentElement == 'CHASSIS' ||
        valueParentElement == 'PROCESSOR CARD' ||
        valueParentElement == 'DIGITAL INPUT CARD' ||
        valueParentElement == 'DIGITAL OUTPUT CARD' ||
        valueParentElement == 'ANALOG INPUT CARD' ||
        valueParentElement == 'ANALOG OUTPUT CARD' ||
        valueParentElement == 'SPARE CARD SLOT' ||
        valueParentElement == 'SPARE CARD SLOT 1' ||
        valueParentElement == 'SPARE CARD SLOT 2' ||
        valueParentElement == 'SPARE CARD SLOT 3'
      ) {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = valueParentElement;
      } else if (
        valueParentElement == 'ETHERNET CARD'
      ) {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = valueParentElement;
      } else {
        return;
      }
    } else {
      console.log(this.title + 'All other');
      // PART FOR CONTROLLER TYPE / CONTROLLER FUNCTION / CONTROLLER MANUFACTURE / CONTROLLERS SERIES / EQUIPMENT MODEL
      let valueParentElement = this.dataValue[0].equipmentElementType;
      console.log(valueParentElement);
      //let elementArrayObject = {};
      if (
        valueParentElement == '' ||
        valueParentElement == 'POWER SUPPLY' ||
        valueParentElement == 'CHASSIS' ||
        valueParentElement == 'ETHERNET CARD' ||
        valueParentElement == 'DIGITAL INPUT CARD' ||
        valueParentElement == 'DIGITAL OUTPUT CARD' ||
        valueParentElement == 'ANALOG INPUT CARD' ||
        valueParentElement == 'ANALOG OUTPUT CARD' ||
        valueParentElement == 'SPARE CARD SLOT' ||
        valueParentElement == 'SPARE CARD SLOT 1' ||
        valueParentElement == 'SPARE CARD SLOT 2' ||
        valueParentElement == 'SPARE CARD SLOT 3'
      ) {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = valueParentElement;
      } else if (valueParentElement == 'PROCESSOR CARD') {
        elementArrayObject['name'] = itenEl;
        elementArrayObject['equipmentElementType'] = valueParentElement;
      } else {
        console.log('Somthing was wrong');
      }
    }
    this.dataValue.push(elementArrayObject);
    //console.log(this.dataValue);
    this.visible = false;
    setTimeout(() => this.visible = false, 300);
    this.itenElement = null;
    //}
  }

  /*public deleteItem(itenEl: string){
    let elementIndex: number;
    for(let i=0; i<this.dataValue.length; ++i){
      let arrayElement = this.dataValue[i];
      if(itenEl === arrayElement){
        elementIndex = i;
      }
    }
    this.dataValue.splice(elementIndex, 1);
    this.visible = false;
    this.modalFlag = false;
  }*/
  public deleteItem(itenEl: string) {
    let elementIndex: number;
    console.log(this.dataValue);
    //for object 
    for (let i = 0; i < this.dataValue.length; ++i) {
      let arrayElement = this.dataValue[i];
      //console.log(arrayElement);
      if (itenEl === arrayElement.name) {
        elementIndex = i;
      }
    }
    this.dataValue.splice(elementIndex, 1);
    console.log(this.dataValue);
    this.visible = false;
    this.modalFlag = false;
  }

  public close() {
    this.visible = false;
    setTimeout(() => this.visible = false, 300);
    this.modalFlag = false;
  }
}
