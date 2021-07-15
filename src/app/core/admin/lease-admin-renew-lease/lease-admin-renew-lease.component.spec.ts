import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaseAdminRenewLeaseComponent } from './lease-admin-renew-lease.component';

describe('LeaseAdminRenewLeaseComponent', () => {
  let component: LeaseAdminRenewLeaseComponent;
  let fixture: ComponentFixture<LeaseAdminRenewLeaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaseAdminRenewLeaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaseAdminRenewLeaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
