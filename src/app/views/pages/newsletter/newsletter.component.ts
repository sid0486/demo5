import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  imports: [],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsletterComponent { }
