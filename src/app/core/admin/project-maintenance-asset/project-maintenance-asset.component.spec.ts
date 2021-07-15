import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMaintenanceAssetComponent } from './project-maintenance-asset.component';

describe('ProjectMaintenanceAssetComponent', () => {
  let component: ProjectMaintenanceAssetComponent;
  let fixture: ComponentFixture<ProjectMaintenanceAssetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectMaintenanceAssetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectMaintenanceAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
