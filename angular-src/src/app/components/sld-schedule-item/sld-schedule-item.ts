export class SldSchedule {
  revision: string;
  majorEquipmentDevice: string; // must be list
  equipmentDescriptionForMED: string; //check type 
  majorEquipmentTag: string; //must be list
  systemVoltage: string; //зависимое значение от выбранного элемента!!! ВОЗМОЖНО НУЖНО ТОЛЬКО В SLD ITEM
  equipmentDescriptionForMET: string; //check type
  deviceType: string; //its O/C Device must be object
  frameRating: string; //must be object
  tripRating: string;
  contactorType: string; //must be object
  contactorSize: string; //must be object
  overloadType: string; //must be object
  overloadSize: string; //check type maybe int
  CPTQTY: string; //must be object
  CPTVoltage: string; //must be object
  CPTRating: string; //must be object
  vtQty: string; //must be object
  vtVoltage: string; //must be object
  vtAccuracy: string; //must be object
  ctQty: string; //must be object
  ctRatio: string; //must be object
  gfCtRatio: string; //must be object
  shuntCoil: string; //must be object
  kirkKeyIntrick: string; //must be object its Kirk Key in item view
  groundStud: string; //must be object
  PQM: boolean;
  feederPR: boolean;
  transformerPR: boolean;
  motorPR: boolean;
  ngrRelay: boolean;
  indicatingLights: string; //must be object
  spaceHeater: string; //on int
  heaterCircuit: boolean;
  noAuxContact: string; //must be object
  ncAuxContact: string; //must be object
  interposRelay: string; //must be object its Ipos.Rly.
  firstLocalSwitchPushbutton: string; //CHECK this type
  secondLocalSwitchPushbutton: string; //CHECK this type
  thirdLocalSwitchPushbutton: string; //CHECK this type
  fourthLocalSwitchPushbutton: string; //CHECK this type
  firstFieldSwitchPushbutton: string; //CHECK this type
  secondFieldSwitchPushbutton: string; //CHECK this type
  thirdFieldSwitchPushbutton: string; //CHECK this type
  fourthFieldSwitchPushbutton: string; //CHECK this type
}
