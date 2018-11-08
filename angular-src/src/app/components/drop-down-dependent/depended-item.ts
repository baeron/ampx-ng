export class DependedItem {
  general_item_name: string;
  depended_item_name: string;

  constructor(general_item_name: string, depended_item_name: string) {
    this.general_item_name = general_item_name;
    this.depended_item_name = depended_item_name;
  }
}
