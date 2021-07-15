import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMaintenanceWorkOrderComponent } from './project-maintenance-work-order.component';

describe('ProjectMaintenanceWorkOrderComponent', () => {
  let component: ProjectMaintenanceWorkOrderComponent;
  let fixture: ComponentFixture<ProjectMaintenanceWorkOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectMaintenanceWorkOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectMaintenanceWorkOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
