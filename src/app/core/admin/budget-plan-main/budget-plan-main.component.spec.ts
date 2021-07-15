import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetPlanMainComponent } from './budget-plan-main.component';

describe('BudgetPlanMainComponent', () => {
  let component: BudgetPlanMainComponent;
  let fixture: ComponentFixture<BudgetPlanMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetPlanMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetPlanMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
