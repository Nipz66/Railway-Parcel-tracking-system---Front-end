import { Component } from '@angular/core';
import { FeaturesComponent } from "../features/features.component";
import { AboutComponent } from "../about/about.component";
import { FAQsComponent } from "../faqs/faqs.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [FeaturesComponent, AboutComponent, FAQsComponent, ContactComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

}
