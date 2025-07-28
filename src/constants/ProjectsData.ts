import type { Project } from "../types";

export const ProjectsData: Project[] = [
  {
    id: 1,
    title: "Mobile Banking Connector",
    description: `A REST API that securely connects the core banking system with the mobile app,
     enabling real-time transactions, account access, and user authentication. Fast, scalable, and encrypted for seamless banking experiences.`,
    longDescription: `This REST API connects the core banking system with the mobile app, offering secure access to accounts, transactions,
     and customer services. It authenticates using API keys and tenant-based segregation for multi-client scalability.
      All data exchanges are encrypted over TLS, and endpoints are designed for fast, consistent mobile interactions.
       Robust logging and error handling ensure reliability and transparency.`,
    github: "https://github.com/pra-mesh/MobileBanking",
    image: `${import.meta.env.BASE_URL}mobile-banking.webp`,
    demo: `https://documenter.getpostman.com/view/13495004/2sB2xFfT5v`,
    type: "Middleware Rest Api",
    tech: ["Asp.net core", "Dapper", "MSSQL", "3-tier-Architecture"],
  },
  {
    id: 2,
    title: "Resume Builder",
    description: `A personal full stack MERN project that can create Resumes with multiple templates. It also include options to download and print.
     It also AI helper to professionalize your content`,
    longDescription: `Built a dynamic resume builder using the MERN stack, integrating technologies like TailwindCSS, ShadCN,
     Zod, Vite, Redux Toolkit, and TanStack Query. Implemented robust form handling with React Hook Form and schema validation via Zod.
      Deployed backend on AWS Lightsail with nginx with reverse proxy and pm2 and frontend on Cloudflare Pages. Ensured responsive UI, 
      scalable architecture, and seamless user experience.`,
    github: "https://github.com/pra-mesh/ResumeBuilder",
    demo: "https://resumebuilder.pradhanpramesh.com.np/",
    type: "Full-Stack MERN Project",
    tech: [
      "Monogdb",
      "React.js",
      "Typescript",
      "lighSail",
      "Express.js",
      "Node.js",
      "JWT",
      "refresh_TOKEN",
      "email",
      "ShadCN",
      "tailwind",
    ],
    image: `${import.meta.env.BASE_URL}resume.png`,
  },
  {
    id: 3,
    title: "Dev Diary",
    description: `A personal dev diary built using React for front-end and Asp.net core with mssql as database.`,
    longDescription: `A daily dev diary built using react and asp.net core. This application utilizes feature like full-text indexing, entity-framework as ORM.
    This app was deployed in vps server using IIS and MSSql on the server and used cloudflare page to host front-end project.
    `,
    github: "https://github.com/pra-mesh/DevDiary",
    demo: "http://devdiary.pradhanpramesh.com.np/",
    type: "Middleware Rest Api",
    tech: [
      "Asp.net core",
      "EFcore",
      "MSSQL",
      "3-tier-Architecture",
      "React",
      "Typescript",
      "Tailwind",
    ],
    image: `${import.meta.env.BASE_URL}devDiary.jpg`,
  },
];
