import { Component } from '@angular/core';
import { projects } from '../../shared/data/projects.data';
import { ProjectCardComponent } from '../../shared/ui/project-card/project-card.component';
import { SectionHeaderComponent } from '../../shared/ui/section-header/section-header.component';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent, SectionHeaderComponent, ScrollRevealDirective],
  template: `
    <section class="section" id="projects" aria-label="Featured projects">
      <div class="container">
        <app-section-header
          number="03"
          title="Featured Projects"
          subtitle="Real products I've shipped — from AI-powered mobile apps to bilingual Angular platforms"
        ></app-section-header>

        <div class="projects__list">
          @for (project of featuredProjects; track project.id) {
            <div appScrollReveal>
              <app-project-card [project]="project"></app-project-card>
            </div>
          }
        </div>

        @if (otherProjects.length) {
          <div class="projects__divider">
            <span class="projects__divider-line"></span>
            <span class="projects__divider-text">More Projects</span>
            <span class="projects__divider-line"></span>
          </div>

          <div class="projects__grid">
            @for (project of otherProjects; track project.id) {
              <div class="projects__grid-item" appScrollReveal>
                <app-project-card [project]="project"></app-project-card>
              </div>
            }
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    .projects__list {
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }
    .projects__divider {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin: 4rem 0 2.5rem;
    }
    .projects__divider-line {
      flex: 1;
      height: 1px;
      background: var(--border);
    }
    .projects__divider-text {
      font-family: var(--font-mono);
      font-size: 0.82rem;
      color: var(--text-secondary);
      white-space: nowrap;
      letter-spacing: 0.04em;
    }
    .projects__grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    @media (min-width: 768px) {
      .projects__grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `],
})
export class ProjectsComponent {
  readonly featuredProjects = projects.filter(p => p.featured);
  readonly otherProjects = projects.filter(p => !p.featured);
}
