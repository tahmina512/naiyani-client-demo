import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  constructor(private fb: FormBuilder) {}

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

      console.log(this.loginForm.value.username)
    }
  }

  signup() {
    if (this.signupForm.valid) {
    }
  }
  switchToSignupForm() {
    this.showSignupForm = true;
  }

  switchToLoginForm() {
    this.showSignupForm = false;
  }
}
