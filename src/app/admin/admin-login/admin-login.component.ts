import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule , FormsModule ],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  admin = {
    email: '',
    password: ''
  };
  errorMessage: string | null = null;

  constructor(private http: HttpClient) {}

  onLogin() {
    const loginUrl = 'http://localhost:8080/admin/login';
    this.http.post(loginUrl, this.admin, { responseType: 'text' }).subscribe({
      next: (response) => {
        alert('Login successful!');
        console.log('Token:', response);
        localStorage.setItem('adminToken', response); // Save token
        this.errorMessage = null;
      },
      error: (error) => {
        console.error('Error:', error);
        this.errorMessage = 'Invalid email or password.';
      }
    });
  }
}