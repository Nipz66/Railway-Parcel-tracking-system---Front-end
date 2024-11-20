import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-staff-registation',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './staff-registation.component.html',
  styleUrl: './staff-registation.component.css'
})
export class StaffRegistationComponent {
  @ViewChild('staffRegistation') staffRegistation!: NgForm;

}
