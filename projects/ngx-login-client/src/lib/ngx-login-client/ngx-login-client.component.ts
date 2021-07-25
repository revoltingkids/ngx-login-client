import {Component, Input, OnDestroy, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Credentials} from './credentials.model';
import {AbstractAuthService} from '../services/abstract-auth.service';
import {LoginConfig} from './login-config.model';
import {Subscription, BehaviorSubject} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'rk-login-client',
  templateUrl: './ngx-login-client.component.html',
  styleUrls: ['./ngx-login-client.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxLoginClientComponent implements OnInit, OnDestroy {

  registerLink: string;

  @Input() config: LoginConfig = {
    title: 'Login',
    pageHeader: 'RevoltingKids Login Component',
    errorMsg: 'Wrong login data',
    userNameLabelText: 'Email Address',
    passwordLabelText: 'Password',
    forgotPasswordButtonText: 'Forgot Password',
    loginButtonText: 'Sign In',
    passwordValidationMsg: 'Please enter your password.',
    userNameValidationMsg: 'Please enter your email address.',
    titleRegister: 'Register',
    registerButtonText: 'Register'
  };

  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  hasError$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  submitted$: BehaviorSubject<boolean> = new BehaviorSubject(false);


  loginForm: FormGroup;

  loginSubscription: Subscription;

  constructor(private authService: AbstractAuthService, private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required, Validators.email]],
      password: ''
    });

    this.config = this.authService.config;
    this.registerLink = this.authService.registerLink;
  }

  ngOnDestroy() {
    if (this.loginSubscription != null) {
      this.loginSubscription.unsubscribe();
    }
  }

  login() {
    this.submitted$.next(true);
    if (this.loginForm.valid) {
      this.isLoading$.next(true);
      const credentials: Credentials = this.loginForm.value;

      this.loginSubscription = this.authService.login(credentials).subscribe(
        (res) => {
          this.authService.setAccessToken(res);
        },
        (error) => {
          this.hasError$.next(true);
        }
      ).add(() => this.isLoading$.next(false));
    }
  }

  forgotPw() {
    this.authService.navigateToForgotPw();
  }
}
