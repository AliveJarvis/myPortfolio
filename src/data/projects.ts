import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
// import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Quick Talk",
    href: "https://fullstack-chat-app-h3mi.onrender.com/",
    tags: ["Socket.io", "Express.js", "MonogoDb", "UserAuthentication"],
    image: {
      LIGHT: "/images/projects/Quick Talk.png",
      DARK: "/images/projects/Quick Talk.png",
    },
  },
  {
    index: 1,
    title: "Mystery Message",
    href: "https://mysterymessage-roan.vercel.app/",
    tags: ["IntegratedAi", "NextAuth", "OTP verification", "Zod"],
    image: {
      LIGHT: "/images/projects/Mystery Message.png",
      DARK: "/images/projects/Mystery Message.png",
    },
  },
  {
    index: 2,
    title: "Power Extract",
    href: "https://powerextract.co.nz/",
    tags: ["SEO", "LightHouseScore390+", "Google Analytics", "Firebase"],
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
      "/images/projects/Quick Talk 2.png",
    ],
    description:
      "Frontend:\n•  Vite\n• CSS3 / SCSS\n• WebSockets |for real-time communication|\nBackend:\n•  Socket.io \n• Node.js\n• Express.js\n• MongoDB |for storing messages and user data|\n🚀 Features Real-time Messaging: Chat instantly with friends or groups.\nUser Authentication: Sign up and log in securely with your credentials.",
    sourceCodeHref: "https://github.com/ArjunChaudhary4/quick-talk",
    liveWebsiteHref: "https://fullstack-chat-app-h3mi.onrender.com/",
  },
  {
    name: "Power Extract",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: [
      "/images/projects/Power Extract Web.png",
      "/images/projects/Power Extract (1).png",
      "/images/projects/Power Extract (2).png",
      "/images/projects/Power Extract (3).png",
    ],
    description:
      "Tech Highlights:\n • Search Engine Optimization(Currently Ranked 1 on google for it's keyword)\n • Framer motion(Make design according to client needs)\n • Used various	UI libraries\n •	Hosted it on Firebase\n > I independently developed a high-performance, user-friendly site using TypeScript and Next.js. The director is impressed by the User Interface. I integrated Google Analytics for insights and hosted it on Firebase\n > I optimized the site for SEO consistently achieving a Lighthouse score of 390+ per page. Currently, the website attracts over 150 unique monthly potential clients with a good conversion ratio.",
    sourceCodeHref: "https://powerextract.co.nz/",
    liveWebsiteHref: "https://powerextract.co.nz/",
  },
  {
    name: "Mystery Message",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/Mystery Message (1).png",
      "/images/projects/Mystery Message (2).png",
      "/images/projects/Mystery Message (3).png",
    ],
    description:
      "Project highlights:\n• Integrated ai (Used OpenAI Api) \n• NextAuth\n• Zod, \n• OTP verification.\n• Next.js, Typescript, MongoDB, Shadcn, Axios\nMystery Message is a web app where anyone can anonymously send a message to a verified user of the platform",
    sourceCodeHref: "https://github.com/ArjunChaudhary4/Mystery_Message",
    liveWebsiteHref: "https://mysterymessage-roan.vercel.app/",
  },
  {
    name: "Work Manager",
    favicon: "/images/projects/logos/covidtracker.ico",
    imageUrl: [
      "/images/projects/Work Manager (1).png",
      "/images/projects/Work Manager (2).png",
      "/images/projects/Work Manager (3).png",
      "/images/projects/Work Manager (4).png",
    ],
    description:
      "Tech Used: \n • Axios \n•	bcryptjs\n• Jsonwebtoken\n•	MongoDb|Mongoose\n•	NextJs \n• Work Manager is a web app built in Next.js and typescript for easily managing tasks.\n • It focuses on the User Interface as it loads the UI immediately and then changes the UI as the data is fetched, making the website too fast.",
    sourceCodeHref: "https://github.com/ArjunChaudhary4/Work-Manager",
    liveWebsiteHref: "https://workmanagerfirstbackendproject.vercel.app/",
  },
  {
    name: "My portfolio",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/myPortfolio (1).png",
      "/images/projects/myPortfolio (2).png",
      "/images/projects/myPortfolio (3).png",
    ],
    description:
      "Tech Used: \n•	Framer-motion •	NextJs •	Nodemailer •	Yup • Sharp ",
    sourceCodeHref: "https://github.com/ArjunChaudhary4/myPortfolio",
    // liveWebsiteHref: siteMetadata.siteUrl,
  },
];
