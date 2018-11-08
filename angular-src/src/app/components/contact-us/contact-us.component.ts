import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ContactUsService } from '../../services/contact-us.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
// Date values
  today: Date;
  year: Number;
// Header image
  contactUsImg_1920: String;
  contactUsImg_1200: String;
  contactUsImg_992: String;
  contactUsImg_768: String;
  contactUsImg_576: String;
// Footer images
  phoneImg: String;
  emailImg: String;
  linkedInImg: String;
// Form fields
  contactUsForm: FormGroup;
  textValue = 'Message';
// Size window
  sizeWindow: any;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    // tslint:disable-next-line:no-unused-expression
    event.target.innerWidth;
    this.sizeWindow = event.target.innerWidth;
  }

  constructor(
    private flashMessage: FlashMessagesService,
    private router: Router,
    private contactUsService: ContactUsService,
    private spinnerService: Ng4LoadingSpinnerService
  ) {
    this.today = new Date();
    this.year = this.today.getFullYear();

    this.sizeWindow = window.innerWidth;
    this.contactUsForm = new FormGroup({
      'userName':  new FormControl('', Validators.required),
      'userEmail':    new FormControl('', [
        Validators.required,
        // tslint:disable-next-line:max-line-length
        Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      ]),
      'userPhone': new FormControl(''),
      'message':  new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    this.phoneImg = 'assets/img/1920/headerAndFooter/phone_1920.png';
    this.emailImg = 'assets/img/1920/headerAndFooter/email_1920.png';
    this.linkedInImg = 'assets/img/1920/headerAndFooter/linkedin_1920.png';
    // header img
    this.contactUsImg_1920 = 'assets/img/1920/contactUs/contact_us.jpg';
    this.contactUsImg_1200 = 'assets/img/1200/contactUs/contact_us.jpg';
    this.contactUsImg_992 = 'assets/img/992/contactUs/contact_us.jpg';
    this.contactUsImg_768 = 'assets/img/768/contactUs/contact_us.jpg';
    this.contactUsImg_576 = 'assets/img/576/contactUs/contact_us.jpg';
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\(\)\ ]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode !== 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  submit() {
    this.spinnerService.show();
    const user = {
      name: this.contactUsForm.value.userName,
      email: this.contactUsForm.value.userEmail,
      phone: this.contactUsForm.value.userPhone,
      message: this.contactUsForm.value.message
    };
    this.contactUsService.sendContactUsEmail(user).subscribe(data => {
      if (data.success) {
        this.spinnerService.hide();
        // tslint:disable-next-line:max-line-length
        this.flashMessage.show('Your message has been sent to the site administrator.', {cssClass: 'alert-success', timeout: 3000, showCloseBtn: true});
        this.router.navigate(['/']);
      } else {
        this.spinnerService.hide();
        this.flashMessage.show('Something went wrong.', {cssClass: 'alert-danger', timeout: 3000, showCloseBtn: true});
        this.router.navigate(['/']);
      }
    });
  }
}
