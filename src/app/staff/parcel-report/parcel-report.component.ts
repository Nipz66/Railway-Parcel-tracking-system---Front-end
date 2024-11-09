import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import $ from 'jquery';
import 'datatables.net';

@Component({
  selector: 'app-parcel-report',
  standalone: true,
  templateUrl: './parcel-report.component.html',
  styleUrls: ['./parcel-report.component.css'],
  imports: [CommonModule, MatTableModule]
})
export class ParcelReportComponent implements AfterViewInit, OnDestroy {
  displayedColumns: string[] = ['id', 'sender', 'receiver', 'status', 'dateShipped'];
  dataSource = [
    { id: 1, sender: 'Alice', receiver: 'Bob', status: 'Delivered', dateShipped: '2023-10-01' },
    { id: 2, sender: 'Charlie', receiver: 'David', status: 'In Transit', dateShipped: '2023-10-02' },
    { id: 3, sender: 'Eve', receiver: 'Frank', status: 'Pending', dateShipped: '2023-10-03' },
    { id: 4, sender: 'Grace', receiver: 'Heidi', status: 'Delivered', dateShipped: '2023-10-04' },
    { id: 5, sender: 'Ivan', receiver: 'Judy', status: 'Returned', dateShipped: '2023-10-05' },
    { id: 1, sender: 'Alice', receiver: 'Bob', status: 'Delivered', dateShipped: '2023-10-01' },
    { id: 2, sender: 'Charlie', receiver: 'David', status: 'In Transit', dateShipped: '2023-10-02' },
    { id: 3, sender: 'Eve', receiver: 'Frank', status: 'Pending', dateShipped: '2023-10-03' },
    { id: 4, sender: 'Grace', receiver: 'Heidi', status: 'Delivered', dateShipped: '2023-10-04' },
    { id: 5, sender: 'Ivan', receiver: 'Judy', status: 'Returned', dateShipped: '2023-10-05' },
    { id: 1, sender: 'Alice', receiver: 'Bob', status: 'Delivered', dateShipped: '2023-10-01' },
    { id: 2, sender: 'Charlie', receiver: 'David', status: 'In Transit', dateShipped: '2023-10-02' },
    { id: 3, sender: 'Eve', receiver: 'Frank', status: 'Pending', dateShipped: '2023-10-03' },
    { id: 4, sender: 'Grace', receiver: 'Heidi', status: 'Delivered', dateShipped: '2023-10-04' },
    { id: 5, sender: 'Ivan', receiver: 'Judy', status: 'Returned', dateShipped: '2023-10-05' },
    { id: 1, sender: 'Alice', receiver: 'Bob', status: 'Delivered', dateShipped: '2023-10-01' },
    { id: 2, sender: 'Charlie', receiver: 'David', status: 'In Transit', dateShipped: '2023-10-02' },
    { id: 3, sender: 'Eve', receiver: 'Frank', status: 'Pending', dateShipped: '2023-10-03' },
    { id: 4, sender: 'Grace', receiver: 'Heidi', status: 'Delivered', dateShipped: '2023-10-04' },
    { id: 5, sender: 'Ivan', receiver: 'Judy', status: 'Returned', dateShipped: '2023-10-05' },
    { id: 1, sender: 'Alice', receiver: 'Bob', status: 'Delivered', dateShipped: '2023-10-01' },
    { id: 2, sender: 'Charlie', receiver: 'David', status: 'In Transit', dateShipped: '2023-10-02' },
    { id: 3, sender: 'Eve', receiver: 'Frank', status: 'Pending', dateShipped: '2023-10-03' },
    { id: 4, sender: 'Grace', receiver: 'Heidi', status: 'Delivered', dateShipped: '2023-10-04' },
    { id: 5, sender: 'Ivan', receiver: 'Judy', status: 'Returned', dateShipped: '2023-10-05' },
    { id: 1, sender: 'Alice', receiver: 'Bob', status: 'Delivered', dateShipped: '2023-10-01' },
    { id: 2, sender: 'Charlie', receiver: 'David', status: 'In Transit', dateShipped: '2023-10-02' },
    { id: 3, sender: 'Eve', receiver: 'Frank', status: 'Pending', dateShipped: '2023-10-03' },
    { id: 4, sender: 'Grace', receiver: 'Heidi', status: 'Delivered', dateShipped: '2023-10-04' },
    { id: 5, sender: 'Ivan', receiver: 'Judy', status: 'Returned', dateShipped: '2023-10-05' },
    { id: 1, sender: 'Alice', receiver: 'Bob', status: 'Delivered', dateShipped: '2023-10-01' },
    { id: 2, sender: 'Charlie', receiver: 'David', status: 'In Transit', dateShipped: '2023-10-02' },
    { id: 3, sender: 'Eve', receiver: 'Frank', status: 'Pending', dateShipped: '2023-10-03' },
    { id: 4, sender: 'Grace', receiver: 'Heidi', status: 'Delivered', dateShipped: '2023-10-04' },
    { id: 5, sender: 'Ivan', receiver: 'Judy', status: 'Returned', dateShipped: '2023-10-05' },
    
  
  ];
  private dataTable: any;

  ngAfterViewInit() {
    this.initializeDataTable();
  }

  ngOnDestroy() {
    if (this.dataTable) {
      this.dataTable.destroy();
    }
  }

  private initializeDataTable() {
    this.dataTable = $('#myTable').DataTable({
      data: this.dataSource,
      columns: [
        { data: 'id' },
        { data: 'sender' },
        { data: 'receiver' },
        { data: 'status' },
        { data: 'dateShipped' }
      ]
    });
  }
}