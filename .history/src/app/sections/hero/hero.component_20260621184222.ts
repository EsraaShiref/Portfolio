import { Component, inject } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { personalInfo, contactInfo, cvFile } from '../../shared/data/portfolio.data';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-hero',
  imports: [ScrollRevealDirective],
  template: `
    <section class="hero" id="hero" aria-label="Introduction">
      <div class="hero__grid" aria-hidden="true"></div>

      <div class="container hero__container">
        <div class="hero__layout" appScrollReveal>
          <div class="hero__content">
            <p class="hero__greeting">
              <span class="hero__greeting-line"></span>
              Hi, my name is
            </p>
            <h1 class="hero__name">{{ personalInfo.name }}</h1>
            <h2 class="hero__title">{{ personalInfo.title }}</h2>
            <p class="hero__tagline">{{ personalInfo.tagline }}</p>
            <p class="hero__value-prop">{{ personalInfo.valueProp }}</p>

            <div class="hero__ctas">
              <a class="btn btn--primary" href="#projects">
                View Projects
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a class="btn btn--outline" [href]="cvUrl" download aria-label="Download CV">
                Download CV
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 15V3M8 15l4 4 4-4"/><path d="M3 21h18"/></svg>
              </a>
              <a class="btn btn--ghost" href="#contact">
                Contact
              </a>
            </div>

            <div class="hero__socials">
              <a href="https://github.com/{{ contactInfo.github }}" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/{{ contactInfo.linkedin }}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="mailto:{{ contactInfo.email }}" aria-label="Send email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4l-10 8L2 4"/></svg>
              </a>
            </div>
          </div>

          <div class="hero__photo-wrapper">
            <div class="hero__photo-frame">
              <img
                class="hero__photo"
                src="/src/assets/images/profile.jpg"
                alt="Esraa Ahmed Shiref"
                width="280"
                height="280"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="hero__scroll-indicator" aria-hidden="true">
        <span class="hero__scroll-text">Scroll</span>
        <div class="hero__scroll-line"></div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      overflow: hidden;
      padding: 6rem 0 4rem;
    }
    .hero__grid {
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(var(--grid-color) 1px, transparent 1px),
        linear-gradient(90deg, var(--grid-color) 1px, transparent 1px);
      background-size: var(--grid-size) var(--grid-size);
      mask-image: radial-gradient(ellipse 80% 60% at 50% 40%, black 20%, transparent 70%);
      -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 40%, black 20%, transparent 70%);
      pointer-events: none;
      animation: gridZoom var(--zoom-duration) ease-in-out infinite alternate;
    }
    @keyframes gridZoom {
      from { transform: scale(1); }
      to { transform: scale(1.03); }
    }
    .hero__container {
      position: relative;
      z-index: 1;
      width: 100%;
    }
    .hero__layout {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      gap: 3rem;
    }
    .hero__content {
      flex: 1;
    }
    .hero__greeting {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-family: var(--font-mono);
      font-size: 0.9rem;
      color: var(--accent);
      margin-bottom: 1.25rem;
    }
    .hero__greeting-line {
      display: block;
      width: 40px;
      height: 1px;
      background: var(--accent);
      opacity: 0.5;
    }
    .hero__name {
      font-family: var(--font-heading);
      font-size: clamp(2rem, 6vw, 4rem);
      font-weight: 800;
      color: var(--text-primary);
      line-height: 1.05;
      letter-spacing: -0.03em;
    }
    .hero__title {
      font-family: var(--font-heading);
      font-size: clamp(1.1rem, 3vw, 1.75rem);
      font-weight: 600;
      color: var(--text-secondary);
      margin-top: 0.5rem;
    }
    .hero__tagline {
      font-family: var(--font-mono);
      font-size: 0.9rem;
      color: var(--accent);
      margin-top: 0.75rem;
    }
    .hero__value-prop {
      font-size: 1rem;
      color: var(--text-secondary);
      line-height: 1.7;
      margin-top: 1rem;
      max-width: 540px;
    }
    .hero__ctas {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-top: 2.5rem;
    }
    .hero__socials {
      display: flex;
      gap: 1.25rem;
      margin-top: 2.5rem;
    }
    .hero__socials a {
      color: var(--text-secondary);
      transition: color var(--transition-fast), transform var(--transition-fast);
    }
    .hero__socials a:hover {
      color: var(--accent);
      transform: translateY(-2px);
    }

    .hero__photo-wrapper {
      flex-shrink: 0;
    }
    .hero__photo-frame {
      width: clamp(160px, 28vw, 260px);
      height: clamp(160px, 28vw, 260px);
      border-radius: 50%;
      overflow: hidden;
      border: 3px solid var(--border-accent);
      box-shadow: 0 0 24px var(--accent-glow);
      transition: transform 350ms ease-out, border-color 350ms ease-out, box-shadow 350ms ease-out;
      position: relative;
    }
    .hero__photo-frame::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: 50%;
      box-shadow: inset 0 0 20px rgba(0,0,0,0.3);
      pointer-events: none;
    }
    .hero__photo-frame:hover {
      transform: scale(1.05);
      border-color: var(--accent);
      box-shadow: 0 0 40px var(--accent-glow), 0 0 80px var(--accent-glow);
    }
    .hero__photo {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .hero__scroll-indicator {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      color: var(--text-secondary);
    }
    .hero__scroll-text {
      font-family: var(--font-mono);
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
    .hero__scroll-line {
      width: 1px;
      height: 40px;
      background: linear-gradient(to bottom, var(--text-secondary), transparent);
      animation: scrollPulse 2s ease-in-out infinite;
    }
    @keyframes scrollPulse {
      0%, 100% { opacity: 0.4; }
      50% { opacity: 1; }
    }

    .btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      border-radius: var(--radius-md);
      font-size: 0.92rem;
      font-weight: 600;
      transition: transform var(--transition-fast), box-shadow var(--transition-fast), background var(--transition-fast), border-color var(--transition-fast);
      text-decoration: none;
      white-space: nowrap;
    }
    .btn:hover {
      transform: scale(1.03) translateY(-1px);
    }
    .btn:active {
      transform: scale(0.97);
    }
    .btn--primary {
      background: var(--gradient-accent);
      color: #fff;
      border: none;
      box-shadow: 0 0 20px var(--accent-glow);
    }
    .btn--primary:hover {
      box-shadow: 0 0 32px rgba(0, 212, 255, 0.35);
      filter: brightness(1.08);
    }
    .btn--outline {
      background: transparent;
      color: var(--accent);
      border: 1px solid var(--border-accent);
    }
    .btn--outline:hover {
      background: var(--accent-muted);
    }
    .btn--ghost {
      background: transparent;
      color: var(--text-secondary);
      border: 1px solid transparent;
    }
    .btn--ghost:hover {
      color: var(--accent);
      border-color: var(--border-accent);
    }

    @media (min-width: 768px) {
      .hero__layout {
        flex-direction: row;
        align-items: center;
      }
      .hero__name {
        font-size: clamp(2.5rem, 5vw, 4.5rem);
      }
    }
    @media (max-width: 480px) {
      .hero__ctas {
        flex-direction: column;
        width: 100%;
      }
      .btn {
        width: 100%;
        justify-content: center;
      }
    }
  `],
})
export class HeroComponent {
  private scrollService = inject(ScrollService);
  readonly personalInfo = personalInfo;
  readonly contactInfo = contactInfo;
  readonly cvUrl = `assets/${cvFile}`;
}
