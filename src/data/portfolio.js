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
    title: "Application Logistique (SaaS B2B)",
    role: "Lead Full-Stack Developer",
    context:
      "Refonte complète d'un système vieillissant pour un acteur majeur de la logistique, visant à améliorer les performances et le suivi en temps réel des expéditions.",
    achievements: [
      "Architecture de l'application front-end complète.",
      "Optimisation des requêtes complexes en base de données (+40% de perfs au chargement des données).",
      "Mise en place d'un système de notification en temps réel.",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "WebSockets"],
  },
  {
    id: 2,
    title: "Dashboard d'Analyse Financière",
    role: "Développeur Front-End",
    context:
      "Création d'un outil interne permettant aux analystes de visualiser des milliers de lignes de données via des graphiques interactifs.",
    achievements: [
      "Développement de graphes optimisés capables d'afficher de gros volumes de données sans latence.",
      "Création d'un design system interne cohérent et accessible.",
      "Implémentation de filtres complexes et d'exports PDF.",
    ],
    technologies: ["React", "TypeScript", "D3.js", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "Application Mobile de Productivité",
    role: "Mobile Developer",
    context:
      "Développement d'une application interne de gestion du temps et des tâches pour les équipes.",
    achievements: [
      "Mise en place de la base de code React Native et de l'intégration continue.",
      "Gestion du mode hors-ligne avec synchronisation locale sécurisée.",
      "Déploiement sur l'App Store et Google Play.",
    ],
    technologies: ["React Native", "Expo", "SQLite", "Zustand"],
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
