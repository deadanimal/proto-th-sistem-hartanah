import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractManagementFailureCodeComponent } from './contract-management-failure-code.component';

describe('ContractManagementFailureCodeComponent', () => {
  let component: ContractManagementFailureCodeComponent;
  let fixture: ComponentFixture<ContractManagementFailureCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractManagementFailureCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractManagementFailureCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
