import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTemplateMainComponent } from './project-template-main.component';

describe('ProjectTemplateMainComponent', () => {
  let component: ProjectTemplateMainComponent;
  let fixture: ComponentFixture<ProjectTemplateMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectTemplateMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTemplateMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
