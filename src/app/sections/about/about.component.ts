import { Component } from '@angular/core';
import { aboutNarrative } from '../../shared/data/portfolio.data';
import { SectionHeaderComponent } from '../../shared/ui/section-header/section-header.component';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  imports: [SectionHeaderComponent, ScrollRevealDirective],
  template: `
    <section class="section" id="about" aria-label="About me">
      <div class="container">
        <app-section-header
          number="01"
          title="About Me"
          subtitle="Engineering degree, AI passion, full-stack reach"
        ></app-section-header>

        <div class="about__grid" appScrollReveal>
          <div class="about__text">
            @for (paragraph of paragraphs; track paragraph) {
              <p>{{ paragraph }}</p>
            }
          </div>
          <div class="about__stats">
            <div appScrollReveal [staggerDelay]="0" class="stat-card">
              <span class="stat-card__number">89.23%</span>
              <span class="stat-card__label">B.Sc. Grade</span>
            </div>
            <div appScrollReveal [staggerDelay]="80" class="stat-card">
              <span class="stat-card__number">5+</span>
              <span class="stat-card__label">Technologies</span>
            </div>
            <div appScrollReveal [staggerDelay]="160" class="stat-card">
              <span class="stat-card__number">4</span>
              <span class="stat-card__label">Shipping Products</span>
            </div>
            <div appScrollReveal [staggerDelay]="240" class="stat-card">
              <span class="stat-card__number">2020</span>
              <span class="stat-card__label">Coding Since</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about__grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 3rem;
      align-items: start;
    }
    .about__text {
      max-width: 680px;
    }
    .about__text p {
      font-size: 1rem;
      line-height: 1.8;
      color: var(--text-secondary);
      margin-bottom: 1.25rem;
    }
    .about__stats {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      max-width: 400px;
    }
    .stat-card {
      padding: 1.5rem 1rem;
      border-radius: var(--radius-md);
      background: var(--bg-surface);
      border: 1px solid var(--border);
      text-align: center;
      transition: transform 200ms ease, border-color 200ms ease, box-shadow 200ms ease;
    }
    .stat-card:hover {
      transform: translateY(-4px) scale(1.02);
      border-color: var(--border-accent);
      box-shadow: var(--shadow-glow);
    }
    .stat-card__number {
      display: block;
      font-family: var(--font-heading);
      font-size: 1.75rem;
      font-weight: 700;
      color: var(--accent);
      line-height: 1.2;
    }
    .stat-card__label {
      display: block;
      font-size: 0.82rem;
      color: var(--text-secondary);
      margin-top: 0.25rem;
    }

    @media (min-width: 768px) {
      .about__grid {
        grid-template-columns: 1fr auto;
      }
    }
    @media (min-width: 1024px) {
      .about__text p {
        font-size: 1.05rem;
      }
      .stat-card {
        padding: 2rem 1.5rem;
      }
      .stat-card__number {
        font-size: 2rem;
      }
    }
  `],
})
export class AboutComponent {
  readonly paragraphs = aboutNarrative.split('\n\n');
}
