import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parcel-calcultor',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './parcel-calcultor.component.html',
  styleUrl: './parcel-calcultor.component.css'
})
export class ParcelCalcultorComponent {
  distance: number = 0;
  weight: number = 0;
  parcelValue: number = 0;
  isExpress: boolean = false;
  specialItem: string = '';
  costBreakdown: any = null;

  rates = [
    { maxKm: 25, baseRate: 50 },
    { maxKm: 40, baseRate: 53 },
    { maxKm: 55, baseRate: 56 },
    { maxKm: 70, baseRate: 59 },
    { maxKm: 85, baseRate: 62 },
    { maxKm: 100, baseRate: 64 },
    { maxKm: 115, baseRate: 67 },
    { maxKm: 130, baseRate: 70 },
    { maxKm: 145, baseRate: 74 },
    { maxKm: 160, baseRate: 78 },
    { maxKm: 175, baseRate: 83 },
    { maxKm: 190, baseRate: 88 },
    { maxKm: 205, baseRate: 93 },
    { maxKm: 220, baseRate: 98 },
    { maxKm: 235, baseRate: 104 },
    { maxKm: 250, baseRate: 110 },
  ];

  calculateCost() {
    // Base rate calculation
    const rate = this.rates.find((r) => this.distance <= r.maxKm)?.baseRate;
    if (!rate) {
      alert('Distance exceeds the maximum supported range.');
      return;
    }

    const weightFactor = Math.ceil(this.weight / 5);
    const baseCost = rate * weightFactor;

    // Express train cost
    const expressCost = this.isExpress ? baseCost * 2 : 0;

    // Special item charges
    let specialItemCharge = 0;
    if (this.specialItem === 'fragile') specialItemCharge = baseCost * 0.5;
    else if (this.specialItem === 'furniture') specialItemCharge = baseCost * 3;

    // Insurance charges
    let insurance = 0;
    if (this.parcelValue > 1000 && this.parcelValue <= 5000)
      insurance = this.parcelValue * 0.01;
    else if (this.parcelValue > 5000 && this.parcelValue <= 10000)
      insurance = this.parcelValue * 0.015;
    else if (this.parcelValue > 10000 && this.parcelValue <= 20000)
      insurance = this.parcelValue * 0.02;
    else if (this.parcelValue > 20000) insurance = this.parcelValue * 0.03;

    // Total cost calculation
    const total = baseCost + expressCost + specialItemCharge + insurance;

    // Update cost breakdown
    this.costBreakdown = {
      baseCost,
      expressCost,
      specialItemCharge,
      insurance,
      total,
    };
  }
}
