export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  tagIcon: string;
  problem: string;
  solution: string;
  highlights: string[];
  techStack: string[];
  links: ProjectLink[];
  featured: boolean;
}

export interface ProjectLink {
  label: string;
  url: string;
  type: 'github' | 'demo' | 'case-study';
}

export const projects: Project[] = [
  {
    id: 'healthhub',
    title: 'HealthHub',
    subtitle: 'Mobile Healthcare Platform',
    tag: 'AI + Mobile + Full-Stack',
    tagIcon: 'medical',
    featured: true,
    problem:
      'Patients juggle between disconnected apps for doctor booking, nutrition tracking, and medical purchases — creating friction, missed appointments, and inconsistent health data.',
    solution:
      'Built a cross-platform React Native app with a Laravel backend that unifies three critical healthcare workflows into one seamless mobile experience.',
    highlights: [
      'Real-time doctor availability calendar with instant booking confirmation and notifications',
      'AI-powered food recognition via Clarifai API — snap a meal, get full nutrition breakdown through Spoonacular integration',
      'Integrated Stripe and PayPal checkout for secure medical e-commerce purchases',
    ],
    techStack: ['React Native', 'Laravel', 'Clarifai API', 'Spoonacular API', 'Stripe', 'PayPal'],
    links: [
      { label: 'GitHub', url: '#', type: 'github' },
    ],
  },
  {
    id: 'tasweeqar',
    title: 'Tasweeqar',
    subtitle: 'Bilingual Corporate Website',
    tag: 'Angular + i18n',
    tagIcon: 'globe',
    featured: false,
    problem:
      'A Saudi construction firm needed a modern digital presence serving both Arabic (RTL) and English (LTR) audiences without duplicating content or maintenance.',
    solution:
      'Production Angular 21 site with full bilingual internationalization, signal-based reactivity, and a custom SCSS design system.',
    highlights: [
      'Full AR/EN internationalization with seamless RTL/LTR layout switching',
      'Zero NgModules — pure standalone component architecture with signal-based reactivity',
      'Custom SCSS design system covering services, portfolio, team, and contact sections',
    ],
    techStack: ['Angular 21', 'TypeScript', 'SCSS', 'i18n'],
    links: [
      { label: 'GitHub', url: '#', type: 'github' },
    ],
  },
  {
    id: 'university-management',
    title: 'University Management System',
    subtitle: 'Academic Administration Platform',
    tag: 'Full-Stack Web',
    tagIcon: 'academic',
    featured: false,
    problem:
      'Manual student administration — paper attendance, grade sheets, and disparate course enrollment systems — creates inefficiency and data inconsistency across departments.',
    solution:
      'Full-stack ASP.NET MVC system with role-based authentication and complete CRUD operations for all academic workflows.',
    highlights: [
      'Role-based authentication and authorization for admin, faculty, and student portals',
      'Complete CRUD for students, courses, attendance tracking, and grade management',
      'Entity Framework-backed SQL Server with clean MVC architectural layering',
    ],
    techStack: ['ASP.NET MVC', 'C#', 'SQL Server', 'Entity Framework'],
    links: [
      { label: 'GitHub', url: '#', type: 'github' },
    ],
  },
  {
    id: 'employee-management',
    title: 'Employee Management System',
    subtitle: 'HR Operations Dashboard',
    tag: 'Full-Stack Web',
    tagIcon: 'briefcase',
    featured: false,
    problem:
      'HR teams lack a centralized view of employee records, making organizational management reactive instead of strategic.',
    solution:
      'Interactive ASP.NET dashboard with comprehensive employee record management and clean MVC architecture.',
    highlights: [
      'Interactive dashboard with real-time employee record management, search, and filtering',
      'Visual organizational analytics for informed HR decision-making',
      'Clean MVC architecture ensuring maintainability and scalability',
    ],
    techStack: ['ASP.NET', 'SQL Server', 'MVC'],
    links: [
      { label: 'GitHub', url: '#', type: 'github' },
    ],
  },
];
