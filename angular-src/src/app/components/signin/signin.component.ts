import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../../services/auth.service';

import { matchOtherValidator } from './matchOtherValidator';
import { CustomValidators } from './customVatidator';

import { FlashMessagesService } from 'angular2-flash-messages';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  windowType: Number = 0;

  // Date values
  today: Date;
  year: Number;

  // Footer images
  phoneImg: String;
  emailImg: String;
  linkedInImg: String;

  // Forms
  loginForm: FormGroup;
  forgotPassForm: FormGroup;
  registerForm: FormGroup;

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
    private authService: AuthService,
    private spinnerService: Ng4LoadingSpinnerService
  ) {

    this.today = new Date();
    this.year = this.today.getFullYear();

    this.sizeWindow = window.innerWidth;
    // login form
    this.loginForm = new FormGroup({
      'companyName': new FormControl('', Validators.required),
      'userEmail': new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      'userPassword': new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    });

    // forgot pass form
    this.forgotPassForm = new FormGroup({
      'companyName': new FormControl('', Validators.required),
      'userEmail': new FormControl('', [
        Validators.required,
        // tslint:disable-next-line:max-line-length
        // tslint:disable-next-line:quotemark
        Validators.pattern("/^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/")
      ]),
    });

    // register form
    this.registerForm = new FormGroup({
      'companyName': new FormControl('', Validators.required),
      'userEmail': new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      'confirmUserEmail': new FormControl('', [
        Validators.required,
        Validators.email,
        matchOtherValidator('userEmail')
      ]),
      'userName': new FormControl('', Validators.required),
      'firstName': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.required),
      'city': new FormControl('', Validators.required),
      'phoneNumber': new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      'userPassword': new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      'userConfirmPassword': new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        matchOtherValidator('userPassword')
      ])
    });
  }

  ngOnInit() {
    this.phoneImg = 'assets/img/1920/headerAndFooter/phone_1920.png';
    this.emailImg = 'assets/img/1920/headerAndFooter/email_1920.png';
    this.linkedInImg = 'assets/img/1920/headerAndFooter/linkedin_1920.png';
  }

  setMenuValue(num: number) {
    this.windowType = num;
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\(\)\ ]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode !== 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  onLoginSubmit() {
    this.spinnerService.show();
    const user = {
      companyName: this.loginForm.value.companyName,
      email: this.loginForm.value.userEmail,
      password: this.loginForm.value.userPassword
    };

    this.authService.authenticateUser(user).subscribe(data => {
      if (data.success) {
        this.authService.storeUserData(data.token, data.user);
        this.spinnerService.hide();
        this.flashMessage.show('You are now logged in.', { cssClass: 'alert-success', timeout: 3000, showCloseBtn: true });
        if (data.user.email === 'superAdmin@ampx.ca' || data.user.email === 'admin@ampx.ca') {
          this.router.navigate(['superadmin']);
        } else {
          this.router.navigate(['project']);
        }
      } else {
        this.spinnerService.hide();
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['signin']);
      }
    });
  }

  onRegisterSubmit() {
    const user = {
      email: this.registerForm.value.userEmail,
      userName: this.registerForm.value.userName,
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      companyName: this.registerForm.value.companyName,
      city: this.registerForm.value.city,
      phone: this.registerForm.value.phoneNumber,
      password: this.registerForm.value.userPassword
    };
    // Register user
    this.spinnerService.show();
    this.authService.registerUser(user).subscribe(data => {
      if (data.success) {
        this.spinnerService.hide();
        this.flashMessage.show('You are now registered and can log in!', { cssClass: 'alert-success', timeout: 3000, showCloseBtn: true });
        this.router.navigate(['/']);
      } else {
        this.spinnerService.hide();
        this.flashMessage.show('Something went wrong!!', { cssClass: 'alert-danger', timeout: 3000, showCloseBtn: true });
        this.router.navigate(['/signin']);
      }
    });
  }
}
