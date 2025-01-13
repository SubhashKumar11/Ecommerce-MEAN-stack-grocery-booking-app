import { CommonModule } from '@angular/common';
import { Component, HostListener , OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { UserLoginDataService } from '../../services/userlogindata/user-login-data.service';

@Component({
  selector: 'app-account',
  imports: [CommonModule, RouterModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent implements OnInit {
  //userName: string | null = null;
  showIcon: boolean = true;
  loggedInUser: any;
  showcard = true;
  // isLoggedIn: boolean = false;
  isLoggedOut: boolean = false;
  constructor(
    private loginService: UserLoginDataService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.showProfile();
  }
  toggleCard() {
    this.showcard = !this.showcard;
  }
  //code to close card when click anywhere
  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: Event) {
    const targetElement = event.target as HTMLElement;
    // Check if the click is outside the menu content or button
    if (this.showcard && !targetElement.closest('.account')) {
      this.showcard = false;
    }
  }
  logOut() {
    this.loginService.logoutUser().subscribe((res) => {
      console.log('logout_user', res);
    });
    this.showIcon = true;
    this.isLoggedOut = false;
    alert('logout success!');
  }
  showProfile() {
    this.loginService.getProfileOfLoginUser().subscribe({
      next: (res) => {
        this.loggedInUser = res;
        console.log('profile data', res);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  automaticaLogOut() {
    this.loginService.expireToken();
  }
}

