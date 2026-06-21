import { AfterViewInit, Directive, ElementRef, inject, input, signal } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
})
export class ScrollRevealDirective implements AfterViewInit {
  private readonly el = inject(ElementRef).nativeElement as HTMLElement;

  readonly threshold = input(0.15);

  private observer: IntersectionObserver | null = null;

  ngAfterViewInit(): void {
    this.el.style.opacity = '0';
    this.el.style.transform = 'translateY(24px)';
    this.el.style.transition = 'opacity 600ms ease, transform 600ms ease';

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.el.style.opacity = '1';
            this.el.style.transform = 'translateY(0)';
            this.observer?.unobserve(this.el);
          }
        }
      },
      { threshold: this.threshold() }
    );

    this.observer.observe(this.el);
  }
}
