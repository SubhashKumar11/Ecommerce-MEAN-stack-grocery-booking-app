import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserLoginDataService } from '../../services/userlogindata/user-login-data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  customerFormData = {
    username: '',
    password: '',
    email: '',
  };
  constructor(
    private userCreateService: UserLoginDataService,
    private toaster: ToastrService,
    private router: Router
  ) {}
  ngOnInit(): void {}
  createUser(user: any) {
    this.userCreateService.signUpUserToSaveInDatabase(user).subscribe({
      next: (res) => {
        console.log('user added', res);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
   // alert('user created!');
    this.showSuccess();
    this.reloadCurrentPage();
    this.router.navigateByUrl('/register-login');
  }
  reloadCurrentPage() {
    window.location.reload();
  }
  showSuccess() {
    this.toaster.success('user created successfully!', 'Hurray!', {
      closeButton: true,
      timeOut: 10000
    });
  }
}

