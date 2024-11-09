import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelReportComponent } from './parcel-report.component';

describe('ParcelReportComponent', () => {
  let component: ParcelReportComponent;
  let fixture: ComponentFixture<ParcelReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParcelReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParcelReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
