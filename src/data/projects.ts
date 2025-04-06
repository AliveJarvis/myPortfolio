import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
// import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Quick Talk",
    href: "https://fullstack-chat-app-h3mi.onrender.com/",
    tags: ["Node.js", "MonogoDb", "React", "Socket.io"],
    image: {
      LIGHT: "/images/projects/Quick Talk.png",
      DARK: "/images/projects/Quick Talk.png",
    },
  },
  {
    index: 1,
    title: "Mystery Message",
    href: "https://mysterymessage-roan.vercel.app/",
    tags: ["Node.js", "MonogoDb", "React", "Zod"],
    image: {
      LIGHT: "/images/projects/Mystery Message.png",
      DARK: "/images/projects/Mystery Message.png",
    },
  },
  {
    index: 2,
    title: "Power Extract",
    href: "https://powerextract.co.nz/",
    tags: ["Reactjs", "Vite", "Tailwindcss", "Vercel", "Zustand", "React DND"],
    image: {
      LIGHT: "/images/projects/Power Extract Web.png",
      DARK: "/images/projects/Power Extract Web.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Quick Talk",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: [
      "/images/projects/Quick Talk.png",
      "/images/projects/Quick Talk.png"
    ],
    description:
      "Visualize JSON data format in form of a tree or graph. Application is made using Nextjs, Tailwindcss and Monaco Editor. Design image can be downloaded from this app.",
    sourceCodeHref: "https://github.com/ArjunChaudhary4/quick-talk",
    liveWebsiteHref: "https://fullstack-chat-app-h3mi.onrender.com/",
  },
  {
    name: "Power Extract",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: [
      "/images/projects/Power Extract Web.png",
      "/images/projects/kanbanDark.webp",
      "/images/projects/kanbanCardLight.webp",
    ],
    description:
      "Keep track of projects and tasks in different categories. Drag and drop card from tables. Assign user and priority to task and many more features. This app is made using Reactjs, Typescript, Tailwindcss and React-beautiful-dnd library.",
    sourceCodeHref: 'https://powerextract.co.nz/',
    liveWebsiteHref: "https://powerextract.co.nz/",
  },
  {
    name: "Mystery Message",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/manyGamesDark.webp",
      "/images/projects/manyGamesLight.webp",
      "/images/projects/manyGames2048.webp",
      "/images/projects/manyGamesPuzzle.webp",
      "/images/projects/manyGamesWordle.webp",
    ],
    description:
      "Many short and fun games using Reactjs, Typescript and Tailwindcss with collaboration with other developers",
    sourceCodeHref: "https://github.com/ArjunChaudhary4/Mystery_Message",
    liveWebsiteHref: "https://mysterymessage-roan.vercel.app/",
  },
  {
    name: "Work Manager",
    favicon: "/images/projects/logos/covidtracker.ico",
    imageUrl: [
      "/images/projects/covidTracker.webp",
      "/images/projects/covidTrackerMap.webp",
      "/images/projects/covidTrackerTable.webp",
    ],
    description:
      "Get latest covid related stats in a table where user can filter using country and cases. It also has a map which show every countries data for quick view. It uses an open source api (disease.sh). Made using Reactjs, Javascript and MUI",
    sourceCodeHref: "https://github.com/ArjunChaudhary4/Work-Manager",
    liveWebsiteHref: "https://workmanagerfirstbackendproject.vercel.app/",
  },
  {
    name: "My portfolio",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/portfolioDark.webp",
      "/images/projects/portfolioLight.webp",
    ],
    description:
      "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",
    sourceCodeHref: "https://github.com/BUMBAIYA/amitchauhan-v2",
    // liveWebsiteHref: siteMetadata.siteUrl,
  },
];
