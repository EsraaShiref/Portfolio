import { Component, computed, signal } from '@angular/core';
import { projects } from '../../shared/data/projects.data';
import { ProjectCardComponent } from '../../shared/ui/project-card/project-card.component';
import { SectionHeaderComponent } from '../../shared/ui/section-header/section-header.component';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

type FilterTag = 'all' | 'mobile' | 'web' | 'ai' | 'full-stack' | 'angular';

interface FilterOption {
  tag: FilterTag;
  label: string;
}

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

        <div class="projects__filter" role="tablist" aria-label="Filter projects by type">
          @for (opt of filterOptions; track opt.tag) {
            <button
              class="filter-btn"
              [class.filter-btn--active]="activeFilter() === opt.tag"
              (click)="activeFilter.set(opt.tag)"
              role="tab"
              [attr.aria-selected]="activeFilter() === opt.tag"
            >
              {{ opt.label }}
            </button>
          }
        </div>

        <div class="projects__list">
          @for (project of featuredProjects; track project.id) {
            <div appScrollReveal>
              <app-project-card [project]="project"></app-project-card>
            </div>
          }
        </div>

        @if (filteredOtherProjects().length) {
          <div class="projects__divider">
            <span class="projects__divider-line"></span>
            <span class="projects__divider-text">More Projects</span>
            <span class="projects__divider-line"></span>
          </div>

          <div class="projects__grid">
            @for (project of filteredOtherProjects(); track project.id; let i = $index) {
              <div class="projects__grid-item" [style.--stagger-delay]="i * 70 + 'ms'" appScrollReveal [staggerDelay]="i * 70">
                <app-project-card [project]="project"></app-project-card>
              </div>
            }
          </div>
        } @else if (otherProjects.length) {
          <div class="projects__empty" appScrollReveal>
            <p>No projects match the selected filter.</p>
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

    .projects__filter {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 2.5rem;
      justify-content: center;
    }
    .filter-btn {
      padding: 0.45rem 1.2rem;
      border-radius: 100px;
      font-size: 0.84rem;
      font-weight: 500;
      font-family: var(--font-mono);
      background: var(--bg-surface);
      color: var(--text-secondary);
      border: 1px solid var(--border);
      cursor: pointer;
      transition: all 200ms ease;
    }
    .filter-btn:hover {
      border-color: var(--border-accent);
      color: var(--accent);
    }
    .filter-btn--active {
      background: var(--accent-muted);
      border-color: var(--accent);
      color: var(--accent);
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
    .projects__grid-item {
      transition: opacity 300ms ease, transform 300ms ease;
    }
    .projects__empty {
      text-align: center;
      padding: 3rem 0;
      color: var(--text-secondary);
      font-family: var(--font-mono);
      font-size: 0.9rem;
    }

    @media (min-width: 768px) {
      .projects__grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `],
})
export class ProjectsComponent {
  readonly allProjects = projects;
  readonly featuredProjects = projects.filter(p => p.featured);
  readonly otherProjects = projects.filter(p => !p.featured);

  readonly activeFilter = signal<FilterTag>('all');

  readonly filterOptions: FilterOption[] = [
    { tag: 'all', label: 'All' },
    { tag: 'mobile', label: 'Mobile' },
    { tag: 'web', label: 'Web' },
    { tag: 'ai', label: 'AI' },
    { tag: 'full-stack', label: 'Full-Stack' },
    { tag: 'angular', label: 'Angular' },
  ];

  readonly filteredOtherProjects = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'all') return this.otherProjects;
    return this.otherProjects.filter(p => p.filterTags.includes(filter));
  });
}
