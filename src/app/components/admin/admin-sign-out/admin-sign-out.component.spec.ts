import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSignOutComponent } from './admin-sign-out.component';

describe('AdminSignOutComponent', () => {
  let component: AdminSignOutComponent;
  let fixture: ComponentFixture<AdminSignOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSignOutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSignOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
