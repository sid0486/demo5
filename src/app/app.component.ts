import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./views/pages/partials/header/header.component";
import { FooterComponent } from "./views/pages/partials/footer/footer.component";
import { ToursComponent } from './views/pages/tours/tours.component';
import { NewsletterComponent } from './views/pages/newsletter/newsletter.component';
import { DestinationsComponent } from './views/pages/destinations/destinations.component';
import { ContactComponent } from './views/pages/contact/contact.component';
import { TestimonialsComponent } from './views/pages/testimonials/testimonials.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent,ToursComponent,NewsletterComponent,DestinationsComponent,ContactComponent,TestimonialsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo5';
}
