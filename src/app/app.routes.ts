import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { NgModule } from '@angular/core';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { AboutComponent } from './common/about/about.component';
import { FeaturesComponent } from './common/features/features.component';
import { FAQsComponent } from './common/faqs/faqs.component';
import { ContactComponent } from './common/contact/contact.component';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { StaffManagementComponent } from './admin/staff-management/staff-management.component';
import { StaffRegistationComponent } from './admin/staff-registation/staff-registation.component';
import { ParcelStatusComponent } from './admin/parcel-status/parcel-status.component';
import { StaffNavbarComponent } from './staff/staff-navbar/staff-navbar.component';
import { AddParcelComponent } from './staff/add-parcel/add-parcel.component';
import { ParcelReportComponent } from './staff/parcel-report/parcel-report.component';
import { ParcelCalcultorComponent } from './staff/parcel-calcultor/parcel-calcultor.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home', component: NavBarComponent
    },
    { path: 'about', component: AboutComponent },//home about
    { path: 'features', component: FeaturesComponent },//home feature
    { path: 'faqs', component: FAQsComponent },//home faqs
    { path: 'contact', component: ContactComponent },//home contact
    { path: 'admin-login', component: AdminLoginComponent },
    { path: '', redirectTo: '/admin-dashboard', pathMatch: 'full' },
    {
        path: 'admin-dashboard',
        component: AdminNavbarComponent,
        children: [
            { path: 'admin-home', component: AdminHomeComponent },
            { path: 'staff-registration', component: StaffRegistationComponent },
            { path: 'staff-management', component: StaffManagementComponent },
            { path: 'parcel-status-update', component: ParcelStatusComponent }
        ]
    },

    {
        path: 'staff-dashboard', component: StaffNavbarComponent
    },
    { path: 'add-parcel', component: AddParcelComponent },
    { path: 'parcel-report', component: ParcelReportComponent },
    { path: 'parcel-status-update', component: ParcelStatusComponent },
    { path: 'parcel-calculator', component: ParcelCalcultorComponent },
{ path: '**', redirectTo: '' } // Redirect to Home for any unknown routes
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }