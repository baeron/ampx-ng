import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cable-distance-modal',
  templateUrl: './cable-distance-modal.component.html',
  styleUrls: ['./cable-distance-modal.component.css']
})
export class CableDistanceModalComponent {

  @Input() firstElement;
  @Input() secondElement;
  @Input() selectedValue;
  @Input() title: string;

  itenElement: string;
  visible = false;
  modalFlag: boolean;
  public visibleAnimate = false;

  constructor() { }

  public showModal(): void {
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
  /*
    public addItem(itenEl: string){
      if(typeof this.dataValue[0] == 'string' || typeof this.dataValue[0] == 'undefined' ){
        this.dataValue.push(itenEl);
        this.visible = false;
        setTimeout(() => this.visible = false, 300);
        this.itenElement = null;
      } else {
        let elementArrayObject = {};
        elementArrayObject['name'] = itenEl;
        elementArrayObject['powerSystemType'] = this.dataValue[0].powerSystemType;
        this.dataValue.push(elementArrayObject);
        this.visible = false;
        setTimeout(() => this.visible = false, 300);
        this.itenElement = null;
      }
    }
  
    public deleteItem(itenEl: string){
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
    }
  */
  public close() {
    this.visible = false;
    setTimeout(() => this.visible = false, 300);
    this.modalFlag = false;
  }
}
