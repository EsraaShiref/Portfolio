import { Component } from '@angular/core';
import { education } from '../../shared/data/portfolio.data';
import { SectionHeaderComponent } from '../../shared/ui/section-header/section-header.component';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-education',
  imports: [SectionHeaderComponent, ScrollRevealDirective],
  template: `
    <section class="section" id="education" aria-label="Education">
      <div class="container">
        <app-section-header
          number="05"
          title="Education"
          subtitle="Academic foundation in engineering, topped with an Excellent graduation project"
        ></app-section-header>

        <div class="edu__card" appScrollReveal>
          <div class="edu__header">
            <div class="edu__icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
                <path d="M12 6v7M9 9h6"/>
              </svg>
            </div>
            <div>
              <h3 class="edu__degree">{{ education.degree }}</h3>
              <p class="edu__institution">{{ education.institution }} · {{ education.location }}</p>
            </div>
          </div>

          <div class="edu__details">
            <div class="edu__detail">
              <span class="edu__detail-label">Period</span>
              <span class="edu__detail-value">{{ education.period }}</span>
            </div>
            <div class="edu__detail">
              <span class="edu__detail-label">Grade</span>
              <span class="edu__detail-value edu__detail-value--accent">{{ education.grade }}</span>
            </div>
          </div>

          <div class="edu__project">
            <span class="edu__project-label">Graduation Project</span>
            <p class="edu__project-text">{{ education.project }}</p>
            <span class="edu__project-grade">Grade: {{ education.projectGrade }}</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .edu__card {
      max-width: 700px;
      padding: 2rem;
      border-radius: var(--radius-lg);
      background: var(--bg-surface);
      border: 1px solid var(--border);
      transition: border-color var(--transition-base), box-shadow var(--transition-base);
    }
    .edu__card:hover {
      border-color: var(--border-accent);
      box-shadow: var(--shadow-glow);
    }
    .edu__header {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }
    .edu__icon {
      flex-shrink: 0;
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--radius-md);
      background: var(--accent-muted);
      color: var(--accent);
    }
    .edu__degree {
      font-family: var(--font-heading);
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--text-primary);
      line-height: 1.4;
    }
    .edu__institution {
      font-size: 0.9rem;
      color: var(--text-secondary);
      margin-top: 0.25rem;
    }
    .edu__details {
      display: flex;
      gap: 2rem;
      padding: 1rem 0;
      margin-bottom: 1rem;
      border-top: 1px solid var(--border);
      border-bottom: 1px solid var(--border);
    }
    .edu__detail {
      display: flex;
      flex-direction: column;
      gap: 0.15rem;
    }
    .edu__detail-label {
      font-size: 0.78rem;
      color: var(--text-secondary);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .edu__detail-value {
      font-family: var(--font-heading);
      font-size: 1rem;
      font-weight: 600;
      color: var(--text-primary);
    }
    .edu__detail-value--accent {
      color: var(--accent);
    }
    .edu__project-label {
      display: block;
      font-size: 0.78rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--accent);
      margin-bottom: 0.5rem;
    }
    .edu__project-text {
      font-size: 0.92rem;
      line-height: 1.7;
      color: var(--text-secondary);
    }
    .edu__project-grade {
      display: inline-block;
      margin-top: 0.75rem;
      padding: 0.25rem 0.75rem;
      border-radius: 100px;
      font-size: 0.78rem;
      font-weight: 600;
      background: var(--accent-muted);
      color: var(--accent);
      border: 1px solid var(--border-accent);
    }

    @media (max-width: 480px) {
      .edu__card {
        padding: 1.25rem;
      }
      .edu__details {
        flex-direction: column;
        gap: 1rem;
      }
    }
  `],
})
export class EducationComponent {
  readonly education = education;
}
