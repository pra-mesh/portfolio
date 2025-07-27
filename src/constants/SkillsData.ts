import { TbBrandCSharp } from "react-icons/tb";
import type { Skill } from "../types";
import {
  SiBlazor,
  SiDotnet,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { FaAws, FaWpforms } from "react-icons/fa";
import { ImWindows } from "react-icons/im";
import { DiMsqlServer, DiMysql } from "react-icons/di";

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
    name: "AWS",
    category: "DevOps & Cloud",
    icon: FaAws,
    color: "#FF9900",
  },
];
