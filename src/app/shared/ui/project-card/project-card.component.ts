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
      @if (project().featured) {
        <div class="project-card__ribbon" aria-hidden="true">Featured Project</div>
      }

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

        <div class="project-card__links">
          <a
            [href]="project().repoUrl"
            class="project-link project-link--code"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            View Code
          </a>
          @if (project().liveUrl) {
            <a
              [href]="project().liveUrl"
              class="project-link project-link--demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              Live Demo
            </a>
          }
        </div>
      </div>
    </article>
  `,
  styles: [`
    .project-card {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      padding: 2rem;
      border-radius: var(--radius-lg);
      background: var(--bg-surface);
      border: 1px solid var(--border);
      position: relative;
      overflow: hidden;
      transition: transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease;
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

    .project-card__ribbon {
      position: absolute;
      top: 1.5rem;
      right: -2.5rem;
      background: var(--gradient-accent);
      color: #fff;
      padding: 0.3rem 3rem;
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      transform: rotate(45deg);
      z-index: 2;
      box-shadow: 0 2px 8px rgba(0,0,0,0.2);
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
      transition: transform 200ms ease, border-color 200ms ease;
    }
    .project-tag:hover {
      transform: scale(1.05);
      border-color: var(--accent);
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
    .project-card--featured .project-card__title {
      font-size: 1.65rem;
      color: var(--accent);
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
      font-weight: 600;
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
      transition: transform 200ms ease, border-color 200ms ease;
    }
    .tech-badge:hover {
      transform: scale(1.05);
      border-color: var(--accent);
    }
    .project-card__links {
      display: flex;
      gap: 1rem;
      margin-top: 0.5rem;
      flex-wrap: wrap;
    }
    .project-link {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.5rem 1.1rem;
      font-size: 0.85rem;
      font-weight: 600;
      border-radius: var(--radius-sm);
      text-decoration: none;
      transition: transform 200ms ease, box-shadow 200ms ease, background 200ms ease;
    }
    .project-link:active {
      transform: scale(0.97);
    }
    .project-link--code {
      background: var(--accent-muted);
      color: var(--accent);
      border: 1px solid var(--border-accent);
    }
    .project-link--code:hover {
      background: rgba(0, 212, 255, 0.15);
      transform: translateY(-2px);
    }
    .project-link--demo {
      background: var(--gradient-accent);
      color: #fff;
      border: none;
    }
    .project-link--demo:hover {
      box-shadow: 0 0 16px var(--accent-glow);
      transform: translateY(-2px);
    }

    @media (min-width: 768px) {
      .project-card {
        padding: 2.5rem;
      }
    }
  `],
})
export class ProjectCardComponent {
  readonly project = input.required<Project>();
}
