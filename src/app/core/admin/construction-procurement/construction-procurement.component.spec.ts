import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionProcurementComponent } from './construction-procurement.component';

describe('ConstructionProcurementComponent', () => {
  let component: ConstructionProcurementComponent;
  let fixture: ComponentFixture<ConstructionProcurementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructionProcurementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructionProcurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
