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
  repoUrl?: string;
  liveUrl?: string;
  featured: boolean;
  filterTags: string[];
}

export const projects: Project[] = [
  {
    id: 'healthhub',
    title: 'HealthHub',
    subtitle: 'Mobile Healthcare Platform',
    tag: 'AI + Mobile + Full-Stack',
    tagIcon: 'medical',
    featured: false,
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
    repoUrl: 'https://github.com/EsraaShiref/HealthHub-Mobile-App',
    filterTags: ['mobile', 'ai', 'full-stack'],
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
    repoUrl: 'https://github.com/EsraaShiref/Tasweeqar',
    filterTags: ['web', 'angular'],
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
    repoUrl: 'https://github.com/EsraaShiref/University_Management_System.git',
    filterTags: ['web', 'full-stack'],
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
    repoUrl: 'https://github.com/EsraaShiref/EmployeeManagementSystem',
    filterTags: ['web', 'full-stack'],
  },
  {
    id: 'harfi',
    title: 'Harfi — Craftsmen Marketplace Platform',
    subtitle: 'ITI Graduation Project',
    tag: 'AI + Full-Stack + Real-Time',
    tagIcon: 'globe',
    featured: true,
    problem: 'Egyptian customers struggle to find trusted, verified craftsmen, while craftsmen lack a centralized platform to manage bookings, communication, and reputation.',
    solution: 'Led both frontend and backend development on a 5-person team to ship a full-stack, Arabic-first marketplace with real-time chat, an AI-powered craftsman-matching assistant, and a complete admin operations panel.',
    highlights: [
      'Frontend: Angular 21 standalone-component architecture, authentication, routing, bilingual RTL/LTR i18n, and theming',
      'Backend: ASP.NET Core Web API with JWT auth and SignalR hubs for real-time messaging and notifications',
      'RAG-based AI assistant for conversational craftsman search with image-based vision analysis',
      'Real-time chat with text, image, voice messages, and live presence/typing indicators',
    ],
    techStack: ['Angular 21', 'TypeScript', 'ASP.NET Core', 'SignalR', 'Bootstrap 5 RTL', 'ngx-translate', 'Chart.js'],
    liveUrl: 'https://harfii.runasp.net/',
    filterTags: ['full-stack', 'ai', 'web'],
  },
];
