import { Component } from '@angular/core';
import { FeaturesComponent } from "../features/features.component";
import { AboutComponent } from "../about/about.component";
import { FAQsComponent } from "../faqs/faqs.component";
import { ContactComponent } from "../contact/contact.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, FeaturesComponent, AboutComponent, FAQsComponent, ContactComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

}
