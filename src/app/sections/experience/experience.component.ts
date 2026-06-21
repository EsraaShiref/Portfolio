import { Component } from '@angular/core';
import { experiences } from '../../shared/data/portfolio.data';
import { TimelineItemComponent } from '../../shared/ui/timeline-item/timeline-item.component';
import { SectionHeaderComponent } from '../../shared/ui/section-header/section-header.component';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-experience',
  imports: [TimelineItemComponent, SectionHeaderComponent, ScrollRevealDirective],
  template: `
    <section class="section" id="experience" aria-label="Work experience">
      <div class="container">
        <app-section-header
          number="04"
          title="Experience"
          subtitle="From mobile development at a startup to Gen AI internship at ITI"
        ></app-section-header>

        <div class="experience__timeline" appScrollReveal>
          @for (exp of experiences; track exp.company + exp.startDate) {
            <app-timeline-item [experience]="exp"></app-timeline-item>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .experience__timeline {
      max-width: 600px;
      padding-left: 0.5rem;
    }
  `],
})
export class ExperienceComponent {
  readonly experiences = experiences;
}
