import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxLoginClientModule} from 'ngx-login-client';
import {AuthService} from './auth/auth.service';
import {AuthModule} from './auth/auth.module';
import {RouterModule} from '@angular/router';
import {AbstractAuthService, NgxLoginClientComponent, RequestPasswordComponent, ResetPasswordComponent} from 'ngx-login-client';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule,
    RouterModule.forRoot(
      [{path: '', component: AppComponent, children: [
          { path: 'login', component: NgxLoginClientComponent},
          { path: 'request-password', component: RequestPasswordComponent},
          { path: 'reset-password', component: ResetPasswordComponent}
        ]}]
    ),
    NgxLoginClientModule
  ],
  providers: [
    { provide: AbstractAuthService, useClass: AuthService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
