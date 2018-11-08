import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  //Date values
  today: Date;
  year: number;
  
  //Size window
  sizeWindow: any;
  
  //carousel images 1920
  projectServices_1920: String;
  engineeringAnalysis_1920: String;
  fieldServices_1920: String;
  oilAndGas_1920: String;
  powerSystem_1920: String;
  renewables_1920: String;

  //carousel images 992 - 1200 
  projectServices_1200: String;
  engineeringAnalysis_1200: String;
  fieldServices_1200: String;
  oilAndGas_1200: String;
  powerSystem_1200: String;
  renewables_1200: String;

  //carousel images 768 - 992
  projectServices_992: String;
  engineeringAnalysis_992: String;
  fieldServices_992: String;
  oilAndGas_992: String;
  powerSystem_992: String;
  renewables_992: String;
  
  //carousel images 576 - 768
  projectServices_768: String;
  engineeringAnalysis_768: String;
  fieldServices_768: String;
  oilAndGas_768: String;
  powerSystem_768: String;
  renewables_768: String;

  //carousel images < 576
  projectServices_576: String;
  engineeringAnalysis_576: String;
  fieldServices_576: String;
  oilAndGas_576: String;
  powerSystem_576: String;
  renewables_576: String;

  //companis logo > 1200
  csa_1200: String;
  iec_1200: String;
  ieee_1200: String;
  isa_1200: String;
  nec_1200: String;

  //companis 768 - 1200
  csa_768: String;
  iec_768: String;
  ieee_768: String;
  isa_768: String;
  nec_768: String;

  //companis 576 - 768
  csa_576: String;
  iec_576: String;
  ieee_576: String;
  isa_576: String;
  nec_576: String;

  //body icons > 1200
  gearIcon_1200: String;
  calculator_1200: String;
  tools_1200: String;
  pumpjack_1200: String;
  lighting_1200: String;
  solar_1200: String;

  //body icons 768 - 1200
  gearIcon_768: String;
  calculator_768: String;
  tools_768: String;
  pumpjack_768: String;
  lighting_768: String;
  solar_768: String;

  //body icons 0 - 768
  gearIcon_576: String;
  calculator_576: String;
  tools_576: String;
  pumpjack_576: String;
  lighting_576: String;
  solar_576: String;

  //footer images
  phoneImg: String;
  emailImg: String;
  linkedInImg: String;

  @HostListener('window:resize', ['$event'])
    onResize(event) {
    event.target.innerWidth;
    this.sizeWindow = event.target.innerWidth;
  }

  constructor() {
    this.sizeWindow = window.innerWidth;
  }

  ngOnInit() {
  //date value
    this.today = new Date();
    this.year = this.today.getFullYear();

  //carousel images 1920
    this.projectServices_1920 = 'assets/img/1920/service/Slider/Project_Services.jpg';
    this.engineeringAnalysis_1920 = 'assets/img/1920/service/Slider/Engineering_Analysis.jpg';
    this.fieldServices_1920 = 'assets/img/1920/service/Slider/Field_Services.jpg';
    this.oilAndGas_1920 = 'assets/img/1920/service/Slider/Oil_And_Gas.jpg';
    this.powerSystem_1920 = 'assets/img/1920/service/Slider/Power_System.jpg';
    this.renewables_1920 = 'assets/img/1920/service/Slider/Renewables.jpg';

  //carousel images 1200
    this.projectServices_1200 = 'assets/img/1200/service/Slider/Project_Services.jpg';
    this.engineeringAnalysis_1200 = 'assets/img/1200/service/Slider/Engineering_Analysis.jpg';
    this.fieldServices_1200 = 'assets/img/1200/service/Slider/Field_Services.jpg';
    this.oilAndGas_1200 = 'assets/img/1200/service/Slider/Oil_And_Gas.jpg';
    this.powerSystem_1200 = 'assets/img/1200/service/Slider/Power_System.jpg';
    this.renewables_1200 = 'assets/img/1200/service/Slider/Renewables.jpg';

  //carousel images 992
    this.projectServices_992 = 'assets/img/992/service/Slider/Project_Services.jpg';
    this.engineeringAnalysis_992 = 'assets/img/992/service/Slider/Engineering_Analysis.jpg';
    this.fieldServices_992 = 'assets/img/992/service/Slider/Field_Services.jpg';
    this.oilAndGas_992 = 'assets/img/992/service/Slider/Oil_And_Gas.jpg';
    this.powerSystem_992 = 'assets/img/992/service/Slider/Power_System.jpg';
    this.renewables_992 = 'assets/img/992/service/Slider/Renewables.jpg';

  //carousel images 768
    this.projectServices_768 = 'assets/img/992/service/Slider/Project_Services.jpg';
    this.engineeringAnalysis_768 = 'assets/img/768/services/Slider/Engineering_Analysis.jpg';
    this.fieldServices_768 = 'assets/img/768/services/Slider/Field_Services.jpg';
    this.oilAndGas_768 = 'assets/img/768/services/Slider/Oil_And_Gas.jpg';
    this.powerSystem_768 = 'assets/img/768/services/Slider/Power_System.jpg';
    this.renewables_768 = 'assets/img/768/services/Slider/Renewables.jpg';

  //carousel images 576
    this.projectServices_576 = 'assets/img/576/services/Slider/Project_Services.jpg';
    this.engineeringAnalysis_576 = 'assets/img/576/services/Slider/Engineering_Analysis.jpg';
    this.fieldServices_576 = 'assets/img/576/services/Slider/Field_Services.jpg';
    this.oilAndGas_576 = 'assets/img/576/services/Slider/Oil_And_Gas.jpg';
    this.powerSystem_576 = 'assets/img/576/services/Slider/Power_System.jpg';
    this.renewables_576 = 'assets/img/576/services/Slider/Renewables.jpg';

  //companis logo > 1200
    this.csa_1200  ='assets/img/1200/service/LogoLinks/csa.png';
    this.iec_1200 = 'assets/img/1200/service/LogoLinks/iec.png';
    this.ieee_1200 = 'assets/img/1200/service/LogoLinks/ieee.png';
    this.isa_1200 = 'assets/img/1200/service/LogoLinks/isa.png';
    this.nec_1200 = 'assets/img/1200/service/LogoLinks/nec.png';

  //companis 768 - 1200
    this.csa_768  ='assets/img/768/services/LogoLinks/csa.png';
    this.iec_768 = 'assets/img/768/services/LogoLinks/iec.png';
    this.ieee_768 = 'assets/img/768/services/LogoLinks/ieee.png';
    this.isa_768 = 'assets/img/768/services/LogoLinks/isa.png';
    this.nec_768 = 'assets/img/768/services/LogoLinks/nec.png';
  
  //companis 576 - 768
    this.csa_576  ='assets/img/576/services/LogoLinks/csa.png';
    this.iec_576 = 'assets/img/576/services/LogoLinks/iec.png';
    this.ieee_576 = 'assets/img/576/services/LogoLinks/ieee.png';
    this.isa_576 = 'assets/img/576/services/LogoLinks/isa.png';
    this.nec_576 = 'assets/img/576/services/LogoLinks/nec.png';

  //body icons > 1200
    this.gearIcon_1200 = 'assets/img/1200/service/icons/gear.png';
    this.calculator_1200 = 'assets/img/1200/service/icons/calculator.png';
    this.tools_1200 = 'assets/img/1200/service/icons/tools.png';
    this.pumpjack_1200 = 'assets/img/1200/service/icons/pumpjack.png';
    this.lighting_1200 = 'assets/img/1200/service/icons/lighting.png';
    this.solar_1200 = 'assets/img/1200/service/icons/solar.png';

  //body icons 768 - 1200
    this.gearIcon_768 = 'assets/img/768/services/icons/gear.png';
    this.calculator_768 = 'assets/img/768/services/icons/calculator.png';
    this.tools_768 = 'assets/img/768/services/icons/tools.png';
    this.pumpjack_768 = 'assets/img/768/services/icons/pumpjack.png';
    this.lighting_768 = 'assets/img/768/services/icons/lighting.png';
    this.solar_768 = 'assets/img/768/services/icons/solar.png';

  //body icons 0 - 768
    this.gearIcon_576 = 'assets/img/576/services/icons/gear.png';
    this.calculator_576 = 'assets/img/576/services/icons/calculator.png';
    this.tools_576 = 'assets/img/576/services/icons/tools.png';
    this.pumpjack_576 = 'assets/img/576/services/icons/pumpjack.png';
    this.lighting_576 = 'assets/img/576/services/icons/lighting.png';
    this.solar_576 = 'assets/img/576/services/icons/lighting.png';

  //footer images
    this.phoneImg = 'assets/img/1920/headerAndFooter/phone_1920.png';
    this.emailImg = 'assets/img/1920/headerAndFooter/email_1920.png';
    this.linkedInImg = 'assets/img/1920/headerAndFooter/linkedin_1920.png';
  }
}
