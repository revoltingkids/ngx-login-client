import { Injectable } from '@angular/core';
import { Router } from '@angular/router/';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import {AbstractAuthService} from 'ngx-login-client';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class AuthService implements AbstractAuthService {


  jwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) { }

  navigateToForgotPw(): Promise<boolean> {
    return this.router.navigateByUrl('/request-password');
  }

  login(credentials): Observable<any> {
    return this.http.post(`${environment.api}/login`, credentials).pipe(
      map((result: any) => {
        return result.token;
      })
    );
  }

  setAccessToken(token) {
    if (token) {
      console.log(this.jwtHelperService.decodeToken(token));
      localStorage.setItem('access_token', token);
      this.router.navigateByUrl('shows');
    }
  }

  logout(): void {
    localStorage.clear();
    this.router.navigateByUrl('login');
  }

  getAccessToken() {
    return localStorage.getItem('access_token');
  }

  requestPasswordLink(): Observable<boolean> {
    return of(true);
  }

  resetPassword() {
  }
}
