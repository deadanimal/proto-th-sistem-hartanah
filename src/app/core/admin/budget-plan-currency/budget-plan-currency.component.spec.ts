import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetPlanCurrencyComponent } from './budget-plan-currency.component';

describe('BudgetPlanCurrencyComponent', () => {
  let component: BudgetPlanCurrencyComponent;
  let fixture: ComponentFixture<BudgetPlanCurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetPlanCurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetPlanCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
