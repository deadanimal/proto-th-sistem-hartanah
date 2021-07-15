import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMaintenanceReportComponent } from './project-maintenance-report.component';

describe('ProjectMaintenanceReportComponent', () => {
  let component: ProjectMaintenanceReportComponent;
  let fixture: ComponentFixture<ProjectMaintenanceReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectMaintenanceReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectMaintenanceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
