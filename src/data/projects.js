import projet1 from "../assets/ptf1-landscape.png";
import projet2 from "../assets/biostats.png";
import projet3 from "../assets/code2-front.png";
import projet4 from "../assets/codec-side.png";
import projet5 from "../assets/image-composite-numerique-ordinateur-portable-divers-symboles_1048944-13026027.jpg";
import projet6 from "../assets/voix_africaine.png";
import projet7 from "../assets/clone_upwork.png";

const projectsData = [
  {
    id: 1,
    title: "YASS BioAnalytics",
    description:
      "Application d'analyse biostatistique assistée par intelligence artificielle, développée pour faciliter l'analyse et l'interprétation des données de santé.",
    longDescription:
      "YASS BioAnalytics est une application d'analyse biostatistique assistée par intelligence artificielle. Elle a été conçue pour faciliter l'analyse et l'interprétation des données de santé en combinant les méthodes statistiques classiques (environnement R / RStudio) et l'apprentissage automatique, le tout accessible via une interface interactive développée avec Shiny.",
    image: projet2,
    technologies: ["R", "RStudio", "Shiny", "IA", "Biostatistique"],
    category: "Data & IA",
    context: "Analyse de données de santé",
    features: [
      "Analyse et interprétation de données de santé",
      "Assistance à l'analyse par intelligence artificielle",
      "Interface interactive développée avec Shiny",
      "Environnement statistique R / RStudio",
    ],
    featured: true,
  },

  {
    id: 2,
    title: "GestiPerso",
    description:
      "Plateforme de gestion du personnel conçue lors d'un stage à la Direction Départementale de la Santé du Littoral. Développement d'API REST sécurisées et d'une interface web.",
    longDescription:
      "GestiPerso est une plateforme de gestion du personnel réalisée lors d'un stage à la Direction Départementale de la Santé du Littoral. Le projet comprend le développement d'API REST sécurisées (authentification JWT) consommées par une interface web moderne, permettant de gérer les informations du personnel de manière fiable et centralisée.",
    image: projet1,
    technologies: ["React", "Node.js", "PostgreSQL", "JWT"],
    category: "Développement Web",
    context: "Stage — Direction Départementale de la Santé du Littoral",
    features: [
      "API REST sécurisées développées avec Node.js",
      "Authentification et autorisation via JWT",
      "Interface web de gestion avec React",
      "Base de données relationnelle PostgreSQL",
    ],
    featured: true,
  },

  {
    id: 3,
    title: "Voix_Africaine",
    description:
      "Plateforme web de gestion d'œuvres littéraires permettant d'organiser les contenus par chapitres et de gérer les ressources audio associées.",
    longDescription:
      "Voix_Africaine est une plateforme web dédiée à la gestion d'œuvres littéraires. Elle permet d'organiser les contenus par chapitres et de gérer les ressources audio associées à chaque œuvre, avec un backend Python (FastAPI) et un stockage des médias en ligne via Cloudinary.",
    image: projet6,
    technologies: ["FastAPI", "Python", "React", "Cloudinary"],
    category: "Développement Web",
    context: "Gestion de contenus littéraires et audio",
    features: [
      "Organisation des œuvres par chapitres",
      "Gestion des ressources audio associées",
      "API backend développée avec FastAPI (Python)",
      "Stockage et diffusion des médias via Cloudinary",
    ],
    featured: true,
  },

  {
    id: 4,
    title: "Up Travail",
    description:
      "Conception d'un clone de la plateforme Upwork afin d'explorer l'architecture d'une application web de mise en relation entre utilisateurs.",
    longDescription:
      "Up Travail est un clone de la plateforme Upwork, réalisé afin d'explorer l'architecture d'une application web de mise en relation entre utilisateurs (freelances et clients). Le projet couvre la conception du backend (Nest.js, MongoDB, Prisma) et de l'interface front-end (React).",
    image: projet7,
    technologies: ["Nest.js", "React", "MongoDB", "Prisma"],
    category: "Développement Web",
    context: "Exploration d'architecture — type marketplace",
    features: [
      "Mise en relation entre utilisateurs (freelances / clients)",
      "Backend structuré avec Nest.js",
      "Modélisation des données via Prisma et MongoDB",
      "Interface front-end développée avec React",
    ],
  },

  {
    id: 5,
    title: "GoPark",
    description:
      "Projet académique autour de la modélisation et de la gestion d'un système de voiture autonome en C++, avec conception UML et gestion des rôles.",
    longDescription:
      "GoPark est un projet académique portant sur la modélisation et la gestion d'un système de voiture autonome, développé en C++. Il comprend une conception UML du système ainsi qu'une gestion fine des rôles et des interactions entre les différents acteurs du système.",
    image: projet3,
    technologies: ["C++", "UML"],
    category: "Projet académique",
    context: "Projet académique — modélisation UML",
    features: [
      "Modélisation du système avec UML",
      "Développement en C++",
      "Gestion des rôles et des interactions",
      "Système de voiture autonome",
    ],
  },

  {
    id: 6,
    title: "Système de gestion d'épicerie",
    description:
      "Application console développée en C pour la gestion des stocks, des produits et des transactions.",
    longDescription:
      "Application console développée en C pour la gestion complète d'une épicerie : suivi des stocks, gestion des produits et enregistrement des transactions. Le projet met en œuvre des structures de données classiques comme les listes chaînées pour organiser les informations.",
    image: projet4,
    technologies: ["C", "Listes chaînées"],
    category: "Projet académique",
    context: "Projet académique — programmation système",
    features: [
      "Gestion des stocks de produits",
      "Gestion des produits et de leurs informations",
      "Enregistrement des transactions",
      "Utilisation de listes chaînées en C",
    ],
  },

  {
    id: 7,
    title: "Installation & configuration de systèmes",
    description:
      "Travaux pratiques autour de l'installation et de la configuration de systèmes Windows et Linux sur différents environnements.",
    longDescription:
      "Travaux pratiques couvrant l'installation et la configuration de systèmes Windows et Linux sur différents environnements, notamment à l'aide de machines virtuelles (VirtualBox). Le projet couvre les étapes clés : installation, paramétrage et mise en service des systèmes.",
    image: projet5,
    technologies: ["Windows", "Linux", "VirtualBox"],
    category: "Systèmes",
    context: "Travaux pratiques — administration système",
    features: [
      "Installation de systèmes Windows et Linux",
      "Configuration sur différents environnements",
      "Utilisation de machines virtuelles (VirtualBox)",
      "Mise en service et paramétrage des systèmes",
    ],
  },
];

export function getProjectById(id) {
  return projectsData.find((project) => project.id === Number(id));
}

export default projectsData;


