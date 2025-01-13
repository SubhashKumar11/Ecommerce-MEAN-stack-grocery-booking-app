import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserLoginDataService } from '../../services/userlogindata/user-login-data.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login-register',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './login-register.component.html',
  styleUrl: './login-register.component.css',
})
export class LoginRegisterComponent implements OnInit {
  loggedInUser: any;
  customerFormData = { email: '', password: '' };
  isLoggedIn: boolean = false;
  constructor(
    private loginService: UserLoginDataService,
    private router: Router,
    private toaster: ToastrService
  ) {}
  ngOnInit(): void {}
  signInUsingIdPassword(user: any) {
    this.loginService.signInUser(user).subscribe({
      next: (res) => {
        this.isLoggedIn = res;
        if (res.success) {
          localStorage.setItem('token', res.token);
          //alert('Login successfull!');
          this.showSuccess();
          this.router.navigateByUrl('/');
          if (!localStorage.getItem('reloaded')) {
            localStorage.setItem('reloaded', 'true');
            this.router.navigateByUrl('/');
            window.location.reload();
          } else {
            localStorage.removeItem('reloaded');
          }
        } else {
         // alert('Login failled');
          this.showFail();
        }
        this.loggedInUser = res.user.username;
        console.log('Loggedin User', this.loggedInUser);
        // console.log('Login successfull',res)
      },
      error: (error) => {
       // alert('error');
       this.showFail();
        console.log('Error while login', error);
      },
    });
   // alert('login succesful!');
   this.showSuccess();
  }
  showSuccess() {
    this.toaster.success('loggedin successfully!', 'Hurray!', {
      closeButton: true,
      timeOut: 10000
    });
  }
  showFail() {
    this.toaster.error('user not found', 'ohh!', {
      closeButton: true,
      timeOut: 10000,
    });
  }
}
