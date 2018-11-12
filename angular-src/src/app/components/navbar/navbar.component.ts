import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // Navbar image > 1200
  companyLogo_1200: String;
  // Navbar image 768 - 1200
  companyLogo_768: String;

  constructor(
    public authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.companyLogo_1200 = 'assets/img/1200/header/AMP-X-logo.png';
    this.companyLogo_768 = 'assets/img/768/header/AMP-X-logo.png';
  }

  onLogoutClick() {
    this.authService.logout();
    this.flashMessage.show('You are logged out', { cssClass: 'alert-success', timeout: 3000 });
    this.router.navigate(['/'], { replaceUrl: true });
    return false;
  }
}
