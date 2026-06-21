export interface Experience {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  highlights: string[];
  type: 'work' | 'internship';
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  project: string;
  projectGrade: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  location: string;
}

export const personalInfo = {
  name: 'Esraa Ahmed Shiref',
  title: 'Full-Stack Developer',
  tagline: 'Angular · React Native · ASP.NET Core',
  valueProp: 'Building scalable web & mobile applications with Generative AI integration.',
  positioning: 'Full-Stack Developer skilled in Angular, React Native, and ASP.NET Core, with hands-on experience building scalable web and mobile applications. Passionate about integrating Generative AI into real-world products.',
};

export const aboutNarrative =
  'I bridge the gap between engineering discipline and creative problem-solving. With a B.Sc. in Computers and Automatic Control Engineering from Tanta University (Excellent, 89.23%), I approach software as a full-stack architect — not just a coder.\n\n' +
  'My graduation project — a full-stack healthcare platform with AI-based meal analysis — sparked my passion for weaving Generative AI into practical products. Whether it\'s a React Native app serving patients or an Angular dashboard serving a construction firm, I care about the same thing: shipping products that work, at scale, with clean code.\n\n' +
  'I\'m fluent across the stack: Angular and React Native on the frontend, ASP.NET Core and Laravel on the backend, and SQL Server, PostgreSQL, and Firebase for data. I speak Arabic natively, English professionally, and TypeScript fluently.';

export const contactInfo: ContactInfo = {
  email: 'Israashiref@gmail.com',
  phone: '+20 102 949 6150',
  github: 'EsraaShiref',
  linkedin: 'sraa-shiref',
  location: 'Cairo, Egypt',
};

export const experiences: Experience[] = [
  {
    role: 'Full-Stack Web & Gen AI Development Intern',
    company: 'ITI (Information Technology Institute)',
    location: 'Tanta, Egypt',
    startDate: 'Jan 2026',
    endDate: 'May 2026',
    type: 'internship',
    highlights: [
      'Intensive training in ASP.NET Core, Web APIs, Entity Framework, SQL Server',
      'Built real-world projects with modern frontend/backend stacks',
      'Applied Generative AI: LLM integration, prompt engineering, AI-powered features',
    ],
  },
  {
    role: 'Frontend Mobile Developer',
    company: 'Camp Coding Academy',
    location: 'Cairo, Egypt',
    startDate: 'May 2021',
    endDate: 'May 2022',
    type: 'work',
    highlights: [
      'Built cross-platform mobile apps with React Native, focused on performance and scalability',
      'Integrated RESTful APIs for dynamic app functionality',
      'Wrote clean, reusable, maintainable components in agile teams on real client projects',
    ],
  },
];

export const education: Education = {
  degree: 'B.Sc. Computers and Automatic Control Engineering',
  institution: 'Tanta University',
  location: 'Tanta, Egypt',
  period: '2020 – 2025',
  grade: 'Excellent (89.23%)',
  project: 'Full-stack healthcare platform (mobile + web) — doctor booking, AI-based meal analysis, medical e-commerce',
  projectGrade: 'Excellent',
};
