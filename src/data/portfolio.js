import { Code, Palette, Zap } from "lucide-react";

export const personalInfo = {
  name: "Matthieu Dubois",
  email: "dubois.matthieu@live.be",
  location: "Martelange, Belgium",
  github: "https://github.com/dubmatth",
  linkedin: "https://www.linkedin.com/in/matthdubois/",
};

export const navItems = ["home", "about", "experiences", "projects", "skills", "contact"];

export const experiences = [
  {
    id: 1,
    title: "Full-Stack Developer",
    role: "Insurance & Surety Subscription Platforms",
    company: "CAMCA",
    period: "2021 – Present",
    context:
      "Own end-to-end delivery and continuous improvement of around a dozen insurance and surety subscription platforms, several of which I originally built at Intermade before joining CAMCA in-house. Led the modernization of the team's frontend, backend and DevOps stack alongside day-to-day development.",
    achievements: [
      "Migrated frontend development to SPFx following the SharePoint 2019 upgrade, then carried that through a subsequent migration to SharePoint Subscription Edition (SE), standardizing how new subscription forms are built.",
      "Led the migration from TFS to Azure DevOps Server and from TFVC to Git, and built CI/CD pipelines covering all projects and environments.",
      "Drove the backend shift from .NET Framework 4.8 to .NET Core for new projects, while maintaining and improving the existing forms across roughly a dozen active projects.",
    ],
    technologies: ["SPFx", ".NET Core", "C# / .NET 4.8", "Azure DevOps", "SSRS"],
  },
  {
    id: 2,
    title: "Industrial Glass Ordering Platform",
    role: "Full-Stack Developer",
    company: "Intermade",
    period: "2020 – 2021",
    context:
      "Built a web ordering platform for industrial glass wholesalers, supporting delivery logistics by train and truck for a major industrial glass manufacturer.",
    achievements: [
      "Designed a load optimization system to maximize truck and train capacity based on glass type and dimensions.",
      "Delivered a multi-tenant ordering platform handling the full order lifecycle from quote to delivery.",
      "Integrated the application with SharePoint for document management and internal workflows via SPFx.",
    ],
    technologies: ["React", "SPFx", "SharePoint", "C#"],
  },
  {
    id: 3,
    title: "Insurance Product Subscription Platform",
    role: "Full-Stack Developer",
    company: "Intermade",
    period: "2019 – 2020",
    context:
      "Built a subscription form for an insurance product with complex business and eligibility rules, print capabilities, and a multi-level access rights system deployed to several hundred users.",
    achievements: [
      "Implemented a business and eligibility rules engine to validate subscription applications in real time.",
      "Integrated SSRS reporting services for automated document generation and printing.",
      "Designed a 3-level permission system managing access for several hundred users.",
    ],
    technologies: ["jQuery", "Datatables.net", "C#", "SSRS"],
  },
  {
    id: 4,
    title: "Due Diligence Tracking Application",
    role: "Full-Stack Developer",
    company: "Intermade",
    period: "2019 – 2020",
    context:
      "Developed a due diligence tracking application for an English-speaking financial client based in Kirchberg, Luxembourg, designed to run across three distinct deployment modes.",
    achievements: [
      "Architected a single codebase supporting three deployment targets: SaaS, On-Premise, and Desktop via Electron.",
      "Delivered the full project on schedule under tight deadlines for a demanding client in the financial sector.",
      "Built the cross-platform desktop version using Electron, reusing the existing React/Node.js core.",
    ],
    technologies: ["React", "Node.js", "Electron"],
  },
  {
    id: 5,
    title: "Meal Order Management System",
    role: "Full-Stack Developer",
    company: "Intermade",
    period: "2019 – 2020",
    context:
      "Built an internal meal ordering and management application for an architecture firm, integrated with their existing SharePoint environment.",
    achievements: [
      "Delivered a complete solution within tight deadlines for a high-demand client.",
      "Integrated the app with SharePoint via SPFx for seamless access within the client's intranet.",
      "Developed the C# backend to handle order processing, validation, and reporting.",
    ],
    technologies: ["React", "SPFx", "C#", "SharePoint"],
  },
];

export const projects = [
  {
    id: 1,
    name: "Pomodeep",
    tagline: "Finally finish what you start.",
    description:
      "A Pomodoro-based productivity app combining a smart timer, task management, focus sounds and statistics — built cross-platform for iOS and Android.",
    status: "Closed Beta",
    link: "https://pomodeep.app",
    technologies: ["React Native", "Expo", "Node.js", "Express", "PostgreSQL", "Prisma"],
  },
];

export const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: Code, color: "from-blue-500 to-cyan-500" },
      { name: "TypeScript", icon: Code, color: "from-blue-600 to-indigo-600" },
      { name: "jQuery", icon: Code, color: "from-sky-500 to-blue-400" },
    ],
  },
  {
    category: "Backend & Data",
    skills: [
      { name: "C# / .NET 4.8", icon: Zap, color: "from-violet-600 to-purple-500" },
      { name: "SQL Server", icon: Zap, color: "from-red-600 to-orange-400" },
    ],
  },
  {
    category: "Enterprise & Tools",
    skills: [
      { name: "SharePoint 2013–SE / Cloud", icon: Zap, color: "from-blue-600 to-blue-400" },
      { name: "SPFx", icon: Zap, color: "from-blue-700 to-blue-500" },
      { name: "SSRS", icon: Palette, color: "from-orange-500 to-red-500" },
    ],
  },
];
