import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelCalcultorComponent } from './parcel-calcultor.component';

describe('ParcelCalcultorComponent', () => {
  let component: ParcelCalcultorComponent;
  let fixture: ComponentFixture<ParcelCalcultorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParcelCalcultorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParcelCalcultorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
