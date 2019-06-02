import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractAuthService {

  constructor() {}

  abstract login(credentials);
  abstract setAccessToken(accessToken);
}

