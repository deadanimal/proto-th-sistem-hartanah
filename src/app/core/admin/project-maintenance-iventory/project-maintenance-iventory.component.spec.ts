import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMaintenanceIventoryComponent } from './project-maintenance-iventory.component';

describe('ProjectMaintenanceIventoryComponent', () => {
  let component: ProjectMaintenanceIventoryComponent;
  let fixture: ComponentFixture<ProjectMaintenanceIventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectMaintenanceIventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectMaintenanceIventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
