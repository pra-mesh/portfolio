import { TbBrandCSharp } from "react-icons/tb";
import type { Skill } from "../types";
import {
  SiBlazor,
  SiBootstrap,
  SiDocker,
  SiDotnet,
  SiExpress,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiMui,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiSass,
  SiStyledcomponents,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaAws, FaWpforms } from "react-icons/fa";
import { ImWindows } from "react-icons/im";
import { DiMsqlServer, DiMysql, DiVisualstudio } from "react-icons/di";
import { CiGlobe } from "react-icons/ci";
import { PiTestTube } from "react-icons/pi";
import { VscVscode } from "react-icons/vsc";

export const SkillsData: Skill[] = [
  {
    name: "C#",
    category: "Backend Languages & Frameworks",
    icon: TbBrandCSharp,
    color: "#9B4F96",
  },
  {
    name: "Asp .net core",
    category: "Backend Languages & Frameworks",
    icon: SiDotnet,
    color: "#512BD4",
  },
  {
    name: "Node.js",
    category: "Backend Languages & Frameworks",
    icon: SiNodedotjs,
    color: "#215732",
  },
  {
    name: "Express.js",
    category: "Backend Languages & Frameworks",
    icon: SiExpress,
    color: "#000000",
  },
  {
    name: "JavaScript",
    category: "Backend Languages & Frameworks",
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  {
    name: "Typescript",
    category: "Backend Languages & Frameworks",
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "C#",
    category: "Frontend Languages & Frameworks",
    icon: TbBrandCSharp,
    color: "#9B4F96",
  },
  {
    name: "JavaScript",
    category: "Frontend Languages & Frameworks",
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  {
    name: "Typescript",
    category: "Frontend Languages & Frameworks",
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "React",
    category: "Frontend Languages & Frameworks",
    icon: SiReact,
    color: "#61DBFB",
  },
  {
    name: "Blazor",
    category: "Frontend Languages & Frameworks",
    icon: SiBlazor,
    color: "#512BD4",
  },
  {
    name: "WPF",
    category: "Frontend Languages & Frameworks",
    icon: FaWpforms,
    color: "#9B1A96",
  },
  {
    name: "WinForms",
    category: "Frontend Languages & Frameworks",
    icon: ImWindows,
    color: "#0078D4",
  },
  {
    name: "Sql Server",
    category: "Databases",
    icon: DiMsqlServer,
    color: "#CC2927",
  },
  {
    name: "MySql",
    category: "Databases",
    icon: DiMysql,
    color: "#00758F",
  },
  {
    name: "MongoDB",
    category: "Databases",
    icon: SiMongodb,
    color: "#4DB33D",
  },
  {
    name: "Tailwind CSS",
    category: "Styling & UI",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  {
    name: "SCSS/SASS",
    category: "Styling & UI",
    icon: SiSass,
    color: "#CC6699",
  },
  {
    name: "Bootstrap",
    category: "Styling & UI",
    icon: SiBootstrap,
    color: "#7952B3",
  },
  {
    name: "Material-UI",
    category: "Styling & UI",
    icon: SiMui,
    color: "#007FFF",
  },
  {
    name: "Components",
    category: "Styling & UI",
    icon: SiStyledcomponents,
    color: "#DB7093",
  },
  {
    name: "AWS",
    category: "DevOps & Cloud",
    icon: FaAws,
    color: "#FF9900",
  },
  {
    name: "Docker",
    category: "DevOps & Cloud",
    icon: SiDocker,
    color: "#2496ED",
  },
  {
    name: "GitHub Actions",
    category: "DevOps & Cloud",
    icon: SiGithubactions,
    color: "#2088FF",
  },
  {
    name: "Cloud ops",
    category: "DevOps & Cloud",
    icon: CiGlobe,
    color: "#4DB33D",
  },
  {
    name: "Swagger",
    category: "Testing & Quality",
    icon: SiSwagger,
    color: "#85EA2D",
  },
  {
    name: "Postman",
    category: "Testing & Quality",
    icon: SiPostman,
    color: "#FF6C37",
  },
  {
    name: "xUnit",
    category: "Testing & Quality",
    icon: PiTestTube,
    color: "#32CD32",
  },
  {
    name: "Jest",
    category: "Testing & Quality",
    icon: SiJest,
    color: "#C21325",
  },
  {
    name: "Visual Studio",
    category: "Development Tools",
    icon: DiVisualstudio,
    color: "#5C2D91",
  },
  {
    name: "VS Code",
    category: "Development Tools",
    icon: VscVscode,
    color: "#007ACC",
  },
  {
    name: "SSMS",
    category: "Development Tools",
    icon: DiMsqlServer,
    color: "#CC2927",
  },
  {
    name: "Git",
    category: "Development Tools",
    icon: SiGit,
    color: "#F05032",
  },
  {
    name: "GitHub",
    category: "Development Tools",
    icon: SiGithub,
    color: "#000000",
  },
];
