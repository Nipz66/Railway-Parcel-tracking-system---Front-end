import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StaffNavbarComponent } from "./staff/staff-navbar/staff-navbar.component";
import { ParcelReportComponent } from './staff/parcel-report/parcel-report.component';
import { StaffRegistationComponent } from "./admin/staff-registation/staff-registation.component";
import { NavBarComponent } from "./common/nav-bar/nav-bar.component";
import { AddParcelComponent } from "./staff/add-parcel/add-parcel.component";
import { AdminNavbarComponent } from "./admin/admin-navbar/admin-navbar.component";
import { StaffManagementComponent } from "./admin/staff-management/staff-management.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StaffNavbarComponent, ParcelReportComponent, StaffRegistationComponent, NavBarComponent, AddParcelComponent, AdminNavbarComponent, StaffManagementComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Railway-parcel-transport-system-front-end';
}
