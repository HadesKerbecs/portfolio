import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tech-badge',
  standalone: true,
  templateUrl: './tech-badge.component.html',
  styleUrls: ['./tech-badge.component.scss'],
})
export class TechBadgeComponent {
  @Input() label!: string;
}
