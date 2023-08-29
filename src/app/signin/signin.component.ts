import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthResponse, AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  //  @Input() logoUrl: string;


  loginForm: FormGroup;
  signupForm: FormGroup;
  showSignupForm = false;
  constructor(private fb: FormBuilder, private router: Router,private authService:AuthService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required]],
    });

    this.signupForm = this.fb.group({
      signupUsername: ['', Validators.required],
      signupPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern(/.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?].*/),
        ],
      ],
    });
  }

  login() {
    if (this.loginForm.valid) {
      
      console.log();
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;
  
      this.authService.login(username,password).subscribe(
        resData => {
          console.log(resData);
          this.router.navigate(['/product-demo']);
        }

      );
    }
  }

  signup() {
    if (this.signupForm.valid) {
      const signupUsername = this.loginForm.value.username;
      const signupPassword = this.loginForm.value.password;
      this.authService.signup(signupUsername,signupPassword)
      .subscribe(
        resData => {
          console.log(resData);
          this.router.navigate(['/product-demo']);
        }
      );  
    }
  }
  switchToSignupForm() {
    this.showSignupForm = true;
  }

  switchToLoginForm() {
    this.showSignupForm = false;
  }
}
