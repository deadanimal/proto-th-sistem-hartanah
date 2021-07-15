import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyAnalyticalComponent } from './property-analytical.component';

describe('PropertyAnalyticalComponent', () => {
  let component: PropertyAnalyticalComponent;
  let fixture: ComponentFixture<PropertyAnalyticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyAnalyticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyAnalyticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
