import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-staff-registation',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule,RouterOutlet],
  templateUrl: './staff-registation.component.html',
  styleUrl: './staff-registation.component.css',
})
export class StaffRegistationComponent {

  public staff:any={
    firstName:"",
    lastName:"",
    address:"",
    phoneNumber:"",
    dob:"",
    email:"",
    station:"",
    role:"",
    password:""
  }

  constructor(private http:HttpClient){}

  public addStaff(){
    this.http.post("http://localhost:8080/staff/add-staff",this.staff).subscribe((data)=>{
      alert("Staff Registation Done!!!");
    })
  }
  
}
