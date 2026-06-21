export interface Skill {
  name: string;
  icon: string;
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'Angular', icon: 'angular' },
      { name: 'React Native', icon: 'react' },
      { name: 'JavaScript (ES6+)', icon: 'javascript' },
      { name: 'HTML5', icon: 'html5' },
      { name: 'CSS3 / SCSS', icon: 'css3' },
      { name: 'Redux', icon: 'redux' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'ASP.NET Core', icon: 'dotnet' },
      { name: 'ASP.NET MVC', icon: 'dotnet' },
      { name: 'Laravel', icon: 'laravel' },
      { name: 'Entity Framework', icon: 'database' },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'SQL Server', icon: 'database' },
      { name: 'PostgreSQL', icon: 'database' },
      { name: 'Firebase', icon: 'firebase' },
    ],
  },
  {
    category: 'AI & APIs',
    skills: [
      { name: 'OpenAI API', icon: 'sparkles' },
      { name: 'Clarifai API', icon: 'sparkles' },
      { name: 'Spoonacular API', icon: 'sparkles' },
      { name: 'REST APIs', icon: 'api' },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git / GitHub', icon: 'git' },
      { name: 'Postman', icon: 'postman' },
      { name: 'Figma', icon: 'figma' },
      { name: 'VS Code', icon: 'vscode' },
    ],
  },
];
