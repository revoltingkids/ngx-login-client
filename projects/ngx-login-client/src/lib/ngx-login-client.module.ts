import { NgModule } from '@angular/core';
import { NgxLoginClientComponent } from './ngx-login-client/ngx-login-client.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [NgxLoginClientComponent],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [NgxLoginClientComponent]
})
export class NgxLoginClientModule { }
