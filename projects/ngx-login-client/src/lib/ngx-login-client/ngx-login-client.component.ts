import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Credentials} from './credentials.model';
import {AbstractAuthService} from './abstract-auth.service';
import {LoginConfig} from './login-config.model';
import {Subscription} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'rk-login-client',
  templateUrl: './ngx-login-client.component.html',
  styleUrls: ['./ngx-login-client.component.scss']
})
export class NgxLoginClientComponent implements OnInit, OnDestroy {


  @Input() config: LoginConfig = {
    title: 'login',
    pageHeader: 'RevoltingKids Login Component',
    errorMsg: 'Wrong login data',
    userNameLabelText: 'Email Address',
    passwordLabelText: 'Password',
    forgotPasswordButtonText: 'Forgot Password',
    loginButtonText: 'Sign In',
    passwordValidationMsg: 'Please enter your password.',
    userNameValidationMsg: 'Please enter your email address.'
  };

  error = false;
  isLoading = false
  submitted = false;

  loginForm: FormGroup;

  loginSubscription: Subscription;

  constructor(private authService: AbstractAuthService, private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required, Validators.email]],
      password: ''
    });
  }

  ngOnDestroy() {
    this.loginSubscription.unsubscribe();
  }

  login() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.isLoading = true;
      const credentials: Credentials = this.loginForm.value;

      this.loginSubscription = this.authService.login(credentials).subscribe(
        (res) => {
          this.authService.setAccessToken(res);
        },
        (error) => {
          console.log(error);
          this.error = true;
          this.isLoading = false;
        }
      );
    }
  }
}
