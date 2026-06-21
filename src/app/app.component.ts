import { Component } from '@angular/core';
import { NavComponent } from './sections/nav/nav.component';
import { HeroComponent } from './sections/hero/hero.component';
import { AboutComponent } from './sections/about/about.component';
import { TechStackComponent } from './sections/tech-stack/tech-stack.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { EducationComponent } from './sections/education/education.component';
import { ContactComponent } from './sections/contact/contact.component';
import { FooterComponent } from './sections/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    NavComponent,
    HeroComponent,
    AboutComponent,
    TechStackComponent,
    ProjectsComponent,
    ExperienceComponent,
    EducationComponent,
    ContactComponent,
    FooterComponent,
  ],
  template: `
    <app-nav></app-nav>
    <main>
      <app-hero id="hero"></app-hero>
      <app-about id="about"></app-about>
      <app-tech-stack id="tech-stack"></app-tech-stack>
      <app-projects id="projects"></app-projects>
      <app-experience id="experience"></app-experience>
      <app-education id="education"></app-education>
      <app-contact id="contact"></app-contact>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
    :host {
      display: block;
    }
  `],
})
export class AppComponent {}
