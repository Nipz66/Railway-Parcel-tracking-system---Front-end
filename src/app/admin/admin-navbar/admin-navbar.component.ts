import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AppRoutingModule } from '../../app.routes';

@Component({
  selector: 'app-admin-navbar',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './admin-navbar.component.html',
  styleUrl: './admin-navbar.component.css'
})
export class AdminNavbarComponent {

}
