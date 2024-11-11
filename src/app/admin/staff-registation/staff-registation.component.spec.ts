import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffRegistationComponent } from './staff-registation.component';

describe('StaffRegistationComponent', () => {
  let component: StaffRegistationComponent;
  let fixture: ComponentFixture<StaffRegistationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffRegistationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffRegistationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
