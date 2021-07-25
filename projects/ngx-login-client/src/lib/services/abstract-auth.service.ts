import { Injectable } from '@angular/core';
import { LoginConfig } from '../ngx-login-client/login-config.model';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractAuthService {

  config: LoginConfig;
  registerLink: string;

  constructor() {}

  abstract login(credentials);
  abstract setAccessToken(accessToken);
  abstract requestPasswordLink(email);
  abstract resetPassword();
  abstract navigateToForgotPw();
}

