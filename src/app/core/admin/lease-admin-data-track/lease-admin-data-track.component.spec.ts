import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaseAdminDataTrackComponent } from './lease-admin-data-track.component';

describe('LeaseAdminDataTrackComponent', () => {
  let component: LeaseAdminDataTrackComponent;
  let fixture: ComponentFixture<LeaseAdminDataTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaseAdminDataTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaseAdminDataTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
