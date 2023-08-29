import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  constructor(private fb: FormBuilder, private router: Router) {}

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
      const username = this.loginForm.get('username').value;
      const password = this.loginForm.get('password').value;
      console.log('Login Form Data:', { username, password });
      this.router.navigate(['/product-demo']);
    }
  }

  signup() {
    if (this.signupForm.valid) {
      const signupUsername = this.signupForm.get('signupUsername').value;
      const signupPassword = this.signupForm.get('signupPassword').value;
      console.log('Signup Form Data:', { signupUsername, signupPassword });
      this.router.navigate(['/product-demo']);
    }
  }
  switchToSignupForm() {
    this.showSignupForm = true;
  }

  switchToLoginForm() {
    this.showSignupForm = false;
  }
}
