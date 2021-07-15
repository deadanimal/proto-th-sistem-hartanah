import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyDataRoomComponent } from './property-data-room.component';

describe('PropertyDataRoomComponent', () => {
  let component: PropertyDataRoomComponent;
  let fixture: ComponentFixture<PropertyDataRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyDataRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyDataRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
