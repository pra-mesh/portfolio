import { Cpu, Globe, Layers, Terminal } from "lucide-react";

export const codeElements = [
  {
    icon: <Terminal className="w-6 h-6" />,
    text: "dotnet run",
    position: "top-15 -right-25",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    text: "React.FC",
    position: "top-50 -right-25",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    text: "async/await",
    position: "bottom-50 -right-25",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    text: "API Gateway",
    position: "bottom-15 -right-25",
  },
];
