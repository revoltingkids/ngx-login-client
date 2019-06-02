import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JwtModule, JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AuthorizationInterceptor } from './authorization.interceptor';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptor,
      multi: true
    }
  ],
  exports: [
    HttpClientModule
  ]
})
export class AuthModule { }
