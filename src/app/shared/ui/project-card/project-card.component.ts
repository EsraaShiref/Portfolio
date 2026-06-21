import { Component, input } from '@angular/core';
import { Project } from '../../data/projects.data';

@Component({
  selector: 'app-project-card',
  template: `
    <article
      class="project-card"
      [class.project-card--featured]="project().featured"
      [attr.aria-label]="'Case study: ' + project().title"
    >
      <div class="project-card__mockup" aria-hidden="true">
        <div class="project-card__mockup-bar">
          <span></span><span></span><span></span>
        </div>
        <div class="project-card__mockup-screen">
          <div class="mockup-icon">
            @switch (project().tagIcon) {
              @case ('medical') {
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 12h6M12 9v6"/><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
              }
              @case ('globe') {
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              }
              @case ('academic') {
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M12 6v7M9 9h6"/></svg>
              }
              @case ('briefcase') {
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              }
            }
          </div>
        </div>
      </div>

      <div class="project-card__body">
        <div class="project-card__tag">
          <span class="project-tag" [class.project-tag--ai]="project().tag.includes('AI')">
            {{ project().tag }}
          </span>
        </div>

        <h3 class="project-card__title">{{ project().title }}</h3>
        <p class="project-card__subtitle">{{ project().subtitle }}</p>

        <p class="project-card__problem">
          <strong>Problem:</strong> {{ project().problem }}
        </p>

        <p class="project-card__solution">
          <strong>Solution:</strong> {{ project().solution }}
        </p>

        <ul class="project-card__highlights">
          @for (item of project().highlights; track item) {
            <li>{{ item }}</li>
          }
        </ul>

        <div class="project-card__tech">
          @for (tech of project().techStack; track tech) {
            <span class="tech-badge">{{ tech }}</span>
          }
        </div>

        @if (project().links.length) {
          <div class="project-card__links">
            @for (link of project().links; track link.label) {
              <a [href]="link.url" class="project-link" target="_blank" rel="noopener noreferrer">
                @if (link.type === 'github') {
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                }
                {{ link.label }}
              </a>
            }
          </div>
        }
      </div>
    </article>
  `,
  styles: [`
    .project-card {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
      padding: 2rem;
      border-radius: var(--radius-lg);
      background: var(--bg-surface);
      border: 1px solid var(--border);
      transition: transform var(--transition-base), box-shadow var(--transition-base), border-color var(--transition-base);
    }
    .project-card:hover {
      transform: translateY(-8px);
      box-shadow: var(--shadow-lg), var(--shadow-glow);
      border-color: var(--border-accent);
    }
    .project-card--featured {
      border-color: var(--border-accent);
      background: var(--gradient-surface);
      box-shadow: var(--shadow-md);
    }
    .project-card--featured:hover {
      box-shadow: var(--shadow-lg), var(--shadow-glow);
    }

    .project-card__mockup {
      border-radius: var(--radius-md);
      background: var(--bg-secondary);
      border: 1px solid var(--border);
      overflow: hidden;
      aspect-ratio: 16 / 10;
      display: flex;
      flex-direction: column;
    }
    .project-card__mockup-bar {
      display: flex;
      gap: 6px;
      padding: 0.75rem 1rem;
      background: var(--bg-surface);
      border-bottom: 1px solid var(--border);
    }
    .project-card__mockup-bar span {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--text-secondary);
      opacity: 0.5;
    }
    .project-card__mockup-screen {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-secondary);
      opacity: 0.4;
    }
    .project-card__body {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
    .project-card__tag {
      margin-bottom: 0.25rem;
    }
    .project-tag {
      display: inline-block;
      padding: 0.2rem 0.75rem;
      border-radius: 100px;
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      background: var(--accent-muted);
      color: var(--accent);
      border: 1px solid var(--border-accent);
    }
    .project-tag--ai {
      background: rgba(0, 212, 255, 0.12);
    }
    .project-card__title {
      font-family: var(--font-heading);
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text-primary);
    }
    .project-card__subtitle {
      font-size: 0.95rem;
      color: var(--text-secondary);
    }
    .project-card__problem,
    .project-card__solution {
      font-size: 0.92rem;
      line-height: 1.7;
      color: var(--text-secondary);
    }
    .project-card__problem strong,
    .project-card__solution strong {
      color: var(--text-primary);
    }
    .project-card__highlights {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 0;
    }
    .project-card__highlights li {
      position: relative;
      padding-left: 1.25rem;
      font-size: 0.9rem;
      color: var(--text-secondary);
      line-height: 1.6;
    }
    .project-card__highlights li::before {
      content: '▸';
      position: absolute;
      left: 0;
      color: var(--accent);
    }
    .project-card__tech {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 0.5rem;
    }
    .tech-badge {
      display: inline-block;
      padding: 0.25rem 0.75rem;
      border-radius: 100px;
      font-size: 0.78rem;
      font-family: var(--font-mono);
      font-weight: 500;
      background: var(--bg-secondary);
      color: var(--text-secondary);
      border: 1px solid var(--border);
    }
    .project-card__links {
      display: flex;
      gap: 1rem;
      margin-top: 0.5rem;
    }
    .project-link {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.88rem;
      font-weight: 500;
      color: var(--accent);
      transition: color var(--transition-fast);
    }
    .project-link:hover {
      color: var(--accent-hover);
    }

    @media (min-width: 768px) {
      .project-card {
        grid-template-columns: 1fr 1fr;
      }
      .project-card--featured {
        grid-template-columns: 1.2fr 1fr;
      }
    }
    @media (min-width: 1024px) {
      .project-card {
        padding: 2.5rem;
      }
    }
  `],
})
export class ProjectCardComponent {
  readonly project = input.required<Project>();
}
