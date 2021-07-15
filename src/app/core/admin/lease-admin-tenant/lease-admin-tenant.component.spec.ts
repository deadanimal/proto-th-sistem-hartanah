import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaseAdminTenantComponent } from './lease-admin-tenant.component';

describe('LeaseAdminTenantComponent', () => {
  let component: LeaseAdminTenantComponent;
  let fixture: ComponentFixture<LeaseAdminTenantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaseAdminTenantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaseAdminTenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
