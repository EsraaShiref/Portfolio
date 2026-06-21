import { Component } from '@angular/core';
import { skillGroups } from '../../shared/data/skills.data';
import { SkillChipComponent } from '../../shared/ui/skill-chip/skill-chip.component';
import { SectionHeaderComponent } from '../../shared/ui/section-header/section-header.component';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-tech-stack',
  imports: [SkillChipComponent, SectionHeaderComponent, ScrollRevealDirective],
  template: `
    <section class="section" id="tech-stack" aria-label="Technical skills">
      <div class="container">
        <app-section-header
          number="02"
          title="Tech Stack"
          subtitle="Technologies I use to ship production software"
          [centered]="true"
        ></app-section-header>

        <div class="tech-stack__grid">
          @for (group of skillGroups; track group.category) {
            <div class="tech-group" appScrollReveal>
              <h3 class="tech-group__title">{{ group.category }}</h3>
              <div class="tech-group__chips">
                @for (skill of group.skills; track skill.name) {
                  <app-skill-chip
                    [label]="skill.name"
                    [icon]="skill.icon"
                  ></app-skill-chip>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .tech-stack__grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
    .tech-group {
      padding: 1.5rem;
      border-radius: var(--radius-lg);
      background: var(--bg-surface);
      border: 1px solid var(--border);
      transition: border-color var(--transition-base), box-shadow var(--transition-base);
    }
    .tech-group:hover {
      border-color: var(--border-accent);
      box-shadow: var(--shadow-glow);
    }
    .tech-group__title {
      font-family: var(--font-heading);
      font-size: 1rem;
      font-weight: 600;
      color: var(--accent);
      margin-bottom: 1rem;
      letter-spacing: 0.02em;
    }
    .tech-group__chips {
      display: flex;
      flex-wrap: wrap;
      gap: 0.65rem;
    }

    @media (min-width: 600px) {
      .tech-stack__grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (min-width: 1024px) {
      .tech-stack__grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  `],
})
export class TechStackComponent {
  readonly skillGroups = skillGroups;
}
