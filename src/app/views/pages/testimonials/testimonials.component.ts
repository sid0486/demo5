import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsComponent { }
