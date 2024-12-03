import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-staff-navbar',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './staff-navbar.component.html',
  styleUrl: './staff-navbar.component.css'
})
export class StaffNavbarComponent {
  }


