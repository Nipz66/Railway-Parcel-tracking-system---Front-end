import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import DataTable from 'datatables.net-dt';

@Component({
  selector: 'app-parcel-report',
  standalone: true,
  templateUrl: './parcel-report.component.html',
  styleUrls: ['./parcel-report.component.css'],
  imports:[FormsModule]

})
export class ParcelReportComponent implements AfterViewInit, OnDestroy {
  private dataTable: any;
  public parcels: any[] = [];

  constructor() {
    // Sample data
    this.parcels = [
      { id: 1, sender: 'Alice', receiver: 'Bob', status: 'Delivered', dateShipped: '2023-10-01' },
      { id: 2, sender: 'Charlie', receiver: 'David', status: 'In Transit', dateShipped: '2023-10-02' },
      { id: 3, sender: 'Eve', receiver: 'Frank', status: 'Pending', dateShipped: '2023-10-03' },
      { id: 4, sender: 'Grace', receiver: 'Heidi', status: 'Delivered', dateShipped: '2023-10-04' },
      { id: 5, sender: 'Ivan', receiver: 'Judy', status: 'Returned', dateShipped: '2023-10-05' }
    ];
  }

  ngAfterViewInit() {
    this.initializeDataTable();
  }

  ngOnDestroy() {
    // Clean up the DataTable instance to avoid memory leaks
    if (this.dataTable) {
      this.dataTable.destroy();
    }
  }

  initializeDataTable() {
    this.dataTable = new DataTable('#parcelTable', {
      data: this.parcels,
      columns: [
        { title: 'Parcel ID', data: 'id' },
        { title: 'Sender', data: 'sender' },
        { title: 'Receiver', data: 'receiver' },
        { title: 'Status', data: 'status' },
        { title: 'Date Shipped', data: 'dateShipped' }
      ]
    });
  }
}