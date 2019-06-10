import {NgxLoginClientComponent} from './ngx-login-client.component';
import {FormBuilder, Validators} from '@angular/forms';

describe('NgxLoginClientComponent', () => {
  let component: NgxLoginClientComponent;
  let mockAuthService;

  beforeEach(() => {
    mockAuthService = jasmine.createSpyObj(['login', 'setAccessToken']);
    component = new NgxLoginClientComponent(mockAuthService, new FormBuilder());
    component.loginForm = new FormBuilder().group({
      userName: ['', [Validators.required, Validators.email]],
      password: ''
    });
  });

  it('login form should be invalid', () => {
    expect(component.loginForm.invalid).toBe(true);
  });

  it('login form should be valid', () => {
    component.loginForm.get('userName').setValue('test@myemail.com');
    component.loginForm.get('password').setValue('randompassword');
    expect(component.loginForm.invalid).toBe(false);
  });


});
