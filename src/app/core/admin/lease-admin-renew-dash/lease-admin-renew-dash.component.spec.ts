import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaseAdminRenewDashComponent } from './lease-admin-renew-dash.component';

describe('LeaseAdminRenewDashComponent', () => {
  let component: LeaseAdminRenewDashComponent;
  let fixture: ComponentFixture<LeaseAdminRenewDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaseAdminRenewDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaseAdminRenewDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
