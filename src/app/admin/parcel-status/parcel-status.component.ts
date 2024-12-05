import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parcel-status',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './parcel-status.component.html',
  styleUrl: './parcel-status.component.css'
})
export class ParcelStatusComponent implements OnInit {
  parcels: any[] = []; // Define parcels as an array

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Specify the expected response type as 'any[]'
    this.http.get<any[]>('/admin/parcels').subscribe(
      (data) => {
        this.parcels = data; // Populate parcels array with data
      },
      (error) => {
        console.error('Error fetching parcels:', error);
      }
    );
  }

  updateStatus(parcel: any) {
    // Update the status of a specific parcel
    this.http.put(`/admin/parcels/${parcel.id}/update-status`, {
      status: parcel.status,
      remarks: 'Status updated by admin.'
    }).subscribe(
      () => {
        alert('Status updated successfully!');
      },
      (error) => {
        console.error('Error updating status:', error);
      }
    );
  }

}
