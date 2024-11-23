import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import $ from 'jquery';
import 'datatables.net';
import { StaffNavbarComponent } from "../staff-navbar/staff-navbar.component";

@Component({
  selector: 'app-parcel-report',
  standalone: true,
  templateUrl: './parcel-report.component.html',
  styleUrls: ['./parcel-report.component.css'],
  imports: [CommonModule, MatTableModule, StaffNavbarComponent]
})
export class ParcelReportComponent implements AfterViewInit, OnDestroy {
  displayedColumns: string[] = [
    'id',
    'senderName',
    'senderPhoneNumber',
    'senderGmail',
    'senderAddress',
    'receiverName',
    'receiverPhoneNumber',
    'receiverGmail',
    'receiverAddress',
    'weight',
    'description',
    'originStation',
    'destinationStation',
    'payment',
    'createdAt'
  ];

  dataSource: any[] = []; // 
  private dataTable: any;

  constructor(private http: HttpClient) { }

  ngAfterViewInit() {
    this.fetchData(); //
  }

  ngOnDestroy() {
    if (this.dataTable) {
      this.dataTable.destroy();
    }
  }

  private fetchData() {
    this.http.get<any[]>('http://localhost:8080/parcel/get-all').subscribe(data => {
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
        { data: 'senderName' },
        { data: 'senderPhoneNumber' },
        { data: 'senderGmail' },
        { data: 'senderAddress' },
        { data: 'receiverName' },
        { data: 'receiverPhoneNumber' },
        { data: 'receiverGmail' },
        { data: 'receiverAddress' },
        { data: 'weight' },
        { data: 'description' },
        { data: 'originStation' },
        { data: 'destinationStation' },
        { data: 'payment' },
        { data: 'createdAt' }
      ]
    });
  }
}