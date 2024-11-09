import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StaffNavbarComponent } from "./staff/staff-navbar/staff-navbar.component";
import { ParcelReportComponent } from './staff/parcel-report/parcel-report.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StaffNavbarComponent, ParcelReportComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Railway-parcel-transport-system-front-end';
}
