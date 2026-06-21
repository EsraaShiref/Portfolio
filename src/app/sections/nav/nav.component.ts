import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-nav',
  template: `
    <nav class="nav" [class.nav--scrolled]="scrollService.isScrolled()" aria-label="Main navigation">
      <div class="container nav__container">
        <a class="nav__logo" href="#" (click)="scrollToTop($event)" aria-label="Go to top">
          <span class="nav__logo-bracket">&lt;</span>
          <span class="nav__logo-text">ES</span>
          <span class="nav__logo-bracket"> /&gt;</span>
        </a>

        <div class="nav__links" role="list">
          @for (link of navLinks; track link.href) {
            <a class="nav__link" [href]="link.href" role="listitem">{{ link.label }}</a>
          }
        </div>

        <button
          class="nav__theme-toggle"
          (click)="themeService.toggle()"
          [attr.aria-label]="'Switch to ' + (themeService.theme() === 'dark' ? 'light' : 'dark') + ' mode'"
        >
          @if (themeService.theme() === 'dark') {
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          } @else {
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          }
        </button>
      </div>
    </nav>
  `,
  styles: [`
    .nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
      padding: 1rem 0;
      transition: background var(--transition-base), box-shadow var(--transition-base), padding var(--transition-base);
      background: transparent;
    }
    .nav--scrolled {
      background: var(--bg-glass);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      box-shadow: 0 1px 0 var(--border);
      padding: 0.6rem 0;
    }
    .nav__container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .nav__logo {
      font-family: var(--font-mono);
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--text-primary);
      text-decoration: none;
      display: flex;
      align-items: center;
      transition: color var(--transition-fast);
    }
    .nav__logo:hover {
      color: var(--accent);
    }
    .nav__logo-bracket {
      color: var(--accent);
      opacity: 0.7;
    }
    .nav__logo-text {
      padding: 0 0.1em;
    }
    .nav__links {
      display: none;
      align-items: center;
      gap: 0.25rem;
    }
    .nav__link {
      position: relative;
      padding: 0.5rem 0.9rem;
      font-size: 0.88rem;
      font-weight: 500;
      color: var(--text-secondary);
      text-decoration: none;
      border-radius: var(--radius-sm);
      transition: color var(--transition-fast);
    }
    .nav__link::after {
      content: '';
      position: absolute;
      bottom: 4px;
      left: 50%;
      width: 0;
      height: 2px;
      background: var(--accent);
      transition: all var(--transition-fast);
      transform: translateX(-50%);
      border-radius: 1px;
    }
    .nav__link:hover {
      color: var(--accent);
    }
    .nav__link:hover::after {
      width: 60%;
    }
    .nav__theme-toggle {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: var(--radius-sm);
      color: var(--text-secondary);
      transition: color var(--transition-fast), background var(--transition-fast);
    }
    .nav__theme-toggle:hover {
      color: var(--accent);
      background: var(--accent-muted);
    }

    @media (min-width: 640px) {
      .nav__links {
        display: flex;
      }
    }
  `],
})
export class NavComponent {
  readonly themeService = inject(ThemeService);
  readonly scrollService = inject(ScrollService);

  readonly navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Stack', href: '#tech-stack' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  scrollToTop(event: Event): void {
    event.preventDefault();
    this.scrollService.scrollToTop();
  }
}
