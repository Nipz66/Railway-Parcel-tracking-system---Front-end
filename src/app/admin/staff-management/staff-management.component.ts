import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import $ from 'jquery';
import 'datatables.net';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-staff-management',
  standalone: true,
  imports: [CommonModule, MatTableModule, RouterOutlet],
  templateUrl: './staff-management.component.html',
  styleUrl: './staff-management.component.css'
})
export class StaffManagementComponent implements AfterViewInit, OnDestroy {
  dataSource: any[] = [];
  private dataTable: any;

  constructor(private http: HttpClient) { }

  ngAfterViewInit(): void {
    this.staffData(); // Fetch and initialize table
  }

  ngOnDestroy(): void {
    if (this.dataTable) {
      this.dataTable.destroy(); // Properly destroy the table instance
    }
  }

  private staffData() {
    this.http.get<any[]>('http://localhost:8080/staff/get-all').subscribe(
      (data) => {
        this.dataSource = data;
        this.dataTable?.clear()?.destroy();
        this.initializeDataTable();
      },
      (error) => {
        console.error('Error fetching staff data:', error);
      }
    );
  }

  private initializeDataTable() {
    this.dataTable = $('#myTable').DataTable({
      data: this.dataSource,
      columns: [
        { data: 'id' },
        { data: 'firstName' },
        { data: 'lastName' },
        { data: 'address' },
        { data: 'phoneNumber' },
        { data: 'dob' },
        { data: 'email' },
        { data: 'station' },
        { data: 'role' },
        {
          data: null,
          render: (data, type, row) => `
            <button class="btn btn-sm btn-primary update-btn" data-id="${row.id}">Update</button>
            <button class="btn btn-sm btn-danger delete-btn" data-id="${row.id}">Delete</button>
          `
        }
      ]
    });

    this.addRowEventListeners();
  }

  private addRowEventListeners() {

    $('#myTable').on('click', '.update-btn', (event) => {
      const button = $(event.currentTarget);
      const id = button.data('id');
      if (id !== undefined) {
        this.updateStaff(id);
      }
    });


    $('#myTable').on('click', '.delete-btn', (event) => {
      const button = $(event.currentTarget);
      const id = button.data('id');
      if (id !== undefined) {
        this.deleteStaff(id);
      }
    });
  }

  private updateStaff(id: number) {
    console.log('Update clicked for ID:', id);

  }

  private deleteStaff(id: number) {
    if (confirm('Are you sure you want to delete this staff member?')) {
      this.http.delete(`http://localhost:8080/staff/delete-by-id/${id}`).subscribe(
        () => {
          alert('Staff member deleted successfully');
          this.staffData();
        },
        (error) => {
          console.error('Error deleting staff:', error);
          alert('Failed to delete staff member');
        }
      );
    }
  }
}
