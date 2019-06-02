import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('halloooooooo');
    const modifiedRequest = req.clone({setHeaders: {'Authorization': 'Bearer ' + this.authService.getAccessToken()}});
    return next.handle(modifiedRequest);
  }
}
