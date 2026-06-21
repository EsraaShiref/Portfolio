import { effect, Injectable, signal } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly theme = signal<Theme>('dark');

  constructor() {
    const saved = localStorage.getItem('theme') as Theme | null;
    if (saved === 'light' || saved === 'dark') {
      this.theme.set(saved);
    }
    this.applyTheme(this.theme());

    effect(() => {
      this.applyTheme(this.theme());
    });
  }

  toggle(): void {
    this.theme.update(t => (t === 'dark' ? 'light' : 'dark'));
  }

  private applyTheme(t: Theme): void {
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem('theme', t);
  }
}
