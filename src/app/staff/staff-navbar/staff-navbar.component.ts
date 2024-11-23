import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-staff-navbar',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './staff-navbar.component.html',
  styleUrl: './staff-navbar.component.css'
})
export class StaffNavbarComponent {
  }


