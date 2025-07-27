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
