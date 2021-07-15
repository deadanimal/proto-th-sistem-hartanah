import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTemplateAsessmentComponent } from './project-template-asessment.component';

describe('ProjectTemplateAsessmentComponent', () => {
  let component: ProjectTemplateAsessmentComponent;
  let fixture: ComponentFixture<ProjectTemplateAsessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectTemplateAsessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTemplateAsessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
