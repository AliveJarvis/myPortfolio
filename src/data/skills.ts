import {
  SiExpress,
  SiSocketdotio,
  SiNextdotjs,
} from "react-icons/si";
import {
  FramerMotionIcon,
} from "@/components/icons";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import HtmlSvg from "@/public/icons/html.svg";
import CsssSvg from "@/public/icons/css.svg";
import Cprogramming from "@/public/icons/c-programming.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";
import PythonSvg from "@/public/icons/python.svg";
import shell from "@/public/icons/shell.svg";

// Libraries
import ReactjsSvg from "@/public/icons/reactjs.svg";
import ViteSvg from "@/public/icons/vite.svg";
import expo from "@/public/icons/expo-native.svg";

// Backend
import NodejsSvg from "@/public/icons/nodejs.svg";
import Webrtc from "@/public/icons/web-rtc-svgrepo-com.svg";
import RestAPI from "@/public/icons/restful-api.svg";


// Database and ORMS
import MongoDBSvg from "@/public/icons/mongodb.svg";
import PostgressSvg from "@/public/icons/postgresql.svg";

// Tools and Tech
import googleFirebase from "@/public/icons/google-firebase.svg";
import SEO from "@/public/icons/seo.svg";
import tagManager from "@/public/icons/google-tag-manager-svgrepo-com.svg";
import searchConsole from "@/public/icons/googlesearchconsole-svgrepo-com.svg";
import github from "@/public/icons/github.svg";
import analytics from "@/public/icons/google-analytics-svgrepo-com.svg";

// DevOps and Cloud
import DockerSvg from "@/public/icons/docker.svg";
import AWS from "@/public/icons/aws.svg";
import TerraformSvg from "@/public/icons/terraform-16-svgrepo-com.svg";
import CICD from "@/public/icons/ci-cd-svgrepo-com.svg";


export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "HTML",
        icon: HtmlSvg,
      },
      {
        name: "CSS",
        icon: CsssSvg,
      },
      {
        name: "Javascript",
        icon: JavascriptSvg,
      },
      {
        name: "Typescript",
        icon: TypescriptSvg,
      },
      {
        name: "Python",
        icon: PythonSvg,
      },
      {
        name: "C",
        icon: Cprogramming,
      },
      {
        name: "Shell",
        icon: shell,
      },
    ],
  },
  {
    sectionName: "Libraries and Frameworks",
    skills: [
      {
        name: "Reactjs",
        icon: ReactjsSvg,
      },
      {
        name: "Nextjs",
        icon: SiNextdotjs,
      },
      {
        name: "Framer motion",
        icon: FramerMotionIcon,
      },
      {
        name: "Vite",
        icon: ViteSvg,
      },
      {
        name: "React Native",
        icon: expo,
      },
    ],
  },
  {
    sectionName: "Backend",
    skills: [
      {
        name: "Nodejs",
        icon: NodejsSvg,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
      {
        name: "Socket.io",
        icon: SiSocketdotio,
      },
      {
        name: "Webrtc",
        icon: Webrtc,
      },
      {
        name: "Restful API's",
        icon: RestAPI,
      },
    ],
  },
  {
    sectionName: "Databases and ORMs",
    skills: [
      {
        name: "MongoDB",
        icon: MongoDBSvg,
      },
      {
        name: "SQL",
        icon: PostgressSvg,
      },
    ],
  },
  {
    sectionName: "DevOps and Cloud",
    skills: [
      {
        name: "AWS",
        icon: AWS,
      },
      {
        name: "Docker",
        icon: DockerSvg,
      },
      {
        name: "CI/CD Pipelines",
        icon: CICD,
      },
      {
        name: "Terraform,",
        icon: TerraformSvg,
      },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      {
        name: "Firebase",
        icon: googleFirebase,
      },
      {
        name: "SEO",
        icon: SEO,
      },
      {
        name: "Tag Manager",
        icon: tagManager,
      },
      {
        name: "Search Console",
        icon: searchConsole,
      },
      {
        name: "Github",
        icon: github,
      },
      {
        name: "Google Analytics",
        icon: analytics,
      },
    ],
  },
];
