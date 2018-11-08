import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-simple-electrical-modal',
  templateUrl: './simple-electrical-modal.component.html',
  styleUrls: ['./simple-electrical-modal.component.css']
})
export class SimpleElectricalModalComponent {
  @Input() dataValue;
  @Input() selectedValue;
  @Input() title: string;
  //
  @Output() newOnChanged = new EventEmitter<string>();

  itenElement: string;
  public visible = false;
  public modalFlag: boolean;
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
  //
  newChanged(selectedEquipmentType: any) {
    if (!selectedEquipmentType) {
      return;
    } else {
      this.newOnChanged.emit(selectedEquipmentType);
      //
      // console.log(this.dataValue);
      // console.log(this.selectedValue);
    }
  }
  //
  public addItem(itenEl: string) {
    // console.log(this.selectedValue);
    if (typeof this.dataValue[0] === 'string' || typeof this.dataValue[0] === 'undefined') {
      this.dataValue.push(itenEl);
      this.selectedValue = itenEl;
      this.visible = false;
      setTimeout(() => this.visible = false, 300);
      this.itenElement = null;
      this.newChanged(this.selectedValue);
    } else if (this.title === 'Equipment Type') {
      const elementArrayObject = {};
      elementArrayObject['name'] = itenEl;
      // elementArrayObject['owner'] = this.dataValue[0].powerSystemType;
      this.dataValue.push(elementArrayObject);
      this.visible = false;
      setTimeout(() => this.visible = false, 300);
      this.itenElement = null;
      // console.log(elementArrayObject);
      this.newChanged(elementArrayObject);
      //
    } else {
      const elementArrayObject = {};
      elementArrayObject['name'] = itenEl;
      elementArrayObject['powerSystemType'] = this.dataValue[0].powerSystemType;
      this.dataValue.push(elementArrayObject);
      this.visible = false;
      setTimeout(() => this.visible = false, 300);
      this.itenElement = null;
      // console.log(elementArrayObject);
      this.newChanged(elementArrayObject);
    }
  }

  public deleteItem(itenEl: string) {
    let elementIndex: number;
    for (let i = 0; i < this.dataValue.length; ++i) {
      const arrayElement = this.dataValue[i];
      if (itenEl === arrayElement) {
        elementIndex = i;
      }
    }
    this.dataValue.splice(elementIndex, 1);
    this.visible = false;
    this.modalFlag = false;
  }

  public close() {
    this.visible = false;
    setTimeout(() => this.visible = false, 300);
    this.modalFlag = false;
  }
}
