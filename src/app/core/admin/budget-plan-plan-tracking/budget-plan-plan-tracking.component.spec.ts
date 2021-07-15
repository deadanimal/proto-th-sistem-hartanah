import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetPlanPlanTrackingComponent } from './budget-plan-plan-tracking.component';

describe('BudgetPlanPlanTrackingComponent', () => {
  let component: BudgetPlanPlanTrackingComponent;
  let fixture: ComponentFixture<BudgetPlanPlanTrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetPlanPlanTrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetPlanPlanTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
