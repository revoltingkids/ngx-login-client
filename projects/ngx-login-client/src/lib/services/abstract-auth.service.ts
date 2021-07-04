import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractAuthService {

  constructor() {}

  abstract login(credentials);
  abstract setAccessToken(accessToken);
  abstract requestPasswordLink(email);
  abstract resetPassword();
  abstract navigateToForgotPw(): Promise<boolean>;
}

