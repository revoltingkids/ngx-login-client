import {ModuleWithProviders, NgModule} from '@angular/core';
import { NgxLoginClientComponent } from './ngx-login-client/ngx-login-client.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { RequestPasswordComponent } from './request-password/request-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [NgxLoginClientComponent, RequestPasswordComponent, ResetPasswordComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  exports: [NgxLoginClientComponent, RequestPasswordComponent]
})
export class NgxLoginClientModule {
}
