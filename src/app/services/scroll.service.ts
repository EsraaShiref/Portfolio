import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  readonly scrollY = signal(0);
  readonly isScrolled = signal(false);

  private readonly threshold = 60;

  constructor() {
    if (typeof window !== 'undefined') {
      this.onScroll();
      window.addEventListener('scroll', () => this.onScroll(), { passive: true });
    }
  }

  private onScroll(): void {
    const y = window.scrollY;
    this.scrollY.set(y);
    this.isScrolled.set(y > this.threshold);
  }

  scrollToElement(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
