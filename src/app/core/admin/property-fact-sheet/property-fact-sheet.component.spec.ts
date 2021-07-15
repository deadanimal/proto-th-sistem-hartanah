import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyFactSheetComponent } from './property-fact-sheet.component';

describe('PropertyFactSheetComponent', () => {
  let component: PropertyFactSheetComponent;
  let fixture: ComponentFixture<PropertyFactSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyFactSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyFactSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
