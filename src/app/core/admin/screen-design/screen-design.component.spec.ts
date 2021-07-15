import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenDesignComponent } from './screen-design.component';

describe('ScreenDesignComponent', () => {
  let component: ScreenDesignComponent;
  let fixture: ComponentFixture<ScreenDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
