import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLoginClientComponent } from './ngx-login-client.component';

describe('NgxLoginClientComponent', () => {
  let component: NgxLoginClientComponent;
  let fixture: ComponentFixture<NgxLoginClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxLoginClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLoginClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
