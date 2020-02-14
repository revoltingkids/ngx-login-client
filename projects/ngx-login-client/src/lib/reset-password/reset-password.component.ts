import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {LoginConfig} from '../ngx-login-client/login-config.model';
import {AbstractAuthService} from '../services/abstract-auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'rk-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit, OnDestroy {

  forgotPWForm: FormGroup;

  @Input() config: LoginConfig = {
    title: 'Link zum Zurücksetzen des Passworts anfordern',
    pageHeader: 'RevoltingKids Login Component',
    errorMsg: 'Wrong login data',
    userNameLabelText: 'Email Address',
    userNameValidationMsg: 'Please enter your email address.',
    requestLinkButtonText: 'Request Link',
    instruction: 'Hast du dein Passwort vergessen? Bitte gib deine E-Mail-Adresse ein. Du erhältst einen Link per E-Mail, womit du dir ein neues Passwort erstellen kannst.',
    newPasswordLabelText: 'New Password',
    repeatNewPasswordLabelText: 'Repeat new Password'
  };

  error = false;
  isLoading = false
  submitted = false;
  success = false;
  requestLink$: Subscription;


  constructor(private authService: AbstractAuthService) { }

  ngOnInit() {
    this.initForm();
  }

  ngOnDestroy() {
    this.requestLink$.unsubscribe();
  }

  initForm() {
    this.forgotPWForm = new FormGroup({});
    this.forgotPWForm.addControl('userName', new FormControl('', [Validators.required, Validators.email]));
  }

  sendLink() {
    if (this.forgotPWForm.invalid) {
      this.submitted = true;
    } else {
      const userName = this.forgotPWForm.get('userName').value;
      this.requestLink$ = this.authService.requestPasswordLink(userName).subscribe(res => this.success = true);
    }
  }
}
