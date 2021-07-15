import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyLicensingComponent } from './safety-licensing.component';

describe('SafetyLicensingComponent', () => {
  let component: SafetyLicensingComponent;
  let fixture: ComponentFixture<SafetyLicensingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetyLicensingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyLicensingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
