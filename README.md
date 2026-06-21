<div align="center">

# Esraa Ahmed Shiref

**Full-Stack Developer** — Angular · React Native · ASP.NET Core · Generative AI

[![Angular](https://img.shields.io/badge/Angular-21-DD0031?style=flat-square&logo=angular&logoColor=white)](https://angular.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![SCSS](https://img.shields.io/badge/SCSS-CSS_Custom_Props-CC6699?style=flat-square&logo=sass&logoColor=white)](https://sass-lang.com)
[![Standalone](https://img.shields.io/badge/Architecture-Standalone_Components-0F0F11?style=flat-square&logo=angular&logoColor=white)](https://angular.dev)
[![LinkedIn](https://img.shields.io/badge/esraa--shiref-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/esraa-shiref)
</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Featured Projects](#-featured-projects)
- [Getting Started](#-getting-started)
- [Contact](#-contact)

---

## 🧭 About

I bridge the gap between engineering discipline and creative problem-solving. With a B.Sc. in Computers and Automatic Control Engineering from Tanta University (Excellent, 89.23%), I approach software as a full-stack architect — not just a coder.

My graduation project — a full-stack healthcare platform with AI-based meal analysis — sparked my passion for weaving Generative AI into practical products. Whether it's a React Native app serving patients or an Angular dashboard serving a construction firm, I care about the same thing: shipping products that work, at scale, with clean code.

I'm fluent across the stack: Angular and React Native on the frontend, ASP.NET Core and Laravel on the backend, and SQL Server, PostgreSQL, and Firebase for data. I speak Arabic natively, English professionally, and TypeScript fluently.

---

## ✨ Features

- **8 content sections** — Hero, About, Tech Stack, Projects, Experience, Education, Contact, Footer
- **Dark / light theme** — toggle persisted to `localStorage` via signal-based `ThemeService`
- **Fully responsive** — mobile-first, fluid from 320px to 4K
- **Bilingual-ready** — RTL/LTL layout foundation via CSS custom properties
- **Accessible** — semantic HTML, ARIA labels, keyboard navigation
- **Project filter bar** — signal-based `computed` filtering by type (All, Mobile, Web, AI, Full-Stack, Angular)
- **Scroll animations** — custom `ScrollRevealDirective` using IntersectionObserver, GPU-accelerated, respects `prefers-reduced-motion`
- **CSS micro-interactions** — card hover lift, button scale, nav underline slide, theme-toggle rotate

---

## 🛠️ Tech Stack

This portfolio itself is built with:

| Category | Technologies |
|----------|-------------|
| **Frontend** | Angular 21 (standalone), TypeScript 5.9, SCSS, CSS Custom Properties |
| **Animations** | IntersectionObserver, CSS transforms & opacity, `will-change` |
| **State** | Angular Signals (`signal`, `computed`, `input`) |
| **Build** | Angular CLI 21, esbuild |
| **Hosting** | Static output (`dist/portfolio/browser/`) |

The full skill set represented on the site spans:

| Category | Technologies |
|----------|-------------|
| **Frontend** | Angular, React Native, JavaScript (ES6+), HTML5, CSS3 / SCSS, Redux |
| **Backend** | ASP.NET Core, ASP.NET MVC, Laravel, Entity Framework |
| **Databases** | SQL Server, PostgreSQL, Firebase |
| **AI & APIs** | OpenAI API, Clarifai API, Spoonacular API, REST APIs |
| **Tools** | Git / GitHub, Postman, Figma, VS Code |

---

## 📁 Project Structure

<details>
<summary>📁 View project structure</summary>

```
src/
├── app/
│   ├── directives/
│   │   └── scroll-reveal.directive.ts
│   ├── sections/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── education/
│   │   ├── experience/
│   │   ├── footer/
│   │   ├── hero/
│   │   ├── nav/
│   │   ├── projects/
│   │   └── tech-stack/
│   ├── services/
│   │   ├── scroll.service.ts
│   │   └── theme.service.ts
│   └── shared/
│       ├── data/
│       │   ├── portfolio.data.ts
│       │   ├── projects.data.ts
│       │   └── skills.data.ts
│       └── ui/
│           ├── project-card/
│           ├── section-header/
│           ├── skill-chip/
│           └── timeline-item/
├── assets/
│   └── images/
│       └── profile.jpg
├── public/
│   ├── Esraa_Shiref_CV.pdf
│   ├── favicon.ico
│   └── ...
└── styles.scss
```

</details>

---

## 🎯 Featured Projects

### HealthHub
Cross-platform React Native healthcare app with AI-powered meal recognition via Clarifai API, real-time doctor booking, and integrated medical e-commerce.
[![View on GitHub](https://img.shields.io/badge/View_on_GitHub-HealthHub_Mobile_App-181717?style=flat-square&logo=github)](https://github.com/EsraaShiref/HealthHub-Mobile-App)

### Tasweeqar
Production Angular 21 bilingual corporate website with full AR/EN internationalization and a custom SCSS design system.
[![View on GitHub](https://img.shields.io/badge/View_on_GitHub-Tasweeqar-181717?style=flat-square&logo=github)](https://github.com/EsraaShiref/Tasweeqar)

### University Management System
Full-stack ASP.NET MVC academic administration platform with role-based authentication, CRUD operations, and Entity Framework.
[![View on GitHub](https://img.shields.io/badge/View_on_GitHub-University_Management_System-181717?style=flat-square&logo=github)](https://github.com/EsraaShiref/University_Management_System.git)

### Employee Management System
Interactive ASP.NET HR dashboard with real-time employee records management, search, filtering, and organizational analytics.
[![View on GitHub](https://img.shields.io/badge/View_on_GitHub-Employee_Management_System-181717?style=flat-square&logo=github)](https://github.com/EsraaShiref/EmployeeManagementSystem)

---

## 🚀 Getting Started

```bash
git clone https://github.com/EsraaShiref/EsraaShiref.git
cd EsraaShiref
npm install
ng serve
```

Navigate to `http://localhost:4200`. Hot-reload is enabled by default.

### Production Build

```bash
ng build --configuration production
```

Output is written to `dist/portfolio/browser/`. Deploy that directory to any static host (Vercel, Netlify, GitHub Pages, etc.).

---

## 📬 Contact

<div align="center">

[![GitHub](https://img.shields.io/badge/EsraaShiref-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/EsraaShiref)
[![LinkedIn](https://img.shields.io/badge/esraa--shiref-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/esraa-shiref)
[![Email](https://img.shields.io/badge/Israashiref@gmail.com-EA4335?style=flat-square&logo=gmail&logoColor=white)](mailto:Israashiref@gmail.com)

---

⭐ If you found this interesting, consider giving it a star!

</div>
