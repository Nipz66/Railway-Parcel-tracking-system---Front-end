import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import $ from 'jquery';
import 'datatables.net';

@Component({
  selector: 'app-staff-management',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './staff-management.component.html',
  styleUrl: './staff-management.component.css'
})
export class StaffManagementComponent implements AfterViewInit, OnDestroy {

  constructor(private http: HttpClient) { }

  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'address',
    'phoneNumber',
    'dob',
    'email',
    'station',
    'role'
  ];

  dataSource: any[] = [];
  private dataTable: any;

  ngAfterViewInit(): void {
    this.staffData();
  }
  ngOnDestroy(): void {
    if (this.dataTable) {
      this.dataTable.destroy();
    }
  }

  private staffData() {
    this.http.get<any[]>('http://localhost:8080/staff/get-all').subscribe(data => {
      this.dataSource = data;
      this.initializeDataTable();
    }, error => {
      console.error('Error fetching data:', error);
    });
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
      ]
    });
  }

}
