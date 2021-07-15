import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetPlanDocumentComponent } from './budget-plan-document.component';

describe('BudgetPlanDocumentComponent', () => {
  let component: BudgetPlanDocumentComponent;
  let fixture: ComponentFixture<BudgetPlanDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetPlanDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetPlanDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
