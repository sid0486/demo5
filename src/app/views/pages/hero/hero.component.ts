import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContactComponent } from "../contact/contact.component";
import { DestinationsComponent } from '../destinations/destinations.component';
import { ToursComponent } from '../tours/tours.component';
import { NewsletterComponent } from '../newsletter/newsletter.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';


@Component({
  selector: 'app-hero',
  imports: [ContactComponent,DestinationsComponent,NewsletterComponent,TestimonialsComponent,ToursComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent { }
