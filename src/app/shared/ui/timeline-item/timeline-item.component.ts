import { Component, input } from '@angular/core';
import { Experience } from '../../data/portfolio.data';

@Component({
  selector: 'app-timeline-item',
  template: `
    <div class="timeline-item">
      <div class="timeline-item__dot" aria-hidden="true">
        <div class="timeline-item__dot-inner"></div>
      </div>
      <div class="timeline-item__line" aria-hidden="true"></div>
      <div class="timeline-item__content">
        <div class="timeline-item__meta">
          <span class="timeline-item__date">{{ experience().startDate }} – {{ experience().endDate }}</span>
          <span class="timeline-item__type" [class.timeline-item__type--internship]="experience().type === 'internship'">
            {{ experience().type === 'internship' ? 'Internship' : 'Professional' }}
          </span>
        </div>
        <h3 class="timeline-item__role">{{ experience().role }}</h3>
        <p class="timeline-item__company">{{ experience().company }} · {{ experience().location }}</p>
        <ul class="timeline-item__highlights">
          @for (item of experience().highlights; track item) {
            <li>{{ item }}</li>
          }
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .timeline-item {
      display: flex;
      gap: 1.5rem;
      position: relative;
      padding-bottom: 2.5rem;
    }
    .timeline-item:last-child {
      padding-bottom: 0;
    }
    .timeline-item:last-child .timeline-item__line {
      display: none;
    }
    .timeline-item__dot {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-shrink: 0;
      width: 20px;
    }
    .timeline-item__dot-inner {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: var(--accent);
      box-shadow: 0 0 8px var(--accent-glow);
      margin-top: 6px;
    }
    .timeline-item__line {
      position: absolute;
      left: 9px;
      top: 24px;
      bottom: 0;
      width: 2px;
      background: var(--border);
    }
    .timeline-item__content {
      flex: 1;
      min-width: 0;
    }
    .timeline-item__meta {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 0.5rem;
    }
    .timeline-item__date {
      font-family: var(--font-mono);
      font-size: 0.82rem;
      color: var(--accent);
    }
    .timeline-item__type {
      font-size: 0.7rem;
      padding: 0.15rem 0.5rem;
      border-radius: 100px;
      background: var(--accent-muted);
      color: var(--accent);
      text-transform: uppercase;
      letter-spacing: 0.04em;
      font-weight: 600;
    }
    .timeline-item__role {
      font-family: var(--font-heading);
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--text-primary);
    }
    .timeline-item__company {
      font-size: 0.9rem;
      color: var(--text-secondary);
      margin-top: 0.15rem;
    }
    .timeline-item__highlights {
      list-style: none;
      padding: 0;
      margin-top: 0.75rem;
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }
    .timeline-item__highlights li {
      position: relative;
      padding-left: 1.1rem;
      font-size: 0.88rem;
      color: var(--text-secondary);
      line-height: 1.6;
    }
    .timeline-item__highlights li::before {
      content: '▸';
      position: absolute;
      left: 0;
      color: var(--accent);
    }
  `],
})
export class TimelineItemComponent {
  readonly experience = input.required<Experience>();
}
