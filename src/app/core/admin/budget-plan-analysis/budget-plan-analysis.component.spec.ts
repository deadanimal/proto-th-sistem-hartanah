import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetPlanAnalysisComponent } from './budget-plan-analysis.component';

describe('BudgetPlanAnalysisComponent', () => {
  let component: BudgetPlanAnalysisComponent;
  let fixture: ComponentFixture<BudgetPlanAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetPlanAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetPlanAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
