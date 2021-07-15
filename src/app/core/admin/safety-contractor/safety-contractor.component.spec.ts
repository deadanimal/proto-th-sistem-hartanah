import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyContractorComponent } from './safety-contractor.component';

describe('SafetyContractorComponent', () => {
  let component: SafetyContractorComponent;
  let fixture: ComponentFixture<SafetyContractorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetyContractorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyContractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
