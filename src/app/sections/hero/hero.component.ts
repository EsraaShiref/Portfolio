import { Component, inject } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { personalInfo, contactInfo } from '../../shared/data/portfolio.data';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-hero',
  imports: [ScrollRevealDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  private scrollService = inject(ScrollService);
  readonly personalInfo = personalInfo;
  readonly contactInfo = contactInfo;
}
