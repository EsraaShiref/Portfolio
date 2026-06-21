import { Component, input } from '@angular/core';

export type SkillIcon = string;

@Component({
  selector: 'app-skill-chip',
  template: `
    <span class="skill-chip" [class.skill-chip--accent]="accent()">
      <svg class="skill-chip__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        @switch (icon()) {
          @case ('angular') {
            <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/><line x1="12" y1="22" x2="12" y2="15.5"/><polyline points="22 8.5 12 15.5 2 8.5"/>
          }
          @case ('react') {
            <circle cx="12" cy="12" r="2.5"/><ellipse cx="12" cy="12" rx="10" ry="3.5"/><ellipse cx="12" cy="12" rx="10" ry="3.5" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="3.5" transform="rotate(120 12 12)"/>
          }
          @case ('javascript') {
            <rect x="2" y="2" width="20" height="20" rx="2"/><path d="M8 16s1.5 2 4 2 4-2 4-2"/>
          }
          @case ('html5') {
            <polyline points="4 3 5 19 12 22 19 19 20 3"/><polyline points="8 7 16 7"/><polyline points="8 11 16 11"/><polyline points="10 15 12 15 14 15"/>
          }
          @case ('css3') {
            <polyline points="5 3 19 3 18 17 12 20 6 17"/><polyline points="8 7 16 7"/><polyline points="7 11 14 11"/><polyline points="10 15 12 15 14 15"/>
          }
          @case ('redux') {
            <circle cx="12" cy="5" r="2"/><circle cx="19" cy="19" r="2"/><circle cx="5" cy="19" r="2"/><path d="M12 7v3M12 10l4 7M12 10l-4 7"/>
          }
          @case ('dotnet') {
            <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 8v8M16 8v8M8 12h8"/>
          }
          @case ('laravel') {
            <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
          }
          @case ('database') {
            <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/>
          }
          @case ('firebase') {
            <path d="M4 20L12 4l8 16H4z"/><path d="M12 4l-2 10 2 2 2-2-2-10z"/>
          }
          @case ('sparkles') {
            <path d="M12 2l1.5 6.5L20 9l-5.5 4.5L16 20l-4-3.5L8 20l1.5-6.5L4 9l6.5-.5L12 2z"/>
          }
          @case ('api') {
            <path d="M4 6h16M4 12h16M4 18h16"/>
          }
          @case ('git') {
            <circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9M18 3v12M8 7l8 10"/>
          }
          @case ('postman') {
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M8 8l4 4-4 4M12 8l4 4-4 4"/>
          }
          @case ('figma') {
            <circle cx="9" cy="9" r="3"/><rect x="9" y="9" width="6" height="6" rx="3"/><rect x="9" y="15" width="6" height="6" rx="3"/><rect x="3" y="9" width="6" height="6" rx="3"/>
          }
          @case ('vscode') {
            <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 8v8M15 8v8"/>
          }
        }
      </svg>
      <span class="skill-chip__label">{{ label() }}</span>
    </span>
  `,
  styles: [`
    .skill-chip {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.4rem 1rem;
      border-radius: 100px;
      background: var(--bg-surface);
      border: 1px solid var(--border);
      font-size: 0.85rem;
      font-weight: 500;
      transition: transform var(--transition-fast), box-shadow var(--transition-fast), border-color var(--transition-fast), background var(--transition-fast);
      cursor: default;
      white-space: nowrap;
    }
    .skill-chip:hover {
      transform: scale(1.05);
      border-color: var(--accent);
      box-shadow: 0 0 16px var(--accent-glow);
      background: var(--bg-surface-hover);
    }
    .skill-chip--accent {
      border-color: var(--border-accent);
      background: var(--accent-muted);
    }
    .skill-chip__icon {
      flex-shrink: 0;
      color: var(--accent);
    }
    .skill-chip__label {
      color: var(--text-primary);
    }
  `],
})
export class SkillChipComponent {
  readonly label = input.required<string>();
  readonly icon = input<SkillIcon>('sparkles');
  readonly accent = input(false);
}
