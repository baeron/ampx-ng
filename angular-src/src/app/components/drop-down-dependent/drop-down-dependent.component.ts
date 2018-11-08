import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DependedItem } from './depended-item';

@Component({
  selector: 'app-drop-down-dependent',
  templateUrl: './drop-down-dependent.component.html',
  styleUrls: ['./drop-down-dependent.component.css']
})

export class DropDownDependentComponent {
  // dependedItem: DependedItem;
  @Input() itemType: [DependedItem];
  @Input() selectedItemType: any;
  @Input() dropDownName: string;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onChanged = new EventEmitter<string>();
  @Output() newOnChanged = new EventEmitter<string>();
  dropElementFlag = true;
  change(selectedItemType: any) {
    console.log(selectedItemType);
    this.onChanged.emit(selectedItemType);
  }
  newChanged(selectedItemType: any) {
    console.log(selectedItemType);
    this.newOnChanged.emit(selectedItemType);
  }
  // sit: string = this.selectedItemType;
}
