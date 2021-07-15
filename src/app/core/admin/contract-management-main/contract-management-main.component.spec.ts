import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractManagementMainComponent } from './contract-management-main.component';

describe('ContractManagementMainComponent', () => {
  let component: ContractManagementMainComponent;
  let fixture: ComponentFixture<ContractManagementMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractManagementMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractManagementMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
