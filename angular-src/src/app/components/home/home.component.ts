import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Date values
    today: Date;
    year: number;
  // Size window
    sizeWindow: any;
  // carousel images 1920
    engenieeringOptimization_1920: String;
    trusted_Experts_1920: String;
    lifecycle_Solutionos_1920: String;
  // Carousel images > 1200
    engenieeringOptimization_1200: String;
    trusted_Experts_1200: String;
    lifecycle_Solutionos_1200: String;
  // carousel images 992 - 1200
    engenieeringOptimization_992: String;
    trusted_Experts_992: String;
    lifecycle_Solutionos_992: String;
  // carousel images 768 - 992
    engenieeringOptimization_768: String;
    trusted_Experts_768: String;
    lifecycle_Solutionos_768: String;
  // carousel images 576
    engenieeringOptimization_576: String;
    trusted_Experts_576: String;
    lifecycle_Solutionos_576: String;
  // Affiliations images
    apegaImg: String;
    asetImg: String;
    ccImg: String;
    ecaaImg: String;
  // footer images
    phoneImg: String;
    emailImg: String;
    linkedInImg: String;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    // tslint:disable-next-line:no-unused-expression
    event.target.innerWidth;
    this.sizeWindow = event.target.innerWidth;
  }

  constructor() {
    this.sizeWindow = window.innerWidth;
   }

  ngOnInit() {
    this.today = new Date();
    this.year = this.today.getFullYear();
  // carousel images 1920
    this.engenieeringOptimization_1920 = 'assets/img/1920/home/Engenieering_Optimization_1920.jpg';
    this.trusted_Experts_1920 = 'assets/img/1920/home/Trusted_Experts_1920.jpg';
    this.lifecycle_Solutionos_1920 = 'assets/img/1920/home/Lifecycle_Solutionos_1920.jpg';
  // carousel images 1200
    this.engenieeringOptimization_1200 = 'assets/img/1200/home/Engenieering_Optimization.jpg';
    this.trusted_Experts_1200 = 'assets/img/1200/home/Trusted_Experts.jpg';
    this.lifecycle_Solutionos_1200 = 'assets/img/1200/home/Lifecycle_Solutionos.jpg';
  // carousel images 992
    this.engenieeringOptimization_992 = 'assets/img/992/home/Engenieering_Optimization.jpg';
    this.trusted_Experts_992 = 'assets/img/992/home/Trusted_Experts.jpg';
    this.lifecycle_Solutionos_992 = 'assets/img/992/home/Lifecycle_Solutionos.jpg';
  // carousel images 768
    this.engenieeringOptimization_768 = 'assets/img/768/home/Engenieering_Optimization.jpg';
    this.trusted_Experts_768 = 'assets/img/768/home/Trusted_Experts.jpg';
    this.lifecycle_Solutionos_768 = 'assets/img/768/home/Lifecycle_Solutionos.jpg';
  // carousel images 576
    this.engenieeringOptimization_576 = 'assets/img/576/home/Engenieering_Optimization.jpg';
    this.trusted_Experts_576 = 'assets/img/576/home/Trusted_Experts.jpg';
    this.lifecycle_Solutionos_576 = 'assets/img/576/home/Lifecycle_Solutionos.jpg';

    this.apegaImg = 'assets/img/1920/home/LogoLinks/apega.png';
    this.asetImg = 'assets/img/1920/home/LogoLinks/aset.png';
    this.ccImg = 'assets/img/1920/home/LogoLinks/cc.png';
    this.ecaaImg = 'assets/img/1920/home/LogoLinks/ecaa.png';

    this.phoneImg = 'assets/img/1920/headerAndFooter/phone_1920.png';
    this.emailImg = 'assets/img/1920/headerAndFooter/email_1920.png';
    this.linkedInImg = 'assets/img/1920/headerAndFooter/linkedin_1920.png';
  }
}
