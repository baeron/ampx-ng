import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent {
  @Input() equipmentType: [string];
  @Input() selectedEquipmentType: string;
  @Input() dropDownName: string;
  // tslint:disable-next-line:no-output-on-prefix
  // @Output() itemWasSelected: EventEmitter<[string]>;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onChanged = new EventEmitter<string>();
  @Output() newOnChanged = new EventEmitter<string>();
  dropElementFlag = true;
  change(selectedEquipmentType: any) {
    this.onChanged.emit(selectedEquipmentType);
  }
  newChanged(selectedEquipmentType: any) {
    this.newOnChanged.emit(selectedEquipmentType);
  }
}
