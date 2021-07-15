import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetPlanReportComponent } from './budget-plan-report.component';

describe('BudgetPlanReportComponent', () => {
  let component: BudgetPlanReportComponent;
  let fixture: ComponentFixture<BudgetPlanReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetPlanReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetPlanReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
