import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionPlanScheduleComponent } from './construction-plan-schedule.component';

describe('ConstructionPlanScheduleComponent', () => {
  let component: ConstructionPlanScheduleComponent;
  let fixture: ComponentFixture<ConstructionPlanScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructionPlanScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructionPlanScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
