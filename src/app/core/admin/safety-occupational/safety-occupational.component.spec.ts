import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyOccupationalComponent } from './safety-occupational.component';

describe('SafetyOccupationalComponent', () => {
  let component: SafetyOccupationalComponent;
  let fixture: ComponentFixture<SafetyOccupationalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetyOccupationalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyOccupationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
