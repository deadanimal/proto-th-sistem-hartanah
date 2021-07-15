import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMaintenanceMainComponent } from './project-maintenance-main.component';

describe('ProjectMaintenanceMainComponent', () => {
  let component: ProjectMaintenanceMainComponent;
  let fixture: ComponentFixture<ProjectMaintenanceMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectMaintenanceMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectMaintenanceMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
