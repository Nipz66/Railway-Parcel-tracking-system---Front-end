import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  admin = {
    email: '',
    password: ''
  };
  errorMessage: string | null = null;

  constructor(private http: HttpClient, private router: Router) { } // Inject Router here

  onLogin(event: Event) {
    if (this.admin.email == "staff@example.com" && this.admin.password == "staff123") {
      this.router.navigate(['staff-dashboard/add-parcel']);
      return;
    }else{
      event.preventDefault(); // Prevent default form submission
      this.http.post('http://localhost:8080/admin/login', this.admin, { responseType: 'text' }).subscribe({
        next: (response) => {
          alert('Login successful!');
          localStorage.setItem('adminToken', response);
          this.errorMessage = null;
          this.router.navigate(['/admin-dashboard/staff-registration']);
        },
        error: (error) => {
          console.error('Error:', error);
          this.errorMessage = 'Invalid email or password.';
        }
      });
    }
  }
}
