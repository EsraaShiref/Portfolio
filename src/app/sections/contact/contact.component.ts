import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { contactInfo } from '../../shared/data/portfolio.data';
import { SectionHeaderComponent } from '../../shared/ui/section-header/section-header.component';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, SectionHeaderComponent, ScrollRevealDirective],
  template: `
    <section class="section" id="contact" aria-label="Contact me">
      <div class="container">
        <app-section-header
          number="06"
          title="Let's Connect"
          subtitle="Have a project in mind or just want to say hi? I'm always open to new opportunities."
          [centered]="true"
        ></app-section-header>

        <div class="contact__grid" appScrollReveal>
          <div class="contact__info">
            <h3 class="contact__info-title">Get in touch</h3>

            <div class="contact__item">
              <div class="contact__item-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4l-10 8L2 4"/></svg>
              </div>
              <div>
                <span class="contact__item-label">Email</span>
                <a class="contact__item-value" href="mailto:{{ contactInfo.email }}">{{ contactInfo.email }}</a>
              </div>
            </div>

            <div class="contact__item">
              <div class="contact__item-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <span class="contact__item-label">Phone</span>
                <a class="contact__item-value" href="tel:{{ contactInfo.phone }}">{{ contactInfo.phone }}</a>
              </div>
            </div>

            <div class="contact__item">
              <div class="contact__item-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <span class="contact__item-label">Location</span>
                <span class="contact__item-value">{{ contactInfo.location }}</span>
              </div>
            </div>

            <div class="contact__socials">
              <a href="https://github.com/{{ contactInfo.github }}" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
              <a href="https://linkedin.com/in/{{ contactInfo.linkedin }}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          <form class="contact__form" (ngSubmit)="onSubmit()" #contactForm="ngForm" aria-label="Contact form">
            <div class="form-field">
              <label class="form-field__label" for="name">Name</label>
              <input
                class="form-field__input"
                id="name"
                name="name"
                type="text"
                required
                [(ngModel)]="formData.name"
                placeholder="Your name"
                [attr.aria-required]="true"
              />
            </div>
            <div class="form-field">
              <label class="form-field__label" for="email">Email</label>
              <input
                class="form-field__input"
                id="email"
                name="email"
                type="email"
                required
                [(ngModel)]="formData.email"
                placeholder="your@email.com"
                [attr.aria-required]="true"
              />
            </div>
            <div class="form-field">
              <label class="form-field__label" for="message">Message</label>
              <textarea
                class="form-field__input form-field__input--textarea"
                id="message"
                name="message"
                required
                [(ngModel)]="formData.message"
                placeholder="Tell me about your project or opportunity..."
                rows="4"
                [attr.aria-required]="true"
              ></textarea>
            </div>
            <button
              class="btn btn--primary contact__submit"
              type="submit"
              [disabled]="!contactForm.valid || submitted()"
            >
              @if (submitted()) {
                <span>Message sent ✓</span>
              } @else {
                <span>Send Message</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              }
            </button>
            @if (submitted()) {
              <p class="contact__form-note" role="status">Thanks! This form is frontend-only — backend integration placeholder.</p>
            }
          </form>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact__grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 3rem;
      max-width: 900px;
      margin: 0 auto;
    }
    .contact__info-title {
      font-family: var(--font-heading);
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 1.5rem;
    }
    .contact__item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem 0;
    }
    .contact__item + .contact__item {
      border-top: 1px solid var(--border);
    }
    .contact__item-icon {
      flex-shrink: 0;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--radius-sm);
      background: var(--accent-muted);
      color: var(--accent);
    }
    .contact__item-label {
      display: block;
      font-size: 0.78rem;
      color: var(--text-secondary);
    }
    .contact__item-value {
      font-size: 0.92rem;
      color: var(--text-primary);
      text-decoration: none;
    }
    .contact__item-value:hover {
      color: var(--accent);
    }
    .contact__socials {
      display: flex;
      gap: 1rem;
      margin-top: 1.5rem;
    }
    .contact__socials a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      border-radius: var(--radius-sm);
      color: var(--text-secondary);
      border: 1px solid var(--border);
      transition: all var(--transition-fast);
    }
    .contact__socials a:hover {
      color: var(--accent);
      border-color: var(--border-accent);
      background: var(--accent-muted);
      transform: translateY(-2px);
    }
    .contact__form {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      padding: 2rem;
      border-radius: var(--radius-lg);
      background: var(--bg-surface);
      border: 1px solid var(--border);
    }
    .form-field {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }
    .form-field__label {
      font-size: 0.85rem;
      font-weight: 500;
      color: var(--text-secondary);
    }
    .form-field__input {
      padding: 0.8rem 1rem;
      border-radius: var(--radius-sm);
      border: 1px solid var(--border);
      background: var(--bg-primary);
      color: var(--text-primary);
      font-size: 0.92rem;
      transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
    }
    .form-field__input::placeholder {
      color: var(--text-secondary);
      opacity: 0.5;
    }
    .form-field__input:focus {
      outline: none;
      border-color: var(--accent);
      box-shadow: 0 0 0 3px var(--accent-glow);
    }
    .form-field__input--textarea {
      resize: vertical;
      min-height: 100px;
      font-family: var(--font-body);
    }
    .contact__submit {
      align-self: flex-start;
    }
    .contact__submit:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .contact__form-note {
      font-size: 0.82rem;
      color: var(--text-secondary);
      font-style: italic;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      border-radius: var(--radius-md);
      font-size: 0.92rem;
      font-weight: 600;
      transition: all var(--transition-fast);
      text-decoration: none;
      white-space: nowrap;
      border: none;
    }
    .btn--primary {
      background: var(--gradient-accent);
      color: #fff;
      box-shadow: 0 0 20px var(--accent-glow);
      cursor: pointer;
    }
    .btn--primary:hover:not(:disabled) {
      box-shadow: 0 0 32px rgba(0, 212, 255, 0.3);
      transform: translateY(-1px);
    }

    @media (min-width: 768px) {
      .contact__grid {
        grid-template-columns: 1fr 1.2fr;
      }
    }
  `],
})
export class ContactComponent {
  readonly contactInfo = contactInfo;

  readonly formData = {
    name: '',
    email: '',
    message: '',
  };

  readonly submitted = signal(false);

  onSubmit(): void {
    this.submitted.set(true);
  }
}
