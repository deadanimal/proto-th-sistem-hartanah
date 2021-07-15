import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaseAdminMainComponent } from './lease-admin-main.component';

describe('LeaseAdminMainComponent', () => {
  let component: LeaseAdminMainComponent;
  let fixture: ComponentFixture<LeaseAdminMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaseAdminMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaseAdminMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
