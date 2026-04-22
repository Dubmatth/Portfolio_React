import { Code, Palette, Zap } from "lucide-react";

export const personalInfo = {
  name: "Matthieu Dubois",
  email: "dubois.matthieu@live.be",
  phone: "+32 493 147 946",
  location: "Martelange, Belgium",
  github: "https://github.com/dubmatth",
  linkedin: "https://www.linkedin.com/in/matthdubois/",
};

export const navItems = ["home", "about", "experiences", "skills", "contact"];

export const experiences = [
  {
    id: 1,
    title: "Industrial Glass Ordering Platform",
    role: "Full-Stack Developer",
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
    id: 2,
    title: "Due Diligence Tracking Application",
    role: "Full-Stack Developer",
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
    id: 3,
    title: "Meal Order Management System",
    role: "Full-Stack Developer",
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

export const skills = [
  {
    name: "React/Next.js",
    level: 85,
    icon: Code,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "TypeScript",
    level: 82,
    icon: Code,
    color: "from-blue-600 to-purple-600",
  },
  {
    name: "Node.js",
    level: 78,
    icon: Zap,
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "C#",
    level: 80,
    icon: Zap,
    color: "from-gray-600 to-gray-400",
  },
  {
    name: "UI/UX Design",
    level: 74,
    icon: Palette,
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "GraphQL",
    level: 65,
    icon: Code,
    color: "from-purple-500 to-indigo-500",
  },
];
