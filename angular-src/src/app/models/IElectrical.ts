export interface IElectrical {
    _id?: string;
    chiildList?: any;
    dateCreate?: string;
    isChecked?: boolean;
    loadFactor?: number;
    nameplateRating?: number;
    revision?: string;
    scenarioFirstFLA?: number;
    scenarioFirstKVA?: number;
    scenarioFirstKVAR?: number;
    scenarioFirstKW?: number;
    scenarioFirstLoadFactor?: number;
    selectedEquipmentType?: string;
    selectedUnits?: string;
    selectedVoltage?: any;
    totalConectedFla?: number;
    totalConectedKW?: number;
    totalConnectedKVA?: number;
    totalConnectedKVAR?: number;
    totalDemandFLA?: number;
    totalDemandKVA?: number;
    totalDemandKVAR?: number;
    totalDemandKW?: number;
    totalEFF?: number;
    totalPF?: number;
}
