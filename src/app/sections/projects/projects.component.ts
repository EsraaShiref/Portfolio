import { Component, computed, signal } from '@angular/core';
import { projects } from '../../shared/data/projects.data';
import { ProjectCardComponent } from '../../shared/ui/project-card/project-card.component';
import { SectionHeaderComponent } from '../../shared/ui/section-header/section-header.component';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

type FilterTag = 'all' | 'mobile' | 'web' | 'ai' | 'full-stack' | 'angular';

interface FilterOption {
  tag: FilterTag;
  label: string;
}

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent, SectionHeaderComponent, ScrollRevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  readonly allProjects = projects;
  readonly featuredProjects = projects.filter(p => p.featured);
  readonly otherProjects = projects.filter(p => !p.featured);

  readonly activeFilter = signal<FilterTag>('all');

  readonly filterOptions: FilterOption[] = [
    { tag: 'all', label: 'All' },
    { tag: 'mobile', label: 'Mobile' },
    { tag: 'web', label: 'Web' },
    { tag: 'ai', label: 'AI' },
    { tag: 'full-stack', label: 'Full-Stack' },
    { tag: 'angular', label: 'Angular' },
  ];

  readonly filteredOtherProjects = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'all') return this.otherProjects;
    return this.otherProjects.filter(p => p.filterTags.includes(filter));
  });
}
