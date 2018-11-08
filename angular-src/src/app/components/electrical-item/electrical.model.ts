export class Electrical {
  constructor(
    public _id: string,
    public isChecked: boolean,
    public dateCreate: string,
    public revision: string,
    public quantity: number,
    public equipmentType: string[],
    public selectedEquipmentType: string,
    public pidDrawing: string[],
    public selectedPidDrawing: string,
    public layoutDrawing: string[],
    public selectedLayoutDrawing: string,
    public sldDraving: string[],
    public selectedSldDraving: string,
    public equipmentTag: string,
    public equipmentTag2: string,
    public chiildList: any[],
    public selectedParentTag: string,
    public equipmentNotes: string,
    public locationArea: string[],
    public selectedLocationArea: string,
    public equipmentDescription: string[],
    public selectedEquipmentDescription: string,
    public length: number,
    public depth: number,
    public height: number,
    public weight: number,
    public coordForX: number,
    public coordForY: number,
    public coordForZ: number,
    public heatDissipation: number,
    public scenarioFirstLoadFactor: string,
    public powerSystem: string[],
    public selectedPowerSystem: string,
    public voltage: any[],
    public selectedVoltage: any,
    public totalPF: number,
    public totalEFF: number,
    public nameplateRating: string,
    public units: string[],
    public selectedUnits: string,
    public motorSF: number[],
    public selectedMotorSF: number,
    public motorCode: string[],
    public selectedMotorCode: string,
    public sccRating: string[],
    public selectedSccRating: string,
    public enclosureRating: string[],
    public selectedEnclosureRating: string,
    public loadFactor: number,
    public loadDuty: string[],
    public selectedLoadDuty: string,
    public ambientTemp: number,
    public terminationTemp: number[],
    public selectedTerminationTemp: number,
    public operationTempMin: number,
    public operationTempMax: number,
    public insulDescription: string[],
    public selectedInsulDescription: string,
    public hazlocClass: string[],
    public selectedHazlocClass: string,
    public hazlocZone: string[],
    public selectedHazlocZone: string,
    public hazlocGroup: string[],
    public selectedHazlocGroup: string,
    public hazlocTemperature: string[],
    public selectedHazlocTemperature: string,
    public totalConectedFla: number,
    public totalConectedKW: number,
    public totalConnectedKVAR: number,
    public totalConnectedKVA: number,
    public totalDemandFLA: number,
    public totalDemandKW: number,
    public totalDemandKVAR: number,
    public totalDemandKVA: number,
    public scenarioFirstFLA: number,
    public scenarioFirstKW: number,
    public scenarioFirstKVAR: number,
    public scenarioFirstKVA: number
  ) { }
}