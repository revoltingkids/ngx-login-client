import { Component, OnInit } from '@angular/core';
import {Credentials} from './credentials.model';

@Component({
  selector: 'lib-ngx-login-client',
  templateUrl: './ngx-login-client.component.html',
  styleUrls: ['./ngx-login-client.component.scss']
})
export class NgxLoginClientComponent implements OnInit {

  emailAddress: string;
  password: string;
  error = false;
  isLoading = false;

  constructor() { }

  ngOnInit() {
  }

  login() {
    this.isLoading = true;
    const credentials: Credentials = {
      userName: this.emailAddress,
      password: this.password
    };

    /*this.authService.login(credentials).subscribe(
      () => { this.isLoading = false; },
      () => { this.error = true; this.isLoading = false; }
    );*/
  }

}
