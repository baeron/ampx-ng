const mongoose = require('mongoose');

var userTeamSchema = new mongoose.Schema({
    email: String,
    guid: String

});

//ELECTRICAL SCHEMA
var electrucalSchema = new mongoose.Schema({
    author: String,
    isChecked: { type: Boolean, default: false },
    itemNumber: String,
    dateCreate: { type: Date, default: Date.now },
    revision: { type: String, default: 'A' },
    quantity: { type: Number, default: 1 },
    //equipmentType:,
    equipmentType: {
        type: Array,
        'default': ['UTILITY', 'TRANSFORMER', 'SWITCHGEAR', 'MCC', 'VFD', 'DISTRIBUTION PANEL', 'MOTOR', 'MOV', 'HEATER', 'LIGHT', 'RECEPTACLE', 'UPS CHARGER', 'CONTROL PANEL', 'JUNCTION BOX']
    },
    selectedEquipmentType: { type: String, default: 'UTILITY' },
    pidDrawing: [{ type: String }],
    selectedPidDrawing: String,
    layoutDrawing: [{ type: String }],
    selectedLayoutDrawing: String,
    sldDraving: [{ type: String }],
    selectedSldDraving: String,
    equipmentTag: { type: String },
    equipmentTag2: { type: String },
    chiildList: {
        type: Array,
        'default': []
    },
    selectedParentTag: String,
    equipmentNotes: String,
    locationArea: [{ type: String }],
    selectedLocationArea: String,
    equipmentDescription: [{ type: String }],
    selectedEquipmentDescription: String,
    //clone tag
    //new tag
    length: Number,
    depth: Number,
    height: Number,
    weight: Number,
    coordForX: Number,
    coordForY: Number,
    coordForZ: Number,
    heatDissipation: Number,
    scenarioFirstLoadFactor: { type: Number, default: 0 },
    powerSystem: {
        type: Array,
        'default': ['AC-3P', 'AC-1P', 'DC']
    },
    selectedPowerSystem: { type: String },
    voltage: {
        type: Array,
        'default': [
            { name: '', powerSystemType: '' },
            { name: '4160 VAC', powerSystemType: 'AC-3P' },
            { name: '600 VAC', powerSystemType: 'AC-3P' },
            { name: '480 VAC', powerSystemType: 'AC-3P' },
            { name: '208 VAC', powerSystemType: 'AC-3P' },
            { name: '2400 VAC', powerSystemType: 'AC-1P' },
            { name: '347 VAC', powerSystemType: 'AC-1P' },
            { name: '277 VAC', powerSystemType: 'AC-1P' },
            { name: '240 VAC', powerSystemType: 'AC-1P' },
            { name: '120 VAC', powerSystemType: 'AC-1P' },
            { name: '125 VDC', powerSystemType: 'DC' },
            { name: '48 VDC', powerSystemType: 'DC' },
            { name: '12 VDC', powerSystemType: 'DC' },
            { name: '4-20 mA', powerSystemType: 'DC' },
            { name: '1-5 mVDC', powerSystemType: 'DC' }
        ]
    },
    selectedVoltage: {
        type: Object,
        'default': {
            name: '',
            powerSystemType: ''
        }
    },
    totalPF: { type: Number, default: 0 },
    totalEFF: { type: Number, default: 0 },
    nameplateRating: { type: Number, default: 0 },
    units: {
        type: Array,
        'default': ['A', 'HP', 'KW', 'KVA']
    },
    selectedUnits: { type: String, default: '' },
    motorSF: {
        type: Array,
        'default': [1, 1.15, 1.25, 1.35]
    },
    selectedMotorSF: { type: Number },
    motorCode: {
        type: Array,
        'default': [
            "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "U", "V"
        ]
    },
    selectedMotorCode: { type: String },
    sccRating: {
        type: Array,
        'default': [
            "10 KA", "18 KA", "22 KA", "42 KA", "50 KA", "65 KA", "100 KA"
        ]
    },
    selectedSccRating: { type: String },
    enclosureRating: {
        type: Array,
        'default': [
            "NEMA 1", "NEMA 2", "NEMA 3", "NEMA 3R", "NEMA 4", "NEMA 4X", "NEMA 12", "NEMA 13", "WPI", "WPII", "TEFC", "TEFV"
        ]
    },
    selectedEnclosureRating: { type: String },
    loadFactor: { type: Number, default: 0 },
    loadDuty: {
        type: Array,
        'default': [
            "Continuous", "Intermitent", "Spare"
        ]
    },
    selectedLoadDuty: { type: String },
    ambientTemp: { type: Number },
    terminationTemp:
        {
            type: Array,
            'default': [
                75, 90
            ]
        },
    selectedTerminationTemp: { type: Number },
    operationTempMin: { type: Number },
    operationTempMax: { type: Number },
    insulDescription: {
        type: Array,
        'default': [
            "Class A(105 \u00B0С)", "Class B(130 \u00B0С)", "Class F(155 \u00B0C)", "Class A(180 \u00B0C)"
        ]
    },
    selectedInsulDescription: { type: String },
    hazlocClass: {
        type: Array,
        'default': ["General", "Class 1", "Class 2", "Class 3"]
    },
    selectedHazlocClass: String,
    hazlocZone: {
        type: Array,
        'default': ["Zone 0", "Zone 1", "Zone 2", "Division 1", "Division 2"]
    },
    selectedHazlocZone: String,

    hazlocGroup: {
        type: Array,
        'default': ["Group IIA", "Group IIB", "Group IIA"]
    },
    selectedHazlocGroup: String,
    hazlocTemperature: {
        type: Array,
        'default': ["T1 450 \u00B0С", "T2 300 \u00B0С", "T2A 280 \u00B0С", "T2B 260 \u00B0С", "T2C 230 \u00B0С", "T2D 215 \u00B0С",
            "T3 200 \u00B0С", "T3A 180 \u00B0С", "T3B 165 \u00B0С", "T3C 160 \u00B0С", "T4 135 \u00B0С", "T4A 120 \u00B0С", "T5 100 \u00B0С", "T6 85 \u00B0С"
        ]
    },
    selectedHazlocTemperature: String,

    totalConectedFla: { type: Number, default: 0 },
    totalConectedKW: { type: Number, default: 0 },
    totalConnectedKVAR: { type: Number, default: 0 },
    totalConnectedKVA: { type: Number, default: 0 },
    totalDemandFLA: { type: Number, default: 0 },
    totalDemandKW: { type: Number, default: 0 },
    totalDemandKVAR: { type: Number, default: 0 },
    totalDemandKVA: { type: Number, default: 0 },
    scenarioFirstFLA: { type: Number, default: 0 },
    scenarioFirstKW: { type: Number, default: 0 },
    scenarioFirstKVAR: { type: Number, default: 0 },
    scenarioFirstKVA: { type: Number, default: 0 },
});

//CABLE SHEMA
const cableShema = mongoose.Schema({
    isChecked: { type: Boolean, default: false },
    //INFO PART
    cableTagFirst: String,
    cableTagSecond: String,
    cableTagThird: String,
    cableTagFourth: String,
    cableTagIndex: {
        type: Array
    },
    selectedCableTagIndex: String,
    //selectedCableFromArray
    selectedCableFrom: String,
    //selectedCableToArray
    selectedCableTo: String,
    powerSystem: {
        type: Array,
        'default': ['AC-3P', 'AC-1P', 'DC']
    },
    selectedPowerSystem: { type: String, default: 'AC-3P' },
    conductorMaterial: {
        type: Array,
        'default': [
            { name: '', powerSystemType: 'AC-3P' },
            { name: 'Aluminium', powerSystemType: 'AC-3P' },
            { name: 'Copper', powerSystemType: 'AC-3P' },
            { name: '', powerSystemType: 'AC-1P' },
            { name: 'Copper', powerSystemType: 'AC-1P' },
            { name: 'Aluminium', powerSystemType: 'AC-1P' },
            { name: '', powerSystemType: 'DC' },
            { name: 'Copper', powerSystemType: 'DC' },
            { name: 'Aluminium', powerSystemType: 'DC' }
        ]
    },
    selectedConductorMaterial: {
        type: Object,
        'default': {
            name: '',
            powerSystemType: ''
        }
    },
    voltage: {
        type: Array,
        'default': [
            { name: '4160 VAC', powerSystemType: 'AC-3P' },
            { name: '600 VAC', powerSystemType: 'AC-3P' },
            { name: '480 VAC', powerSystemType: 'AC-3P' },
            { name: '208 VAC', powerSystemType: 'AC-3P' },
            { name: '2400 VAC', powerSystemType: 'AC-1P' },
            { name: '347 VAC', powerSystemType: 'AC-1P' },
            { name: '277 VAC', powerSystemType: 'AC-1P' },
            { name: '240 VAC', powerSystemType: 'AC-1P' },
            { name: '120 VAC', powerSystemType: 'AC-1P' },
            { name: '125 VDC', powerSystemType: 'DC' },
            { name: '48 VDC', powerSystemType: 'DC' },
            { name: '12 VDC', powerSystemType: 'DC' },
            { name: '4-20 mA', powerSystemType: 'DC' },
            { name: '1-5 mVDC', powerSystemType: 'DC' }
        ]
    },
    selectedVoltage: {
        type: Object,
        'default': {
            name: '4160 VAC',
            powerSystemType: 'AC-3P'
        }
    },
    serviceArray: {
        type: Array,
        'default': ['AC POWER', 'AC CONTROL', 'DC POWER', 'DC CONTROL', 'COMMS']
    },
    selectedService: String,
    maxAmbientTempArray: {
        type: Array,
        'default': ["30 \u00B0С", "35 \u00B0С", "40 \u00B0С", "45 \u00B0С", "50 \u00B0С", "55 \u00B0С", "60 \u00B0С", "65 \u00B0С",
            "75 \u00B0С", "80 \u00B0С", "90 \u00B0С", "100 \u00B0С", "110 \u00B0С", "120 \u00B0С", "130 \u00B0С", "140 \u00B0С"
        ]
    },
    selectedMaxAmbientTemp: String,

    //PHYSICAL PART
    cableTypeArrayArray: {
        type: Array,
        'default': ["TECK 90", "ACIC", "AC 90", "TRAY CABLE", "TW", "TWU"]
    },
    selectedCableType: String,
    insulationVoltageArray: {
        type: Array,
        'default': ["5000 V", "1000 V", "600 V"]
    },
    selectedInsulationVoltage: String,
    insulationRatingArray: {
        type: Array,
        'default': ["100 %", "130 %"]
    },
    selectedInsulationRating: String,
    conductorInsulationTypeArray: {
        type: Array,
        'default': ["EPR", "Nylon", "AC 90", "TRAY CABLE", "TW"]
    },
    selectedConductorInsulationType: String,
    insulationTemperatureRatingArray: {
        type: Array,
        'default': [
            { name: '60 \u00B0С', conductorMaterialType: 'Copper' },
            { name: '75 \u00B0С', conductorMaterialType: 'Copper' },
            { name: '90 \u00B0С', conductorMaterialType: 'Copper' },
            { name: '110 \u00B0С', conductorMaterialType: 'Copper' },
            { name: '125 \u00B0С', conductorMaterialType: 'Copper' },
            { name: '200 \u00B0С', conductorMaterialType: 'Copper' },
            { name: '', conductorMaterialType: 'Aluminium' }
        ]
    },
    selectedInsulationTemperatureRating: {
        type: Object,
        'default': {
            name: '60 \u00B0С',
            conductorMaterialType: 'Copper'
        }
    },
    shieldArray: {
        type: Array,
        'default': ["Shielded", "Not Shielded"]
    },
    selectedShield: String,
    armourArray: {
        type: Array,
        'default': ["Interlocking ALUM", "Interlocking STEEL", "Metal CLAD"]
    },
    selectedArmour: String,
    kgPerMetr: Number,
    outJacket: String,
    jacketColorArray: {
        type: Array,
        'default': ["Yellow", "Orange", "Black", "Blue", "Gray", "Red"]
    },
    selectedJacketColor: String,
    racewayArray: {
        type: Array,
        'default': ["Magnetic", "Non-Magnetic"]
    },
    selectedRaceway: String,
    ftRatingArray: {
        type: Array,
        'default': ["FT1", "FT4", "FT6"]
    },
    selectedFtRating: String,
    wireColorArray: {
        type: Array,
        'default': ["Black", "RD/BK/BL", "OR/BR/YL", "WT/BL", "RD/WT/BL"]
    },
    selectedWireColor: String,
    approvalArray: {
        type: Array,
        'default': ["CSA", "CSA, HL"]
    },
    selectedApproval: String,
    od: String,
    itemNum: Number,
    itemTypeArray: {
        type: Array,
        'default': ["C", "PR", "TR", "ST", "CAT5", "CAT6", "DNET", "COAX"]
    },
    selectedItemType: String,
    cableSizeArray: {
        type: Array,
        'default': ["22", "20", "18", "16", "14", "12", "10", "8", "6", "4", "3", "2", "1", "1/0", "2/0", "3/0", "4/0", "250", "300", "350", "400", "500", "600", "750"]
    },
    selectedCableSize: String,

    //CONFIGURATION
    installMethodArray: {
        type: Array,
        'default': ["TRAY", "SURFACE", "U/G", "FREE AIR", "CONDUIT", "SLEEVE"]
    },
    selectedInstallMethod: String,
    spacingArray: {
        type: Array,
        'default': ["100%", "25% < 100%", "0% < 25%", "Free Air"]
    },
    selectedSpacing: String,
    spacingCorrectionArray: {
        type: Array,
        'default': ["1", "T5D 0.93", "T5D 0.90", "T5D 0.89", "T5D 0.87", "T5D 0.84", "T5D 0.83", "T5D 0.82", "T5D 0.80", "T5D 0.79", "T5D 0.76", "T5D 0.75", "T5D 0.74", "T5D 0.70", "T5D 0.60", "T5D 0.50"]
    },
    selectedSpacingCorrection: String,
    tempCorrection: Number, //maybe number
    cecArray: {
        type: Array,
        'default': ["75 \u00B0С", "90 \u00B0С"]
    },
    selectedCec: String,
    correctedCondAmp: String, ////maybe number
    numberOfRunsPerPhase: String, ////maybe number
    feederAmpacity: String, ////maybe number
    //ALARM calculated value
    cableLenth: Number, ////maybe number
    voltageDropPercent: { type: Number, default: 0 }, ////maybe number
    //

    //LOAD
    connectedFLA: Number,
    ampacityMultiplierArray: {
        type: Array,
        'default': [1, 1.25, 1.35]
    },
    selectedAmpacityMultiplier: Number,
    minCondAmp: String, ////maybe number
    condAmpacity: String, ////maybe number
    ocAmpRating: String, ////maybe number
    internalNotes: String
});

const sldScheduleShema = mongoose.Schema({
    isChecked: { type: Boolean, default: false },
    //Equipment Info
    selectedMajorEquipmentDevice: String, //первый элемент
    selectedEquipmentDescriptionForMajorEquipmentDevice: String, //второй элемент
    selectedMajorEquipmentTag: String, //третий элемент
    selectedEquipmentDescriptionForMajorEquipmentTag: String, //четвертый элемент
    majorEquipmentDeviceTag: String, //название проекта
    selectedSystemVoltage: String,  //вольтаж
    //Incoming Section
    incomer: {
        type: Boolean,
        'default': false
    },
    lightningArrestor: {
        type: Boolean,
        'default': false
    },
    feederEntry: {
        type: Array,
        'default': ["Top", "Button"]
    },
    selectedFeederEntry: String,
    surgeProtection: {
        type: Boolean,
        'default': false
    },
    //Central Part
    ocDevice: {
        type: Array,
        'default': ["TMCB", "HMCP", "FUSE", "MV52", "MCCB"]
    },
    selectedOCDevice: String,
    contactorType: {
        type: Array,
        'default': ["FVNR", "FVR", "CONTACTOR 2P", "CONTACTOR 3P", "CONTACTOR 4P", "RVAT", "RVSS", "VFD"]
    },
    selectedContactorType: String,
    CPTQTY: {
        type: Array,
        'default': [0, 1]
    },
    selectedCPTQTY: Number,
    CTQTY: {
        type: Array,
        'default': [1, 2, 3]
    },
    selectedCTQTY: Number,
    tripRating: Number,
    contactorSize: {
        type: Array,
        'default': ['00', '0', '1', '2', '3', '4', '5', '6']
    },
    selectedContactorSize: String,
    CPTVoltage: {
        type: Array,
        'default': ["600-120v", "480-120v"]
    },
    selectedCPTVoltage: String,
    CTRatio: {
        type: Array,
        'default': ["15/5A", "20/5A", "30/5A", "50/5A", "75/5A", "100/5A", "150/5A", "200/5A", "250/5A", "300/5A", "400/5A", "500/5A", "600/5A", "750/5A", "1000/5A", "1500/5A", "2000/5A", "2500/5A", "3000/5A"]
    },
    selectedCTRatio: String,
    frameRating: {
        type: Array,
        'default': ["15A", "20A", "30A", "40A", "50A", "60A", "70A", "80A", "90A", "100A", "110A", "125A", "150A", "175A", "200A", "225A", "250A", "300A", "350A", "400A", "500A", "600A", "700A", "800A", "900A", "1000A", "1200A", "1400A", "1600A", "1800A", "2000A"]
    },
    selectedFrameRating: String,
    overloadType: {
        type: Array,
        'default': ["Classic", "Elec", "Elec+"]
    },
    selectedOverloadType: String,
    CPTRating: {
        type: Array,
        'default': ["100VA", "150VA", "200VA"]
    },
    selectedCPTRating: String,
    CTAccuracy: {
        type: Array,
        'default': [1.2, 0.6, 0.3]
    },
    selectedCTAccuracy: Number,
    fuseRating: {
        type: Array,
        'default': ["C", "J", "RK1", "2R", "3R", "4R", "5R", "6R", "9R", "12R", "10E", "15E", "20E", "25E", "30E", "40E", "50E", "65E", "80E", "100E"]
    },
    selectedFuseRating: String,
    overloadSize: Number,
    VTQTY: {
        type: Array,
        'default': [0, 1, 2, 3]
    },
    selectedVTQTY: String,
    GFCTRatio: {
        type: Array,
        'default': ["50/0.025A"]
        //TODO уточнить у Грега в этом поле только одно значение или значения в этом поле зависят от других полей
    },
    selectedGFCTRatio: String,
    SwitchRating: {
        type: Array,
        'default': [""]
        //TODO уточнить у Грега в этом поле только одно значение или значения в этом поле зависят от других полей
    },
    selectedSwitchRating: String,
    //TODO зависит от предыдущего поля
    VTVoltage: {
        type: Array,
        'default': ["600-120v", "480-120v"]
    },
    selectedVTVoltage: String,
    ShuntCoil: {
        type: Array,
        'default': ["1-120VAC", "1-125VDC", "1-24VDC"]
    },
    selectedShuntCoil: String,
    VTAccuracy: {
        type: Array,
        'default': [1.2, 0.6, 0.3]
    },
    selectedVTAccuracy: Number,
    KirkKey: {
        type: Array,
        'default': [0, 1, 2]
    },
    selectedKirkKey: Number,
    GroundStud: {
        type: Array,
        'default': [0, 1]
    },
    selectedGroundStud: Number,
    TransformerPR: {
        type: Boolean,
        'default': false
    },
    IndicatingLights: {
        type: Array,
        'default': ["R/G", "R/G/A"]
    },
    selectedIndicatingLights: String,
    NOAuxContact: {
        type: Array,
        'default': [1, 2, 3, 4, 5]
    },
    selectedNOAuxContact: Number,
    PQM: {
        type: Boolean,
        'default': false
    },
    MotorPR: {
        type: Boolean,
        'default': false
    },
    SpaceHeater: Number,
    NCAuxContact: {
        type: Array,
        'default': [1, 2, 3, 4, 5]
    },
    selectedNCAuxContact: Number,
    FeederPR: {
        type: Boolean,
        'default': false
    },
    NGRRelay: {
        type: Boolean,
        'default': false
    },
    HeaterCircuit: {
        type: Boolean,
        'default': false
    },
    InterposRelay: {
        type: Array,
        'default': [1, 2, 3, 4, 5]
    },
    selectedInterposRelay: Number,
    // PDP Detail
    firstPanelValue: {
        type: Array,
        'default': ['asdad']
    },
    selectedFirstPanelValue: String,
    secondPanelValue: {
        type: Array,
        'default': ['vcxxv']
    },
    selectedSecondPanelValue: String,
    thirdPanelValue: {
        type: Array,
        'default': ['zxc']
    },
    selectedThirdPanelValue: String,
    CircuitNumbers: Number,
    CFG: {
        type: Boolean,
        'default': false
    },
    //Local Switch/PB
    firstValueLocalSwitchPB: {
        type: Array,
        'default': ["2 Pos. SW", "3 Pos. SW", "4 Pos. SW", "Red PB", "Green PB", "Black PB"]
    },
    selectedFirstValueLocalSwitchPB: String,
    secondValueLocalSwitchPB: {
        type: Array,
        'default': ["2 Pos. SW", "3 Pos. SW", "4 Pos. SW", "Red PB", "Green PB", "Black PB"]
    },
    selectedSecondValueLocalSwitchPB: String,
    thirdValueLocalSwitchPB: {
        type: Array,
        'default': ["2 Pos. SW", "3 Pos. SW", "4 Pos. SW", "Red PB", "Green PB", "Black PB"]
    },
    selectedThirdValueLocalSwitchPB: String,
    fourthValueLocalSwitchPB: {
        type: Array,
        'default': ["2 Pos. SW", "3 Pos. SW", "4 Pos. SW", "Red PB", "Green PB", "Black PB"]
    },
    selectedFourthValueLocalSwitchPB: String,
    //Field Switch/PB
    firstValueFieldSwitchPB: {
        type: Array,
        'default': ["2 Pos. SW", "3 Pos. SW", "4 Pos. SW", "Red PB", "Green PB", "Black PB"]
    },
    selectedFirstValueFieldSwitchPB: String,
    secondValueFieldSwitchPB: {
        type: Array,
        'default': ["2 Pos. SW", "3 Pos. SW", "4 Pos. SW", "Red PB", "Green PB", "Black PB"]
    },
    selectedSecondValueFieldSwitchPB: String,
    thirdValueFieldSwitchPB: {
        type: Array,
        'default': ["2 Pos. SW", "3 Pos. SW", "4 Pos. SW", "Red PB", "Green PB", "Black PB"]
    },
    selectedThirdValueFieldSwitchPB: String,
    fourthValueLocalFieldSwitchPB: {
        type: Array,
        'default': ["2 Pos. SW", "3 Pos. SW", "4 Pos. SW", "Red PB", "Green PB", "Black PB"]
    },
    selectedFourthValueLocalFieldSwitchPB: String
});

//CONTROLLER SHEMA
const controllerShema = mongoose.Schema({
    //CONTROLLER INFO
    isChecked: { type: Boolean, default: false },
    itemNumber: String,
    revision: { type: String, default: 'A' },
    dataAdded: { type: Date, default: Date.now },
    controlsEquipmentTagFirst: { type: String },
    controlsEquipmentTagSecond: String,
    controlsEquipmentParentTag: {
        type: Array,
        'default': ["CP-100", "PLC-100"]
    },
    selectedControlsEquipmentParentTag: String,
    newTag: String,
    location: {
        type: Array,
        'default': ['MCC BUILDING']
    },
    selectedLocation: String,
    dataSheetNumber: Array,
    selectedDataSheetNumber: String,
    layoutDrawing: {
        type: Array,
        'default': ['LAY-100']
    },
    selectedLayoutDraving: String,
    schematicDrawing: {
        type: Array,
        'default': ['ARCH-001']
    },
    selectedSchematicDraving: String,
    equipmentType: {
        type: Array,
        'default': ['', 'POWER SUPPLY', 'CHASSIS', 'PROCESSOR CARD', 'ETHERNET CARD', 'DIGITAL INPUT CARD', 'DIGITAL OUTPUT CARD', 'ANALOG INPUT CARD', 'ANALOG OUTPUT CARD', 'SPARE CARD SLOT', 'SPARE CARD SLOT 1', 'SPARE CARD SLOT 2', 'SPARE CARD SLOT 3']
    },
    selectedEquipmentType: {
        type: String,
        'default': ''
    },
    //
    controllerType: {
        type: Array,
        'default': [
            //EMPTY
            { name: 'SHUTDOWN PLC', equipmentElementType: '' },
            { name: 'BPCS', equipmentElementType: '' },
            { name: 'DCS', equipmentElementType: '' },
            { name: 'SS', equipmentElementType: '' },
            { name: 'SIS', equipmentElementType: '' },
            { name: 'RTU', equipmentElementType: '' },
            { name: 'BMS', equipmentElementType: '' },
            { name: 'CONTROL RELAY', equipmentElementType: '' },
            { name: 'PROTECTION RELAY', equipmentElementType: '' },
            //POWER SUPPLY
            { name: 'SHUTDOWN PLC', equipmentElementType: 'POWER SUPPLY' },
            { name: 'BPCS', equipmentElementType: 'POWER SUPPLY' },
            { name: 'DCS', equipmentElementType: 'POWER SUPPLY' },
            { name: 'SS', equipmentElementType: 'POWER SUPPLY' },
            { name: 'SIS', equipmentElementType: 'POWER SUPPLY' },
            { name: 'RTU', equipmentElementType: 'POWER SUPPLY' },
            { name: 'BMS', equipmentElementType: 'POWER SUPPLY' },
            { name: 'CONTROL RELAY', equipmentElementType: 'POWER SUPPLY' },
            { name: 'PROTECTION RELAY', equipmentElementType: 'POWER SUPPLY' },
            //CHASSIS
            { name: 'SHUTDOWN PLC', equipmentElementType: 'CHASSIS' },
            { name: 'BPCS', equipmentElementType: 'CHASSIS' },
            { name: 'DCS', equipmentElementType: 'CHASSIS' },
            { name: 'SS', equipmentElementType: 'CHASSIS' },
            { name: 'SIS', equipmentElementType: 'CHASSIS' },
            { name: 'RTU', equipmentElementType: 'CHASSIS' },
            { name: 'BMS', equipmentElementType: 'CHASSIS' },
            { name: 'CONTROL RELAY', equipmentElementType: 'CHASSIS' },
            { name: 'PROTECTION RELAY', equipmentElementType: 'CHASSIS' },
            //PROCESSOR CARD
            { name: 'PLC', equipmentElementType: 'PROCESSOR CARD' },
            // ETHERNET CARD
            { name: 'SHUTDOWN PLC', equipmentElementType: 'ETHERNET CARD' },
            { name: 'BPCS', equipmentElementType: 'ETHERNET CARD' },
            { name: 'DCS', equipmentElementType: 'ETHERNET CARD' },
            { name: 'SS', equipmentElementType: 'ETHERNET CARD' },
            { name: 'SIS', equipmentElementType: 'ETHERNET CARD' },
            { name: 'RTU', equipmentElementType: 'ETHERNET CARD' },
            { name: 'BMS', equipmentElementType: 'ETHERNET CARD' },
            { name: 'CONTROL RELAY', equipmentElementType: 'ETHERNET CARD' },
            { name: 'PROTECTION RELAY', equipmentElementType: 'ETHERNET CARD' },
            // DIGITAL INPUT CARD
            { name: 'SHUTDOWN PLC', equipmentElementType: 'DIGITAL INPUT CARD' },
            { name: 'BPCS', equipmentElementType: 'DIGITAL INPUT CARD' },
            { name: 'DCS', equipmentElementType: 'DIGITAL INPUT CARD' },
            { name: 'SS', equipmentElementType: 'DIGITAL INPUT CARD' },
            { name: 'SIS', equipmentElementType: 'DIGITAL INPUT CARD' },
            { name: 'RTU', equipmentElementType: 'DIGITAL INPUT CARD' },
            { name: 'BMS', equipmentElementType: 'DIGITAL INPUT CARD' },
            { name: 'CONTROL RELAY', equipmentElementType: 'DIGITAL INPUT CARD' },
            { name: 'PROTECTION RELAY', equipmentElementType: 'DIGITAL INPUT CARD' },
            //DIGITAL OUTPUT CARD
            { name: 'SHUTDOWN PLC', equipmentElementType: 'DIGITAL OUTPUT CARD' },
            { name: 'BPCS', equipmentElementType: 'DIGITAL OUTPUT CARD' },
            { name: 'DCS', equipmentElementType: 'DIGITAL OUTPUT CARD' },
            { name: 'SS', equipmentElementType: 'DIGITAL OUTPUT CARD' },
            { name: 'SIS', equipmentElementType: 'DIGITAL OUTPUT CARD' },
            { name: 'RTU', equipmentElementType: 'DIGITAL OUTPUT CARD' },
            { name: 'BMS', equipmentElementType: 'DIGITAL OUTPUT CARD' },
            { name: 'CONTROL RELAY', equipmentElementType: 'DIGITAL OUTPUT CARD' },
            { name: 'PROTECTION RELAY', equipmentElementType: 'DIGITAL OUTPUT CARD' },
            //ANALOG INPUT CARD
            { name: 'SHUTDOWN PLC', equipmentElementType: 'ANALOG INPUT CARD' },
            { name: 'BPCS', equipmentElementType: 'ANALOG INPUT CARD' },
            { name: 'DCS', equipmentElementType: 'ANALOG INPUT CARD' },
            { name: 'SS', equipmentElementType: 'ANALOG INPUT CARD' },
            { name: 'SIS', equipmentElementType: 'ANALOG INPUT CARD' },
            { name: 'RTU', equipmentElementType: 'ANALOG INPUT CARD' },
            { name: 'BMS', equipmentElementType: 'ANALOG INPUT CARD' },
            { name: 'CONTROL RELAY', equipmentElementType: 'ANALOG INPUT CARD' },
            { name: 'PROTECTION RELAY', equipmentElementType: 'ANALOG INPUT CARD' },
            //ANALOG OUTPUT CARD
            { name: 'SHUTDOWN PLC', equipmentElementType: 'ANALOG OUTPUT CARD' },
            { name: 'BPCS', equipmentElementType: 'ANALOG OUTPUT CARD' },
            { name: 'DCS', equipmentElementType: 'ANALOG OUTPUT CARD' },
            { name: 'SS', equipmentElementType: 'ANALOG OUTPUT CARD' },
            { name: 'SIS', equipmentElementType: 'ANALOG OUTPUT CARD' },
            { name: 'RTU', equipmentElementType: 'ANALOG OUTPUT CARD' },
            { name: 'BMS', equipmentElementType: 'ANALOG OUTPUT CARD' },
            { name: 'CONTROL RELAY', equipmentElementType: 'ANALOG OUTPUT CARD' },
            { name: 'PROTECTION RELAY', equipmentElementType: 'ANALOG OUTPUT CARD' },
            //SPARE CARD SLOT
            { name: 'SHUTDOWN PLC', equipmentElementType: 'SPARE CARD SLOT' },
            { name: 'BPCS', equipmentElementType: 'SPARE CARD SLOT' },
            { name: 'DCS', equipmentElementType: 'SPARE CARD SLOT' },
            { name: 'SS', equipmentElementType: 'SPARE CARD SLOT' },
            { name: 'SIS', equipmentElementType: 'SPARE CARD SLOT' },
            { name: 'RTU', equipmentElementType: 'SPARE CARD SLOT' },
            { name: 'BMS', equipmentElementType: 'SPARE CARD SLOT' },
            { name: 'CONTROL RELAY', equipmentElementType: 'SPARE CARD SLOT' },
            { name: 'PROTECTION RELAY', equipmentElementType: 'SPARE CARD SLOT' },
            //SPARE CARD SLOT 1
            { name: 'SHUTDOWN PLC', equipmentElementType: 'SPARE CARD SLOT 1' },
            { name: 'BPCS', equipmentElementType: 'SPARE CARD SLOT 1' },
            { name: 'DCS', equipmentElementType: 'SPARE CARD SLOT 1' },
            { name: 'SS', equipmentElementType: 'SPARE CARD SLOT 1' },
            { name: 'SIS', equipmentElementType: 'SPARE CARD SLOT 1' },
            { name: 'RTU', equipmentElementType: 'SPARE CARD SLOT 1' },
            { name: 'BMS', equipmentElementType: 'SPARE CARD SLOT 1' },
            { name: 'CONTROL RELAY', equipmentElementType: 'SPARE CARD SLOT 1' },
            { name: 'PROTECTION RELAY', equipmentElementType: 'SPARE CARD SLOT 1' },
            //SPARE CARD SLOT 2
            { name: 'SHUTDOWN PLC', equipmentElementType: 'SPARE CARD SLOT 2' },
            { name: 'BPCS', equipmentElementType: 'SPARE CARD SLOT 2' },
            { name: 'DCS', equipmentElementType: 'SPARE CARD SLOT 2' },
            { name: 'SS', equipmentElementType: 'SPARE CARD SLOT 2' },
            { name: 'SIS', equipmentElementType: 'SPARE CARD SLOT 2' },
            { name: 'RTU', equipmentElementType: 'SPARE CARD SLOT 2' },
            { name: 'BMS', equipmentElementType: 'SPARE CARD SLOT 2' },
            { name: 'CONTROL RELAY', equipmentElementType: 'SPARE CARD SLOT 2' },
            { name: 'PROTECTION RELAY', equipmentElementType: 'SPARE CARD SLOT 2' },
            //SPARE CARD SLOT 3
            { name: 'SHUTDOWN PLC', equipmentElementType: 'SPARE CARD SLOT 3' },
            { name: 'BPCS', equipmentElementType: 'SPARE CARD SLOT 3' },
            { name: 'DCS', equipmentElementType: 'SPARE CARD SLOT 3' },
            { name: 'SS', equipmentElementType: 'SPARE CARD SLOT 3' },
            { name: 'SIS', equipmentElementType: 'SPARE CARD SLOT 3' },
            { name: 'RTU', equipmentElementType: 'SPARE CARD SLOT 3' },
            { name: 'BMS', equipmentElementType: 'SPARE CARD SLOT 3' },
            { name: 'CONTROL RELAY', equipmentElementType: 'SPARE CARD SLOT 3' },
            { name: 'PROTECTION RELAY', equipmentElementType: 'SPARE CARD SLOT 3' },
        ]
    },
    selectedControllerType: {
        type: Object,
        'default': {
            name: '',
            equipmentElementType: ''
        }
    },
    controllerFunction: {
        type: Array,
        'default': [
            //EMPTY
            { name: 'SHUTDOWN', equipmentElementType: '' },
            { name: 'INDICATING', equipmentElementType: '' },
            { name: 'CALCULATION', equipmentElementType: '' },
            { name: 'SAFETY SYSTEM', equipmentElementType: '' },
            //POWER SUPPLY
            { name: 'SHUTDOWN', equipmentElementType: 'POWER SUPPLY' },
            { name: 'INDICATING', equipmentElementType: 'POWER SUPPLY' },
            { name: 'CALCULATION', equipmentElementType: 'POWER SUPPLY' },
            { name: 'SAFETY SYSTEM', equipmentElementType: 'POWER SUPPLY' },
            //CHASSIS
            { name: 'SHUTDOWN', equipmentElementType: 'CHASSIS' },
            { name: 'INDICATING', equipmentElementType: 'CHASSIS' },
            { name: 'CALCULATION', equipmentElementType: 'CHASSIS' },
            { name: 'SAFETY SYSTEM', equipmentElementType: 'CHASSIS' },
            //PROCESSOR CARD
            { name: 'CONTROL', equipmentElementType: 'PROCESSOR CARD' },
            // ETHERNET CARD
            { name: 'SHUTDOWN', equipmentElementType: 'ETHERNET CARD' },
            { name: 'INDICATING', equipmentElementType: 'ETHERNET CARD' },
            { name: 'CALCULATION', equipmentElementType: 'ETHERNET CARD' },
            { name: 'SAFETY SYSTEM', equipmentElementType: 'ETHERNET CARD' },
            // DIGITAL INPUT CARD
            { name: 'SHUTDOWN', equipmentElementType: 'DIGITAL INPUT CARD' },
            { name: 'INDICATING', equipmentElementType: 'DIGITAL INPUT CARD' },
            { name: 'CALCULATION', equipmentElementType: 'DIGITAL INPUT CARD' },
            { name: 'SAFETY SYSTEM', equipmentElementType: 'DIGITAL INPUT CARD' },
            //DIGITAL OUTPUT CARD
            { name: 'SHUTDOWN', equipmentElementType: 'DIGITAL OUTPUT CARD' },
            { name: 'INDICATING', equipmentElementType: 'DIGITAL OUTPUT CARD' },
            { name: 'CALCULATION', equipmentElementType: 'DIGITAL OUTPUT CARD' },
            { name: 'SAFETY SYSTEM', equipmentElementType: 'DIGITAL OUTPUT CARD' },
            //ANALOG INPUT CARD
            { name: 'SHUTDOWN', equipmentElementType: 'ANALOG INPUT CARD' },
            { name: 'INDICATING', equipmentElementType: 'ANALOG INPUT CARD' },
            { name: 'CALCULATION', equipmentElementType: 'ANALOG INPUT CARD' },
            { name: 'SAFETY SYSTEM', equipmentElementType: 'ANALOG INPUT CARD' },
            //ANALOG OUTPUT CARD
            { name: 'SHUTDOWN', equipmentElementType: 'ANALOG OUTPUT CARD' },
            { name: 'INDICATING', equipmentElementType: 'ANALOG OUTPUT CARD' },
            { name: 'CALCULATION', equipmentElementType: 'ANALOG OUTPUT CARD' },
            { name: 'SAFETY SYSTEM', equipmentElementType: 'ANALOG OUTPUT CARD' },
            //SPARE CARD SLOT
            { name: 'SHUTDOWN', equipmentElementType: 'SPARE CARD SLOT' },
            { name: 'INDICATING', equipmentElementType: 'SPARE CARD SLOT' },
            { name: 'CALCULATION', equipmentElementType: 'SPARE CARD SLOT' },
            { name: 'SAFETY SYSTEM', equipmentElementType: 'SPARE CARD SLOT' },
            //SPARE CARD SLOT 1
            { name: 'SHUTDOWN', equipmentElementType: 'SPARE CARD SLOT 1' },
            { name: 'INDICATING', equipmentElementType: 'SPARE CARD SLOT 1' },
            { name: 'CALCULATION', equipmentElementType: 'SPARE CARD SLOT 1' },
            { name: 'SAFETY SYSTEM', equipmentElementType: 'SPARE CARD SLOT 1' },
            //SPARE CARD SLOT 2
            { name: 'SHUTDOWN', equipmentElementType: 'SPARE CARD SLOT 2' },
            { name: 'INDICATING', equipmentElementType: 'SPARE CARD SLOT 2' },
            { name: 'CALCULATION', equipmentElementType: 'SPARE CARD SLOT 2' },
            { name: 'SAFETY SYSTEM', equipmentElementType: 'SPARE CARD SLOT 2' },
            //SPARE CARD SLOT 3
            { name: 'SHUTDOWN', equipmentElementType: 'SPARE CARD SLOT 3' },
            { name: 'INDICATING', equipmentElementType: 'SPARE CARD SLOT 3' },
            { name: 'CALCULATION', equipmentElementType: 'SPARE CARD SLOT 3' },
            { name: 'SAFETY SYSTEM', equipmentElementType: 'SPARE CARD SLOT 3' },
        ]
    },
    selectedControllerFunction: {
        type: Object,
        'default': {
            name: '',
            equipmentElementType: ''
        }
    },
    controllerManufacturer: {
        type: Array,
        'default': [
            //EMPTY
            { name: '', equipmentElementType: '' },
            //POWER SUPPLY
            { name: '', equipmentElementType: 'POWER SUPPLY' },
            //CHASSIS
            { name: '', equipmentElementType: 'CHASSIS' },
            //PROCESSOR CARD
            { name: 'ALLEN BRADLEY', equipmentElementType: 'PROCESSOR CARD' },
            // ETHERNET CARD
            { name: '', equipmentElementType: 'ETHERNET CARD' },
            // DIGITAL INPUT CARD
            { name: '', equipmentElementType: 'DIGITAL INPUT CARD' },
            //DIGITAL OUTPUT CARD
            { name: '', equipmentElementType: 'DIGITAL OUTPUT CARD' },
            //ANALOG INPUT CARD
            { name: '', equipmentElementType: 'ANALOG INPUT CARD' },
            //ANALOG OUTPUT CARD
            { name: '', equipmentElementType: 'ANALOG OUTPUT CARD' },
            //SPARE CARD SLOT
            { name: '', equipmentElementType: 'SPARE CARD SLOT' },
            //SPARE CARD SLOT 1
            { name: '', equipmentElementType: 'SPARE CARD SLOT 1' },
            //SPARE CARD SLOT 2
            { name: '', equipmentElementType: 'SPARE CARD SLOT 2' },
            //SPARE CARD SLOT 2
            { name: '', equipmentElementType: 'SPARE CARD SLOT 3' },
        ]
    },
    selectedControllerManufacturer: {
        type: Object,
        'default': {
            name: '',
            equipmentElementType: ''
        }
    },
    сontrollerSeries: {
        type: Array,
        'default': [
            //EMPTY
            { name: 'AB Compact Logix', equipmentElementType: '' },
            { name: 'AB Micro Logic', equipmentElementType: '' },
            { name: 'AB SLC-500', equipmentElementType: '' },
            //POWER SUPPLY
            { name: 'AB Compact Logix', equipmentElementType: 'POWER SUPPLY' },
            { name: 'AB Micro Logic', equipmentElementType: 'POWER SUPPLY' },
            { name: 'AB SLC-500', equipmentElementType: 'POWER SUPPLY' },
            //CHASSIS
            { name: 'AB Compact Logix', equipmentElementType: 'CHASSIS' },
            { name: 'AB Micro Logic', equipmentElementType: 'CHASSIS' },
            { name: 'AB SLC-500', equipmentElementType: 'CHASSIS' },
            //PROCESSOR CARD
            { name: 'AB Control Logix', equipmentElementType: 'PROCESSOR CARD' },
            //ETHERNET CARD
            { name: 'AB Compact Logix', equipmentElementType: 'ETHERNET CARD' },
            { name: 'AB Micro Logic', equipmentElementType: 'ETHERNET CARD' },
            { name: 'AB SLC-500', equipmentElementType: 'ETHERNET CARD' },
            //DIGITAL INPUT CARD
            { name: 'AB Compact Logix', equipmentElementType: 'DIGITAL INPUT CARD' },
            { name: 'AB Micro Logic', equipmentElementType: 'DIGITAL INPUT CARD' },
            { name: 'AB SLC-500', equipmentElementType: 'DIGITAL INPUT CARD' },
            //DIGITAL OUTPUT CARD
            { name: 'AB Compact Logix', equipmentElementType: 'DIGITAL OUTPUT CARD' },
            { name: 'AB Micro Logic', equipmentElementType: 'DIGITAL OUTPUT CARD' },
            { name: 'AB SLC-500', equipmentElementType: 'DIGITAL OUTPUT CARD' },
            //ANALOG INPUT CARD
            { name: 'AB Compact Logix', equipmentElementType: 'ANALOG INPUT CARD' },
            { name: 'AB Micro Logic', equipmentElementType: 'ANALOG INPUT CARD' },
            { name: 'AB SLC-500', equipmentElementType: 'ANALOG INPUT CARD' },
            //ANALOG OUTPUT CARD
            { name: 'AB Compact Logix', equipmentElementType: 'ANALOG OUTPUT CARD' },
            { name: 'AB Micro Logic', equipmentElementType: 'ANALOG OUTPUT CARD' },
            { name: 'AB SLC-500', equipmentElementType: 'ANALOG OUTPUT CARD' },
            //SPARE CARD SLOT
            { name: 'AB Compact Logix', equipmentElementType: 'SPARE CARD SLOT' },
            { name: 'AB Micro Logic', equipmentElementType: 'SPARE CARD SLOT' },
            { name: 'AB SLC-500', equipmentElementType: 'SPARE CARD SLOT' },
            //SPARE CARD SLOT 1
            { name: 'AB Compact Logix', equipmentElementType: 'SPARE CARD SLOT 1' },
            { name: 'AB Micro Logic', equipmentElementType: 'SPARE CARD SLOT 1' },
            { name: 'AB SLC-500', equipmentElementType: 'SPARE CARD SLOT 1' },
            //SPARE CARD SLOT 2
            { name: 'AB Compact Logix', equipmentElementType: 'SPARE CARD SLOT 2' },
            { name: 'AB Micro Logic', equipmentElementType: 'SPARE CARD SLOT 2' },
            { name: 'AB SLC-500', equipmentElementType: 'SPARE CARD SLOT 2' },
            //SPARE CARD SLOT 3
            { name: 'AB Compact Logix', equipmentElementType: 'SPARE CARD SLOT 3' },
            { name: 'AB Micro Logic', equipmentElementType: 'SPARE CARD SLOT 3' },
            { name: 'AB SLC-500', equipmentElementType: 'SPARE CARD SLOT 3' }
        ]
    },
    selectedControllerSeries: {
        type: Object,
        'default': {
            name: '',
            equipmentElementType: ''
        }
    },
    сloneEquipmentType: {
        type: Object,
        'default': [
            //EMPTY
            { name: '', equipmentElementType: '' },
            //POWER SUPPLY
            { name: '', equipmentElementType: 'POWER SUPPLY' },
            //CHASSIS
            { name: '', equipmentElementType: 'CHASSIS' },
            //PROCESSOR CARD
            { name: '', equipmentElementType: 'PROCESSOR CARD' },
            //ETHERNET CARD
            { name: '', equipmentElementType: 'ETHERNET CARD' },
            //DIGITAL INPUT CARD
            { name: 'PRESSURE SWITCH', equipmentElementType: 'DIGITAL INPUT CARD' },
            { name: 'TEMPERATURE SWITCH', equipmentElementType: 'DIGITAL INPUT CARD' },
            { name: 'FLOW SWITCH', equipmentElementType: 'DIGITAL INPUT CARD' },
            { name: 'POSITION SWITCH CLOSED', equipmentElementType: 'DIGITAL INPUT CARD' },
            { name: 'POSITION SWITCH OPEN', equipmentElementType: 'DIGITAL INPUT CARD' },
            { name: 'MOTOR RUN STATUS', equipmentElementType: 'DIGITAL INPUT CARD' },
            //DIGITAL OUTPUT CARD
            { name: 'INTERPROSING RELAY', equipmentElementType: 'DIGITAL OUTPUT CARD' },
            { name: 'INTERPROSING RELAY 1', equipmentElementType: 'DIGITAL OUTPUT CARD' },
            { name: 'INTERPROSING RELAY 2', equipmentElementType: 'DIGITAL OUTPUT CARD' },
            { name: 'INTERPROSING RELAY 3', equipmentElementType: 'DIGITAL OUTPUT CARD' },
            { name: 'INTERPROSING RELAY 4', equipmentElementType: 'DIGITAL OUTPUT CARD' },
            { name: 'INTERPROSING RELAY 5', equipmentElementType: 'DIGITAL OUTPUT CARD' },
            { name: 'INTERPROSING RELAY 6', equipmentElementType: 'DIGITAL OUTPUT CARD' },
            { name: 'INTERPROSING RELAY 7', equipmentElementType: 'DIGITAL OUTPUT CARD' },
            //ANALOG INPUT CARD
            { name: 'INLET PRESSURE TRANSMITTER', equipmentElementType: 'ANALOG INPUT CARD' },
            { name: 'INLET TEMPERATURE TRANSMITTER', equipmentElementType: 'ANALOG INPUT CARD' },
            { name: 'FLOW TRANSMITTER', equipmentElementType: 'ANALOG INPUT CARD' },
            //ANALOG OUTPUT CARD
            { name: 'CONTROL VALVE POSITION', equipmentElementType: 'ANALOG OUTPUT CARD' },
            //SPARE CARD SLOT
            { name: '', equipmentElementType: 'SPARE CARD SLOT' },
            //SPARE CARD SLOT 1
            { name: '', equipmentElementType: 'SPARE CARD SLOT 1' },
            //SPARE CARD SLOT 2
            { name: '', equipmentElementType: 'SPARE CARD SLOT 2' },
            //SPARE CARD SLOT 3
            { name: '', equipmentElementType: 'SPARE CARD SLOT 3' }
        ]
    },
    selectedCloneEquipmentType: {
        type: Object,
        'default': {
            name: '',
            equipmentElementType: ''
        }
    },
    equipmentModel: {
        type: Object,
        'default': [
            //EMPTY
            { name: '', equipmentElementType: '' },
            //POWER SUPPLY
            { name: '1756-PA72', equipmentElementType: 'POWER SUPPLY' },
            { name: '1756-PA75', equipmentElementType: 'POWER SUPPLY' },
            { name: '1756-PB72', equipmentElementType: 'POWER SUPPLY' },
            { name: '1756-PB75', equipmentElementType: 'POWER SUPPLY' },
            //CHASSIS
            { name: '1756-A4', equipmentElementType: 'CHASSIS' },
            { name: '1756-A7', equipmentElementType: 'CHASSIS' },
            { name: '1756-A10', equipmentElementType: 'CHASSIS' },
            { name: '1756-A13', equipmentElementType: 'CHASSIS' },
            { name: '1756-A17', equipmentElementType: 'CHASSIS' },
            //PROCESSOR CARD
            { name: '1756-L61', equipmentElementType: 'PROCESSOR CARD' },
            { name: '1756-L62', equipmentElementType: 'PROCESSOR CARD' },
            { name: '1756-L63', equipmentElementType: 'PROCESSOR CARD' },
            { name: '1756-L64', equipmentElementType: 'PROCESSOR CARD' },
            { name: '1756-L65', equipmentElementType: 'PROCESSOR CARD' },
            //ETHERNET CARD
            { name: '1756-ENBT', equipmentElementType: 'ETHERNET CARD' },
            //DIGITAL INPUT CARD
            { name: '1756-IB16', equipmentElementType: 'DIGITAL INPUT CARD' },
            { name: '1756-IB32', equipmentElementType: 'DIGITAL INPUT CARD' },
            //DIGITAL OUTPUT CARD
            { name: '1756-OB16', equipmentElementType: 'DIGITAL OUTPUT CARD' },
            { name: '1756-OB32', equipmentElementType: 'DIGITAL OUTPUT CARD' },
            //ANALOG INPUT CARD
            { name: '1756-IF16', equipmentElementType: 'ANALOG INPUT CARD' },
            { name: '1756-IF16H', equipmentElementType: 'ANALOG INPUT CARD' },
            //ANALOG OUTPUT CARD
            { name: '1756-OF8', equipmentElementType: 'ANALOG OUTPUT CARD' },
            //SPARE CARD SLOT
            { name: '1756-N2', equipmentElementType: 'SPARE CARD SLOT' },
            //SPARE CARD SLOT 1
            { name: '1756-N2', equipmentElementType: 'SPARE CARD SLOT 1' },
            //SPARE CARD SLOT 2
            { name: '1756-N2', equipmentElementType: 'SPARE CARD SLOT 2' },
            //SPARE CARD SLOT 3
            { name: '1756-N2', equipmentElementType: 'SPARE CARD SLOT 3' }
        ]
    },
    //equipmentModel: Array,
    selectedEquipmentModel: {
        type: Object,
        'default': {
            name: '',
            equipmentElementType: ''
        }
    },
    node: String,
    chassis: String,
    slot: String,
    data: String,
    ipAdress: {
        type: Object,
        'default': [
            //EMPTY
            { name: '', equipmentElementType: '' },
            //POWER SUPPLY
            { name: '', equipmentElementType: 'POWER SUPPLY' },
            //CHASSIS
            { name: '', equipmentElementType: 'CHASSIS' },
            //PROCESSOR CARD
            { name: '', equipmentElementType: 'PROCESSOR CARD' },
            //ETHERNET CARD
            { name: '70.50.152.01', equipmentElementType: 'ETHERNET CARD' },
            //DIGITAL INPUT CARD
            { name: '', equipmentElementType: 'DIGITAL INPUT CARD' },
            //DIGITAL OUTPUT CARD
            { name: '', equipmentElementType: 'DIGITAL OUTPUT CARD' },
            //ANALOG INPUT CARD
            { name: '', equipmentElementType: 'ANALOG INPUT CARD' },
            //ANALOG OUTPUT CARD
            { name: '', equipmentElementType: 'ANALOG OUTPUT CARD' },
            //SPARE CARD SLOT
            { name: '', equipmentElementType: 'SPARE CARD SLOT' },
            //SPARE CARD SLOT 1
            { name: '', equipmentElementType: 'SPARE CARD SLOT 1' },
            //SPARE CARD SLOT 2
            { name: '', equipmentElementType: 'SPARE CARD SLOT 2' },
            //SPARE CARD SLOT 3
            { name: '', equipmentElementType: 'SPARE CARD SLOT 3' },
        ]
    },
    selectedIPAdress: {
        type: Object,
        'default': {
            name: '',
            equipmentElementType: ''
        }
    },
    ioPerCard: {
        type: Object,
        'default': [
            //EMPTY && EMPTY
            { name: '', equipmentElementType: '', equipmentModel: '' },
            //POWER SUPPLY' && EMPTY || OTHER VALUE
            { name: '', equipmentElementType: 'POWER SUPPLY', equipmentModel: '' },
            { name: '', equipmentElementType: 'POWER SUPPLY', equipmentModel: '1756-PA72' },
            { name: '', equipmentElementType: 'POWER SUPPLY', equipmentModel: '1756-PA75' },
            { name: '', equipmentElementType: 'POWER SUPPLY', equipmentModel: '1756-PB72' },
            { name: '', equipmentElementType: 'POWER SUPPLY', equipmentModel: '1756-PB75' },
            //CHASSIS || OTHER VALUE Equipment Model
            { name: '', equipmentElementType: 'CHASSIS', equipmentModel: '1756-A4' },
            { name: '', equipmentElementType: 'CHASSIS', equipmentModel: '1756-A7' },
            { name: '', equipmentElementType: 'CHASSIS', equipmentModel: '1756-A10' },
            { name: '', equipmentElementType: 'CHASSIS', equipmentModel: '1756-A13' },
            { name: '', equipmentElementType: 'CHASSIS', equipmentModel: '1756-A17' },
            //PROCESSOR CARD || OTHER VALUE Equipment Model
            { name: '', equipmentElementType: 'PROCESSOR CARD', equipmentModel: '1756-L61' },
            { name: '', equipmentElementType: 'PROCESSOR CARD', equipmentModel: '1756-L62' },
            { name: '', equipmentElementType: 'PROCESSOR CARD', equipmentModel: '1756-L63' },
            { name: '', equipmentElementType: 'PROCESSOR CARD', equipmentModel: '1756-L64' },
            { name: '', equipmentElementType: 'PROCESSOR CARD', equipmentModel: '1756-L65' },
            //ETHERNET CARD
            { name: '', equipmentElementType: 'ETHERNET CARD', equipmentModel: '1756-ENBT' },
            //DIGITAL INPUT CARD
            { name: '16', equipmentElementType: 'DIGITAL INPUT CARD', equipmentModel: '1756-IB16' },
            { name: '32', equipmentElementType: 'DIGITAL INPUT CARD', equipmentModel: '1756-IB32' },
            //DIGITAL OUTPUT CARD
            { name: '16', equipmentElementType: 'DIGITAL OUTPUT CARD', equipmentModel: '1756-OB16' },
            { name: '32', equipmentElementType: 'DIGITAL OUTPUT CARD', equipmentModel: '1756-OB32' },
            //ANALOG INPUT CARD
            { name: '16', equipmentElementType: 'ANALOG INPUT CARD', equipmentModel: '1756-IF16' },
            { name: '16', equipmentElementType: 'ANALOG INPUT CARD', equipmentModel: '1756-IF16H' },
            //ANALOG OUTPUT CARD
            { name: '8', equipmentElementType: 'ANALOG OUTPUT CARD', equipmentModel: '1756-OF8' },
            //SPARE CARD SLOT
            { name: '', equipmentElementType: 'SPARE CARD SLOT', equipmentModel: '1756-N2' },
            //SPARE CARD SLOT 1
            { name: '', equipmentElementType: 'SPARE CARD SLOT 1', equipmentModel: '1756-N2' },
            //SPARE CARD SLOT 2
            { name: '', equipmentElementType: 'SPARE CARD SLOT 2', equipmentModel: '1756-N2' },
            //SPARE CARD SLOT 3
            { name: '', equipmentElementType: 'SPARE CARD SLOT 3', equipmentModel: '1756-N2' }
        ]
    },
    selectedIOPerCard: {
        type: Object,
        'default': {
            name: '',
            equipmentElementType: '',
            equipmentModel: ''
        }
    },
    relayQuantity: String,
    dcPower: String,
    esdPower: String,
    // I/O Info
    ioTag: {
        type: Object,
        'default': [
            //POWER SUPPLY
            { name: 'N/A', equipmentElementType: 'POWER SUPPLY', cloneEquipmentTag: "" },
            //CHASSIS
            { name: 'N/A', equipmentElementType: 'CHASSIS', cloneEquipmentTag: "" },
            //PROCESSOR CARD
            { name: 'N/A', equipmentElementType: 'PROCESSOR CARD', cloneEquipmentTag: "" },
            //ETHERNET CARD
            { name: 'N/A', equipmentElementType: 'ETHERNET CARD', cloneEquipmentTag: "" },
            // DIGITAL INPUT CARD
            { name: '', equipmentElementType: 'DIGITAL INPUT CARD', cloneEquipmentTag: "" },
            // DIGITAL INPUT CARD && PRESSURE SWITCH
            { name: '', equipmentElementType: 'DIGITAL INPUT CARD', cloneEquipmentTag: "PRESSURE SWITCH" },
            { name: 'PSHH-100', equipmentElementType: 'DIGITAL INPUT CARD', cloneEquipmentTag: "PRESSURE SWITCH" },
            // DIGITAL INPUT CARD && TEMPERATURE SWITCH
            { name: '', equipmentElementType: 'DIGITAL INPUT CARD', cloneEquipmentTag: "TEMPERATURE SWITCH" },
            { name: 'TSHH-100', equipmentElementType: 'DIGITAL INPUT CARD', cloneEquipmentTag: "TEMPERATURE SWITCH" },
            // DIGITAL INPUT CARD && FLOW SWITCH
            { name: '', equipmentElementType: 'DIGITAL INPUT CARD', cloneEquipmentTag: "FLOW SWITCH" },
            { name: 'FSHH-100', equipmentElementType: 'DIGITAL INPUT CARD', cloneEquipmentTag: "FLOW SWITCH" },
            // DIGITAL INPUT CARD && POSITION SWITCH CLOSED
            { name: '', equipmentElementType: 'DIGITAL INPUT CARD', cloneEquipmentTag: "POSITION SWITCH CLOSED" },
            { name: 'ZCS-100', equipmentElementType: 'DIGITAL INPUT CARD', cloneEquipmentTag: "POSITION SWITCH CLOSED" },
            // DIGITAL INPUT CARD && POSITION SWITCH OPEN
            { name: '', equipmentElementType: 'DIGITAL INPUT CARD', cloneEquipmentTag: "POSITION SWITCH OPEN" },
            { name: 'ZCO-100', equipmentElementType: 'DIGITAL INPUT CARD', cloneEquipmentTag: "POSITION SWITCH OPEN" },
            // DIGITAL INPUT CARD && MOTOR RUN STATUS
            { name: '', equipmentElementType: 'DIGITAL INPUT CARD', cloneEquipmentTag: "MOTOR RUN STATUS" },
            { name: 'XS-100', equipmentElementType: 'DIGITAL INPUT CARD', cloneEquipmentTag: "MOTOR RUN STATUS" },
            // DIGITAL OUTPUT CARD
            { name: '', equipmentElementType: 'DIGITAL OUTPUT CARD', cloneEquipmentTag: "" },
            { name: 'N/A', equipmentElementType: 'DIGITAL OUTPUT CARD', cloneEquipmentTag: "" },
            // DIGITAL OUTPUT CARD && INTERPOSING RELAY
            { name: '', equipmentElementType: 'DIGITAL OUTPUT CARD', cloneEquipmentTag: "INTERPOSING RELAY" },
            { name: 'R-030', equipmentElementType: 'DIGITAL OUTPUT CARD', cloneEquipmentTag: "INTERPOSING RELAY" },
            // DIGITAL OUTPUT CARD && INTERPOSING RELAY 1
            { name: '', equipmentElementType: 'DIGITAL OUTPUT CARD', cloneEquipmentTag: "INTERPOSING RELAY 1" },
            { name: 'R-031', equipmentElementType: 'DIGITAL OUTPUT CARD', cloneEquipmentTag: "INTERPOSING RELAY 1" },
            // DIGITAL OUTPUT CARD && INTERPOSING RELAY 2
            { name: '', equipmentElementType: 'DIGITAL OUTPUT CARD', cloneEquipmentTag: "INTERPOSING RELAY 2" },
            { name: 'R-032', equipmentElementType: 'DIGITAL OUTPUT CARD', cloneEquipmentTag: "INTERPOSING RELAY 2" },
            // DIGITAL OUTPUT CARD && INTERPOSING RELAY 3
            { name: '', equipmentElementType: 'DIGITAL OUTPUT CARD', cloneEquipmentTag: "INTERPOSING RELAY 3" },
            { name: 'R-033', equipmentElementType: 'DIGITAL OUTPUT CARD', cloneEquipmentTag: "INTERPOSING RELAY 3" },
            // DIGITAL OUTPUT CARD && INTERPOSING RELAY 4
            { name: '', equipmentElementType: 'DIGITAL OUTPUT CARD', cloneEquipmentTag: "INTERPOSING RELAY 4" },
            { name: 'R-034', equipmentElementType: 'DIGITAL OUTPUT CARD', cloneEquipmentTag: "INTERPOSING RELAY 4" },
            // DIGITAL OUTPUT CARD && INTERPOSING RELAY 5
            { name: '', equipmentElementType: 'DIGITAL OUTPUT CARD', cloneEquipmentTag: "INTERPOSING RELAY 5" },
            { name: 'R-035', equipmentElementType: 'DIGITAL OUTPUT CARD', cloneEquipmentTag: "INTERPOSING RELAY 5" },
            // DIGITAL OUTPUT CARD && INTERPOSING RELAY 6
            { name: '', equipmentElementType: 'DIGITAL OUTPUT CARD', cloneEquipmentTag: "INTERPOSING RELAY 6" },
            { name: 'R-036', equipmentElementType: 'DIGITAL OUTPUT CARD', cloneEquipmentTag: "INTERPOSING RELAY 6" },
            // DIGITAL OUTPUT CARD && INTERPOSING RELAY 7
            { name: '', equipmentElementType: 'DIGITAL OUTPUT CARD', cloneEquipmentTag: "INTERPOSING RELAY 7" },
            { name: 'R-037', equipmentElementType: 'DIGITAL OUTPUT CARD', cloneEquipmentTag: "INTERPOSING RELAY 7" },
            //ANALOG INPUT CARD
            { name: '', equipmentElementType: 'ANALOG INPUT CARD', cloneEquipmentTag: "" },
            { name: 'PIT-100', equipmentElementType: 'ANALOG INPUT CARD', cloneEquipmentTag: "" },
            //ANALOG INPUT CARD && INLET PRESSURE TRANSMITTER
            { name: '', equipmentElementType: 'ANALOG INPUT CARD', cloneEquipmentTag: "INLET PRESSURE TRANSMITTER" },
            { name: 'PIT-100', equipmentElementType: 'ANALOG INPUT CARD', cloneEquipmentTag: "INLET PRESSURE TRANSMITTER" },
            //ANALOG INPUT CARD && INLET TEMPERATURE TRANSMITTER
            { name: '', equipmentElementType: 'ANALOG INPUT CARD', cloneEquipmentTag: "INLET TEMPERATURE TRANSMITTER" },
            { name: 'TIT-100', equipmentElementType: 'ANALOG INPUT CARD', cloneEquipmentTag: "INLET TEMPERATURE TRANSMITTER" },
            //ANALOG INPUT CARD && FLOW TRANSMITTER
            { name: '', equipmentElementType: 'ANALOG INPUT CARD', cloneEquipmentTag: "FLOW TRANSMITTER" },
            { name: 'FIT-100', equipmentElementType: 'ANALOG INPUT CARD', cloneEquipmentTag: "FLOW TRANSMITTER" },
            //ANALOG OUTPUT CARD
            { name: '', equipmentElementType: 'ANALOG OUTPUT CARD', cloneEquipmentTag: "" },
            //ANALOG OUTPUT CARD && CONTROL VALVE POSITION
            { name: 'PY-100', equipmentElementType: 'ANALOG OUTPUT CARD', cloneEquipmentTag: "CONTROL VALVE POSITION" },
            //SPARE CARD SLOT
            { name: '', equipmentElementType: 'SPARE CARD SLOT', cloneEquipmentTag: "" },
            { name: 'N/A', equipmentElementType: 'SPARE CARD SLOT', cloneEquipmentTag: "" },
            //SPARE CARD SLOT 1
            { name: '', equipmentElementType: 'SPARE CARD SLOT 1', cloneEquipmentTag: "" },
            { name: 'N/A', equipmentElementType: 'SPARE CARD SLOT 1', cloneEquipmentTag: "" },
            //SPARE CARD SLOT 2
            { name: '', equipmentElementType: 'SPARE CARD SLOT 2', cloneEquipmentTag: "" },
            { name: 'N/A', equipmentElementType: 'SPARE CARD SLOT 2', cloneEquipmentTag: "" },
            //SPARE CARD SLOT 2
            { name: '', equipmentElementType: 'SPARE CARD SLOT 3', cloneEquipmentTag: "" },
            { name: 'N/A', equipmentElementType: 'SPARE CARD SLOT 3', cloneEquipmentTag: "" },
        ]
    },
    selectedIOTag: {
        type: Object,
        'default': { name: '', equipmentElementType: '', cloneEquipmentTag: "" }
    },
    ioType: {
        type: Object,
        'default': [
            //POWER SUPPLY
            { name: 'N/A', equipmentElementType: 'POWER SUPPLY' },
            //CHASSIS
            { name: 'N/A', equipmentElementType: 'CHASSIS' },
            //PROCESSOR CARD
            { name: 'N/A', equipmentElementType: 'PROCESSOR CARD' },
            //ETHERNET CARD
            { name: 'N/A', equipmentElementType: 'ETHERNET CARD' },
            // DIGITAL INPUT CARD
            { name: 'DIGITAL INPUT', equipmentElementType: 'DIGITAL INPUT CARD' },
            // DIGITAL OUTPUT CARD
            { name: 'DIGITAL OUTPUT', equipmentElementType: 'DIGITAL OUTPUT CARD' },
            //ANALOG INPUT CARD
            { name: 'ANALOG INPUT', equipmentElementType: 'ANALOG INPUT CARD' },
            //ANALOG OUTPUT CARD
            { name: 'ANALOG OUTPUT', equipmentElementType: 'ANALOG OUTPUT CARD' },
            //SPACE CARD SLOT
            { name: 'N/A', equipmentElementType: 'SPACE CARD SLOT' },
            //SPACE CARD SLOT 1
            { name: 'N/A', equipmentElementType: 'SPACE CARD SLOT 1' },
            //SPACE CARD SLOT 2
            { name: 'N/A', equipmentElementType: 'SPACE CARD SLOT 2' },
            //SPACE CARD SLOT 3
            { name: 'N/A', equipmentElementType: 'SPACE CARD SLOT 3' },
        ]
    },
    selectedIOType: {
        type: Object,
        'default': { name: '', equipmentElementType: '' }
    },
    //rellayIOTag: Array,
    //selectedRelayIOTag: String,
    //relayIOType: Array,
    //selectedRelayIOType: String,
    ioDescription: {
        type: Array,
        'default': [
            // EMPTY && EMPTY
            { name: '', equipmentElementType: '', cloneEquipmentTag: "" },
            { name: 'PRESSURE SWITCH HIHI', equipmentElementType: '', cloneEquipmentTag: "" },
            // POWER SUPPLY && EMPTY
            { name: 'N/A', equipmentElementType: 'POWER SUPPLY', cloneEquipmentTag: "" },
            // CHASSIS && EMPTY
            { name: 'N/A', equipmentElementType: 'CHASSIS', cloneEquipmentTag: "" },
            // PROCESSOR CARD && EMPTY
            { name: 'N/A', equipmentElementType: 'PROCESSOR CARD', cloneEquipmentTag: "" },
            // ETHERNET CARD && EMPTY
            { name: 'N/A', equipmentElementType: 'ETHERNET CARD', cloneEquipmentTag: "" },
            // DIGITAL INPUT CARD
            // DIGITAL INPUT CARD && EMPTY
            { name: 'N/A', equipmentElementType: 'DIGITAL INPUT CARD', cloneEquipmentTag: "" },
            // DIGITAL INPUT CARD && PRESSURE SWITCH
            { name: 'INLET PRESSURE HIHI', equipmentElementType: 'DIGITAL INPUT CARD', cloneEquipmentTag: "PRESSURE SWITCH" },
            // DIGITAL INPUT CARD && TEMPERATURE SWITCH
            { name: 'INLET TEMPERATURE HIHI', equipmentElementType: 'DIGITAL INPUT CARD', cloneEquipmentTag: "TEMPERATURE SWITCH" },
            // DIGITAL INPUT CARD && FLOW SWITCH
            { name: 'INLET FLOW HIHI', equipmentElementType: 'DIGITAL INPUT CARD', cloneEquipmentTag: "FLOW SWITCH" },
            // DIGITAL INPUT CARD && POSITION SWITCH CLOSED
            { name: 'ESDV-100 POSITION SWITCH CLOSED', equipmentElementType: 'DIGITAL INPUT CARD', cloneEquipmentTag: "POSITION SWITCH CLOSED" },
            // DIGITAL INPUT CARD && POSITION SWITCH OPEN
            { name: 'ESDV-100 POSITION SWITCH OPEN', equipmentElementType: 'DIGITAL INPUT CARD', cloneEquipmentTag: "POSITION SWITCH OPEN" },
            // DIGITAL INPUT CARD && MOTOR RUN STATUS
            { name: 'M-100 RUN STATUS', equipmentElementType: 'DIGITAL INPUT CARD', cloneEquipmentTag: "MOTOR RUN STATUS" },
            // DIGITAL OUTPUT CARD 
            //TODO ЗАВИСИМОСТИ К RELAY I/O TAG - RELAY I/O TYPE - RELAY I/O DESCRIPTION
            // DIGITAL OUTPUT CARD && EMPTY
            { name: 'N.O.CONTACT', equipmentElementType: 'DIGITAL OUTPUT CARD', cloneEquipmentTag: "" },
            // DIGITAL OUTPUT CARD && INTERPOSING RELAY
            { name: 'N.O.CONTACT', equipmentElementType: 'DIGITAL OUTPUT CARD', cloneEquipmentTag: "INTERPOSING RELAY" },
            // DIGITAL OUTPUT CARD && INTERPOSING RELAY 1
            { name: 'N.O.CONTACT', equipmentElementType: 'DIGITAL OUTPUT CARD', cloneEquipmentTag: "INTERPOSING RELAY 1" },
            // DIGITAL OUTPUT CARD && INTERPOSING RELAY 2
            { name: 'N.O.CONTACT', equipmentElementType: 'DIGITAL OUTPUT CARD', cloneEquipmentTag: "INTERPOSING RELAY 2" },
            // DIGITAL OUTPUT CARD && INTERPOSING RELAY 3
            { name: 'N.O.CONTACT', equipmentElementType: 'DIGITAL OUTPUT CARD', cloneEquipmentTag: "INTERPOSING RELAY 3" },
            // DIGITAL OUTPUT CARD && INTERPOSING RELAY 4
            { name: 'N.O.CONTACT', equipmentElementType: 'DIGITAL OUTPUT CARD', cloneEquipmentTag: "INTERPOSING RELAY 4" },
            // DIGITAL OUTPUT CARD && INTERPOSING RELAY 5
            { name: 'N.O.CONTACT', equipmentElementType: 'DIGITAL OUTPUT CARD', cloneEquipmentTag: "INTERPOSING RELAY 5" },
            // DIGITAL OUTPUT CARD && INTERPOSING RELAY 6
            { name: 'N.O.CONTACT', equipmentElementType: 'DIGITAL OUTPUT CARD', cloneEquipmentTag: "INTERPOSING RELAY 6" },
            // DIGITAL OUTPUT CARD && INTERPOSING RELAY 7
            { name: 'N.O.CONTACT', equipmentElementType: 'DIGITAL OUTPUT CARD', cloneEquipmentTag: "INTERPOSING RELAY 7" },
            // ANALOG INPUT CARD
            // ANALOG INPUT CARD && EMPTY
            { name: 'N/A', equipmentElementType: 'ANALOG INPUT CARD', cloneEquipmentTag: "" },
            // ANALOG INPUT CARD && INLET PRESSURE TRANSMITTER
            { name: 'INLET PRESSURE HIHI', equipmentElementType: 'ANALOG INPUT CARD', cloneEquipmentTag: "INLET PRESSURE TRANSMITTER" },
            // ANALOG INPUT CARD && INLET TEMPERATURE TRANSMITTER
            { name: 'INLET TEMPERATURE HIHIS', equipmentElementType: 'ANALOG INPUT CARD', cloneEquipmentTag: "INLET TEMPERATURE TRANSMITTER" },
            // ANALOG INPUT CARD && FLOW TRANSMITTER
            { name: 'INLET FLOW HIHI', equipmentElementType: 'ANALOG INPUT CARD', cloneEquipmentTag: "FLOW TRANSMITTER" },
            // ANALOG OUTPUT CARD
            // ANALOG OUTPUT CARD && EMPTY
            { name: 'PRESSURE CONTROL VALVE', equipmentElementType: 'ANALOG OUTPUT CARD', cloneEquipmentTag: "" },
            // ANALOG OUTPUT CARD && FLOW TRANSMITTER
            { name: 'PRESSURE CONTROL VALVE', equipmentElementType: 'ANALOG OUTPUT CARD', cloneEquipmentTag: "CONTROL VALVE POSITION" },
            //SPARE CARD SLOT && EMPTY
            { name: 'N/A', equipmentElementType: 'SPARE CARD SLOT', cloneEquipmentTag: "" },
            //SPARE CARD SLOT 1 && EMPTY
            { name: 'N/A', equipmentElementType: 'SPARE CARD SLOT 1', cloneEquipmentTag: "" },
            //SPARE CARD SLOT 2 && EMPTY
            { name: 'N/A', equipmentElementType: 'SPARE CARD SLOT 2', cloneEquipmentTag: "" },
            //SPARE CARD SLOT 3 && EMPTY
            { name: 'N/A', equipmentElementType: 'SPARE CARD SLOT 3', cloneEquipmentTag: "" },
        ]
    },
    selectedIODescription: {
        type: Object,
        'default': { name: '', equipmentElementType: '', cloneEquipmentTag: '' }
    },
    relayIODescription: { //Relay I/O Tag
        type: Array,
        'default': [
            //POWER SUPPLY && EMPTY
            { name: 'N/A', equipmentElementType: 'POWER SUPPLY', cloneEquipmentType: '' },
            //CHASSIS && EMPTY
            { name: 'N/A', equipmentElementType: 'CHASSIS', cloneEquipmentType: '' },
            //PROCESSOR CARD && EMPTY
            { name: 'N/A', equipmentElementType: 'PROCESSOR CARD', cloneEquipmentType: '' },
            //ETHERNET CARD && EMPTY
            { name: 'N/A', equipmentElementType: 'ETHERNET CARD', cloneEquipmentType: '' },
            //DIGITAL INPUT CARD
            //DIGITAL INPUT CARD && EMPTY
            { name: '', equipmentElementType: 'DIGITAL INPUT CARD', cloneEquipmentType: '' },
            //DIGITAL INPUT CARD && PRESSURE SWITCH
            { name: '', equipmentElementType: 'DIGITAL INPUT CARD', cloneEquipmentType: 'PRESSURE SWITCH' },
            //DIGITAL INPUT CARD && TEMPERATURE SWITCH
            { name: '', equipmentElementType: 'DIGITAL INPUT CARD', cloneEquipmentType: 'TEMPERATURE SWITCH' },
            //DIGITAL INPUT CARD && FLOW SWITCH
            { name: '', equipmentElementType: 'DIGITAL INPUT CARD', cloneEquipmentType: 'FLOW SWITCH' },
            //DIGITAL INPUT CARD && POSITION SWITCH CLOSED
            { name: '', equipmentElementType: 'DIGITAL INPUT CARD', cloneEquipmentType: 'POSITION SWITCH CLOSED' },
            //DIGITAL INPUT CARD && POSITION SWITCH OPEN
            { name: '', equipmentElementType: 'DIGITAL INPUT CARD', cloneEquipmentType: 'POSITION SWITCH OPEN' },
            //DIGITAL INPUT CARD && MOTOR RUN STATUS
            { name: '', equipmentElementType: 'DIGITAL INPUT CARD', cloneEquipmentType: 'MOTOR RUN STATUS' },
            //DIGITAL OUTPUT CARD
            //DIGITAL OUTPUT CARD && EMPTY
            { name: 'XY-100', equipmentElementType: 'DIGITAL OUTPUT CARD', cloneEquipmentType: '' },
            //DIGITAL OUTPUT CARD && INTERPROSING RELAY
            { name: 'XY-100', equipmentElementType: 'DIGITAL OUTPUT CARD', cloneEquipmentType: 'INTERPROSING RELAY' },
            //DIGITAL OUTPUT CARD && INTERPROSING RELAY 1
            { name: 'BDV-100', equipmentElementType: 'DIGITAL OUTPUT CARD', cloneEquipmentType: 'INTERPROSING RELAY 1' },
            //DIGITAL OUTPUT CARD && INTERPROSING RELAY 2
            { name: '', equipmentElementType: 'DIGITAL OUTPUT CARD', cloneEquipmentType: 'INTERPROSING RELAY 2' },
            //DIGITAL OUTPUT CARD && INTERPROSING RELAY 3
            { name: '', equipmentElementType: 'DIGITAL OUTPUT CARD', cloneEquipmentType: 'INTERPROSING RELAY 3' },
            //DIGITAL OUTPUT CARD && INTERPROSING RELAY 4
            { name: '', equipmentElementType: 'DIGITAL OUTPUT CARD', cloneEquipmentType: 'INTERPROSING RELAY 4' },
            //DIGITAL OUTPUT CARD && INTERPROSING RELAY 5
            { name: '', equipmentElementType: 'DIGITAL OUTPUT CARD', cloneEquipmentType: 'INTERPROSING RELAY 5' },
            //DIGITAL OUTPUT CARD && INTERPROSING RELAY 6
            { name: '', equipmentElementType: 'DIGITAL OUTPUT CARD', cloneEquipmentType: 'INTERPROSING RELAY 6' },
            //DIGITAL OUTPUT CARD && INTERPROSING RELAY 7
            { name: '', equipmentElementType: 'DIGITAL OUTPUT CARD', cloneEquipmentType: 'INTERPROSING RELAY 7' },
        ]
    },
    selectedRelayIODescription: {
        type: Object,
        'default': { name: '', equipmentElementType: '', cloneEquipmentType: '' }
    },
    relayIOType: {
        type: Array,
        'default': [
            //DIGITAL OUTPUT CARD
            //DIGITAL OUTPUT CARD && EMPTY
            { name: 'SOLENOID', equipmentElementType: 'DIGITAL OUTPUT CARD', cloneEquipmentType: '' },
            //DIGITAL OUTPUT CARD && INTERPROSING RELAY
            { name: 'SOLENOID', equipmentElementType: 'DIGITAL OUTPUT CARD', cloneEquipmentType: 'INTERPROSING RELAY' },
            //DIGITAL OUTPUT CARD && INTERPROSING RELAY 1
            { name: 'SOLENOID', equipmentElementType: 'DIGITAL OUTPUT CARD', cloneEquipmentType: 'INTERPROSING RELAY 1' },
        ]
    },
    selectedRelayIOType: {
        type: Object,
        'default': { name: '', equipmentElementType: '', cloneEquipmentType: '' }
    },
    IODescriptionRelay: {
        type: Array,
        'default': [
            //DIGITAL OUTPUT CARD
            //DIGITAL OUTPUT CARD && EMPTY
            { name: 'N/A', equipmentElementType: 'DIGITAL OUTPUT CARD', cloneEquipmentType: '' },
            //DIGITAL OUTPUT CARD && INTERPROSING RELAY
            { name: 'ESDV-100 SOLENOID', equipmentElementType: 'DIGITAL OUTPUT CARD', cloneEquipmentType: 'INTERPROSING RELAY' },
            //DIGITAL OUTPUT CARD && INTERPROSING RELAY 1
            { name: 'BLOW DOWN VALVE', equipmentElementType: 'DIGITAL OUTPUT CARD', cloneEquipmentType: 'INTERPROSING RELAY 1' },
        ]
    },
    selectedIODescriptionRelay: {
        type: Object,
        'default': { name: '', equipmentElementType: '', cloneEquipmentType: '' }
    },
    //I/O SUMMARY
    controllerTag: Array,
    selectedControllerTag: String,
    rack: Array,
    selectedRack: String
});

const instrumentationSchema = mongoose.Schema({
    isChecked: { type: Boolean, default: false },
    itemNumber: String,
    instrumentationTag: String,
    hazlocClass: {
        type: Array,
        'default': ["General", "Class 1", "Class 2", "Class 3"]
    },
    selectedHazlocClass: String,
    hazlocZone: {
        type: Array,
        'default': ["Zone 0", "Zone 1", "Zone 2", "Division 1", "Division 2"]
    },
    selectedHazlocZone: String,
    hazlocGroup: {
        type: Array,
        'default': ["Group IIA", "Group IIB", "Group IIA"]
    },
    selectedHazlocGroup: String,
    hazlocTemperature: {
        type: Array,
        'default': ["T1 450 \u00B0С", "T2 300 \u00B0С", "T2A 280 \u00B0С", "T2B 260 \u00B0С", "T2C 230 \u00B0С", "T2D 215 \u00B0С",
            "T3 200 \u00B0С", "T3A 180 \u00B0С", "T3B 165 \u00B0С", "T3C 160 \u00B0С", "T4 135 \u00B0С", "T4A 120 \u00B0С", "T5 100 \u00B0С", "T6 85 \u00B0С"
        ]
    },
    selectedHazlocTemperature: String,
    pidNumber: [{ type: String }],
    selectedPidNumber: String,
    serviceDescription: [{ type: String }],
    selectedServiceDescription: String,
    lineEquipmentNumber: [{ type: String }],
    selectedLineEquipmentNumber: String,
    firstInstrumentType: {
        type: Array,
        'default': ["PRESSURE", "TEMPERATURE", "LEVEL", "FLOW", "DENSITY"]
    },
    selectedFirstInstrumentType: String,
    manufacturer: {
        type: Array,
        'default': ["ALLEN BRADLEY"]
    },
    selectedManufacturer: String,
    modelNumber: [{ type: String }],
    selectedModelNumber: String,
    dataSheetNumber: [{ type: String }],
    selectedDataSheetNumber: String,
    mrPoNumber: [{ type: String }],
    selectedMrPoNumber: String,
    installationDetail: [{ type: String }],
    selectedInstallationDetail: String,
    wiringDrawing: [{ type: String }],
    selectedWiringDrawing: String,
    location: [{ type: String }],
    selectedLocation: String,
    system: {
        type: Array,
        'default': ["PLC", "DCS", "BPCS", "SS", "SIS", "RTU", "BMS", "FIELD"]
    },
    selectedSystem: String,
    secondInstrumentType: {
        type: Array,
        'default': ["SWITCH", "TRANSMITTER", "CONTROL VALVE", "METER", "GUAGE", "DETECTOR", "ACTUATOR", "RTD", "ELEMENT", "THERMOWELL", "MOV", "COMPUTER"]
    },
    selectedSecondInstrumentType: String,
    status: {
        type: Array,
        'default': ["NEW", "REPLACE", "DELETE", "RE-USE", "SURPLUS", "HOLD"]
    },
    selectedStatus: String,
    vendor: [{ type: String }],
    selectedVendor: String,
    cost: Number,
    suppliedBy: [{ type: String }],
    selectedSuppliedBy: String,
    installedBy: [{ type: String }],
    selectedInstalledBy: String,
    signalLevel: {
        type: Array,
        'default': ["4-20mA", "24 VDC", "1-5 mV", "120 VAC", "OHMS", "PNEUM"]
    },
    selectedSignalLevel: String,
    ioType: {
        type: Array,
        'default': ["DI", "DO", "AI", "AO", "RTD", "TC", "HART AI", "HART AO", "RS-485"]
    },
    selectedIOType: String,
    dateInstrumentAdded: { type: Date, default: Date.now },
    cloneTag: String,
    coordForX: Number,
    coordForY: Number,
    coordForZ: Number,
    powerSupply: {
        type: Array,
        'default': ["3W LOOP", "4W LOOP", "3W FIELD", "4W FIELD"]
    },
    selectedPowerSupply: String,
    instrumentFunction: {
        type: Array,
        'default': ["CONTROL", "ON/OFF", "INDICATING", "CALCULATING", "SAFETY SYSTEM", "SHUTDOWN", "SOFT"]
    },
    selectedController: String,
    instrumentationNotes: String,
    internalNotes: String,
    instrumentDescription: [{ type: String }],
    selectedInstrumentDescription: String,
    newTag: String
});
//IO Assignment
var ioAssignmentSchema = new mongoose.Schema({
    selectedTag: String,
    selectedController: String,
    fullDescription: {
        type: Array,
        'default': [
            {
                ioTypeFirst: {
                    type: Array,
                    'default': ['DI', 'DO', 'AI', 'IAI', 'H-IA', 'AO', 'H-AO', 'RTD', 'TC']
                },
                ioTypeSecond: {
                    type: Array,
                    'default': ['A', 'B', 'E', 'F', 'I', 'J', 'K', 'L', 'P', 'PD', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Z']
                },
                ioTypeThird: {
                    type: Array,
                    'default': ['I', 'R', 'S']
                },
                ioTypeForth: {
                    type: Array,
                    'default': ['E', 'H', 'HH', 'L', 'LL', 'S', 'T', 'Y']
                },
                ioTagFirst: {
                    type: String,
                    'default': ""
                },
                ioTagSecond: {
                    type: String,
                    'default': ""
                },
                ioDescription: {
                    type: String,
                    default: ""
                },
                chassis: {
                    type: String,
                    default: ""
                },
                slot: {
                    type: String,
                    default: ""
                },
                data: {
                    type: String,
                    default: ""
                }
            }
        ]
    },
});

//PROJECT SHEMA
const ProjectSchema = mongoose.Schema({
    title: String,
    brows_team_project: [{ type: String }],
    team_project: [userTeamSchema],
    brows_team_project: [userTeamSchema],
    electricals: [electrucalSchema],
    cabels: [cableShema],
    sldschedules: [sldScheduleShema],
    controllers: [controllerShema],
    instrumentations: [instrumentationSchema],
    ioAssignments: [ioAssignmentSchema],
    date_create: { type: Date, default: Date.now },
    updated_date: { type: Date, default: Date.now },
    creator: String,
    creatorEmail: String
});

const Project = module.exports = mongoose.model('Project', ProjectSchema);

module.exports.addProject = function (newProject, callback) {
    newProject.save(callback);
}