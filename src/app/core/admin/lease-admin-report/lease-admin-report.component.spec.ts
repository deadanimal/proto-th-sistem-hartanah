import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaseAdminReportComponent } from './lease-admin-report.component';

describe('LeaseAdminReportComponent', () => {
  let component: LeaseAdminReportComponent;
  let fixture: ComponentFixture<LeaseAdminReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaseAdminReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaseAdminReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
