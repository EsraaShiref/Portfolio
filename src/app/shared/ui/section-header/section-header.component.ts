import { Component, input } from '@angular/core';
import { Project } from '../../data/projects.data';

@Component({
  selector: 'app-section-header',
  template: `
    <div class="section-header" [class.section-header--centered]="centered()">
      @if (number()) {
        <span class="section-header__number">{{ number() }}</span>
      }
      <h2 class="section-header__title">{{ title() }}</h2>
      @if (subtitle()) {
        <p class="section-header__subtitle">{{ subtitle() }}</p>
      }
    </div>
  `,
  styles: [`
    .section-header {
      margin-bottom: 3rem;
    }
    .section-header--centered {
      text-align: center;
    }
    .section-header__number {
      display: inline-block;
      font-family: var(--font-mono);
      font-size: 0.85rem;
      font-weight: 500;
      color: var(--accent);
      margin-bottom: 0.5rem;
      letter-spacing: 0.05em;
    }
    .section-header__number::before {
      content: '/';
      margin-right: 0.25em;
    }
    .section-header__title {
      font-family: var(--font-heading);
      font-size: clamp(1.75rem, 4vw, 2.5rem);
      font-weight: 700;
      color: var(--text-primary);
      line-height: 1.2;
    }
    .section-header__subtitle {
      font-size: 1.05rem;
      color: var(--text-secondary);
      margin-top: 0.75rem;
      max-width: 600px;
      line-height: 1.6;
    }
    .section-header--centered .section-header__subtitle {
      margin-left: auto;
      margin-right: auto;
    }
  `],
})
export class SectionHeaderComponent {
  readonly title = input.required<string>();
  readonly subtitle = input<string>();
  readonly number = input<string>();
  readonly centered = input(false);
}
