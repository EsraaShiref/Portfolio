import { Component } from '@angular/core';
import { aboutNarrative } from '../../shared/data/portfolio.data';
import { SectionHeaderComponent } from '../../shared/ui/section-header/section-header.component';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  imports: [SectionHeaderComponent, ScrollRevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly paragraphs = aboutNarrative.split('\n\n');
}
