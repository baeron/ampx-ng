import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
// Date values
  today: Date;
  year: number;

// Size window
  sizeWindow: any;

// Header image > 1200
  firstImg_1920: String;
  secondImg_1920: String;
  thirdImg_1920: String;
  fourthImg_1920: String;

// Header image 992 - 1200
  firstImg_1200: String;
  secondImg_1200: String;
  thirdImg_1200: String;
  fourthImg_1200: String;

// Header image 768 - 992
  firstImg_992: String;
  secondImg_992: String;
  thirdImg_992: String;
  fourthImg_992: String;

// Header image 576 - 768
  firstImg_768: String;
  secondImg_768: String;
  thirdImg_768: String;
  fourthImg_768: String;

// Header image < 576
  firstImg_576: String;
  secondImg_576: String;
  thirdImg_576: String;
  fourthImg_576: String;

// Body icons > 1200
  lightbulbIcon_1200: String;
  graficIcon_1200: String;
  computerIcon_1200: String;

// Body icons 768 - 1200
  lightbulbIcon_768: String;
  graficIcon_768: String;
  computerIcon_768: String;

// Body icons 0 - 768
  lightbulbIcon_576: String;
  graficIcon_576: String;
  computerIcon_576: String;

// Leader image
  leaderImg: String;

// Footer images
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

  // Header img >1200
    this.firstImg_1920 = 'assets/img/1920/aboutUs/Slider/firstImg.jpg';
    this.secondImg_1920 = 'assets/img/1920/aboutUs/Slider/secondImg.jpg';
    this.thirdImg_1920 = 'assets/img/1920/aboutUs/Slider/thirdImg.jpg';
    this.fourthImg_1920 = 'assets/img/1920/aboutUs/Slider/fourthImg.jpg';

  // Header img 992- 1200
    this.firstImg_1200 = 'assets/img/1200/aboutUs/Slider/firstImg.jpg';
    this.secondImg_1200 = 'assets/img/1200/aboutUs/Slider/secondImg.jpg';
    this.thirdImg_1200 = 'assets/img/1200/aboutUs/Slider/thirdImg.jpg';
    this.fourthImg_1200 = 'assets/img/1200/aboutUs/Slider/fourthImg.jpg';

  // Header img 768 - 992
    this.firstImg_992 = 'assets/img/992/aboutUs/Slider/firstImg.jpg';
    this.secondImg_992 = 'assets/img/992/aboutUs/Slider/secondImg.jpg';
    this.thirdImg_992 = 'assets/img/992/aboutUs/Slider/thirdImg.jpg';
    this.fourthImg_992 = 'assets/img/992/aboutUs/Slider/fourthImg.jpg';

  // Header img 576 - 768
    this.firstImg_768 = 'assets/img/768/aboutUs/Slider/firstImg.jpg';
    this.secondImg_768 = 'assets/img/768/aboutUs/Slider/secondImg.jpg';
    this.thirdImg_768 = 'assets/img/768/aboutUs/Slider/thirdImg.jpg';
    this.fourthImg_768 = 'assets/img/768/aboutUs/Slider/fourthImg.jpg';

  // Header img 576 - 768
    this.firstImg_576 = 'assets/img/576/aboutUs/Slider/firstImg.jpg';
    this.secondImg_576 = 'assets/img/576/aboutUs/Slider/secondImg.jpg';
    this.thirdImg_576 = 'assets/img/576/aboutUs/Slider/thirdImg.jpg';
    this.fourthImg_576 = 'assets/img/576/aboutUs/Slider/fourthImg.jpg';

  // Body icons > 1200
    this.lightbulbIcon_1200 = 'assets/img/1200/aboutUs/icons/lightbulb-icon.png';
    this.graficIcon_1200 = 'assets/img/1200/aboutUs/icons/graphic-icon.png';
    this.computerIcon_1200 = 'assets/img/1200/aboutUs/icons/computer-icon.png';

  // Body icons 768 - 1200
    this.lightbulbIcon_768 = 'assets/img/768/aboutUs/icons/lightbulb-icon.png';
    this.graficIcon_768 = 'assets/img/768/aboutUs/icons/graphic-icon.png';
    this.computerIcon_768 = 'assets/img/768/aboutUs/icons/computer-icon.png';

  // Body icons 0 - 768
    this.lightbulbIcon_576 = 'assets/img/576/aboutUs/icons/lightbulb-icon.png';
    this.graficIcon_576 = 'assets/img/576/aboutUs/icons/graphic-icon.png';
    this.computerIcon_576 = 'assets/img/576/aboutUs/icons/computer-icon.png';

  // Leader img
    this.leaderImg = 'assets/img/1920/aboutUs/LeaderImage/greg-img.jpg';

  // Footer image
    this.phoneImg = 'assets/img/1920/headerAndFooter/phone_1920.png';
    this.emailImg = 'assets/img/1920/headerAndFooter/email_1920.png';
    this.linkedInImg = 'assets/img/1920/headerAndFooter/linkedin_1920.png';
  }
}
