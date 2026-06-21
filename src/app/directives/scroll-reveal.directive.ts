import { AfterViewInit, Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
})
export class ScrollRevealDirective implements AfterViewInit {
  private readonly el = inject(ElementRef).nativeElement as HTMLElement;

  readonly threshold = input(0.1);
  readonly staggerDelay = input(0);

  private prefersReducedMotion = false;

  ngAfterViewInit(): void {
    this.prefersReducedMotion = typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (this.prefersReducedMotion) {
      this.el.style.opacity = '1';
      this.el.style.transform = 'translateY(0)';
      return;
    }

    this.el.style.opacity = '0';
    this.el.style.transform = 'translateY(24px)';
    this.el.style.willChange = 'opacity, transform';

    const delay = this.staggerDelay();
    const transitionDuration = delay > 0 ? 500 : 600;
    this.el.style.transition = `opacity ${transitionDuration}ms ease-out, transform ${transitionDuration}ms ease-out`;
    if (delay > 0) {
      this.el.style.transitionDelay = `${delay}ms`;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.el.style.opacity = '1';
            this.el.style.transform = 'translateY(0)';
            setTimeout(() => {
              this.el.style.willChange = 'auto';
            }, transitionDuration + 100);
            observer.unobserve(this.el);
          }
        }
      },
      { threshold: this.threshold() }
    );

    observer.observe(this.el);
  }
}
