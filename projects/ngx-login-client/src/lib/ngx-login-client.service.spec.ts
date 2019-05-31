import { TestBed } from '@angular/core/testing';

import { NgxLoginClientService } from './ngx-login-client.service';

describe('NgxLoginClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxLoginClientService = TestBed.get(NgxLoginClientService);
    expect(service).toBeTruthy();
  });
});
