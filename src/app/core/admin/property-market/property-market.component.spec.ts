import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyMarketComponent } from './property-market.component';

describe('PropertyMarketComponent', () => {
  let component: PropertyMarketComponent;
  let fixture: ComponentFixture<PropertyMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
