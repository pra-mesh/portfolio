export interface Skill {
  name: string;
  icon: React.ElementType;
  color: string;
  category:
    | "Frontend Languages & Frameworks"
    | "Backend Languages & Frameworks"
    | "Databases"
    | "Styling & UI"
    | "DevOps & Cloud"
    | "Testing & Quality"
    | "Development Tools";
}
export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  image: string;
  github: string | null;
  demo: string | null;
  type: string;
}
