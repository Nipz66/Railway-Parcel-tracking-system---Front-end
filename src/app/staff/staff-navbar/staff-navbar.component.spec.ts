import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffNavbarComponent } from './staff-navbar.component';

describe('StaffNavbarComponent', () => {
  let component: StaffNavbarComponent;
  let fixture: ComponentFixture<StaffNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
