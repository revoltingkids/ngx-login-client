import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxLoginClientModule} from 'ngx-login-client';
import {AuthService} from './auth/auth.service';
import {AuthModule} from './auth/auth.module';
import {RouterModule} from '@angular/router';
import {AbstractAuthService} from 'ngx-login-client';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    RouterModule.forRoot([{path: '', component: AppComponent}]),
    NgxLoginClientModule
  ],
  providers: [
    { provide: AbstractAuthService, useClass: AuthService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
