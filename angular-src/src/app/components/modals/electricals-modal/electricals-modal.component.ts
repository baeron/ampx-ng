import { Input, Component } from '@angular/core';

@Component({
  selector: 'app-electricals-modal',
  templateUrl: './electricals-modal.component.html',
  styleUrls: ['./electricals-modal.component.css']
})
export class ElectricalsModalComponent {
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

  public addItem(itenEl: string): string {
    if (typeof this.dataValue[0] === 'string' || typeof this.dataValue[0] === 'undefined') {
      this.dataValue.push(itenEl);
      this.selectedValue = itenEl;
      this.visible = false;
      setTimeout(() => this.visible = false, 300);
      this.itenElement = null;
      return itenEl;
    } else {
      const elementArrayObject = {};
      elementArrayObject['name'] = itenEl;
      elementArrayObject['powerSystemType'] = this.dataValue[0].powerSystemType;
      this.dataValue.push(elementArrayObject);
      this.visible = false;
      setTimeout(() => this.visible = false, 300);
      this.itenElement = null;
    }
  }

  public deleteItem(itenEl: string): void {
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
    this.itenElement = null;
    this.visible = false;
    setTimeout(() => this.visible = false, 300);
    this.modalFlag = false;
  }
}
