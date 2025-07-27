import {
  Braces,
  ChevronDown,
  Code2,
  GitBranch,
  Mail,
  MapPin,
} from "lucide-react";
import { PERSONAL_INFO } from "../constants/personalInfo";
import { socialLinks } from "../constants/socialLinks";
import { FaLinkedinIn } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";
import { Terminal } from "./Terminal";

const Hero = () => {
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "github":
        return <VscGithubInverted size={20} />;
      case "linkedin":
        return <FaLinkedinIn size={20} />;
      default:
        return <Mail size={20} />;
    }
  };
  const scrollToNextSection = () => {
    const aboutSection = document.querySelector("#about");

    if (aboutSection) {
      console.log("h");
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative mx-2 overflow-hidden pt-18 x:pt-0"
    >
      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 text-blue-400/20 font-mono text-sm animate-bounce">
          {'{ "framework": "React" }'}
        </div>
        <div className="absolute top-35 right-20  text-green-950/20 dark:text-green-400/20 font-mono text-sm animate-pulse delay-1000">
          {"app.MapControllers();"}
        </div>
        <div className="absolute bottom-40 left-20 text-yellow-950/20 dark:text-yellow-400/20 font-mono text-sm animate-pulse delay-2000">
          {"useEffect(() => {})"}
        </div>
        <div className="absolute bottom-20 right-10 text-amber-950/20 dark:text-amber-400/20 font-mono text-sm animate-pulse delay-3000">
          {"services.AddDbContext<>()"}
        </div>
      </div>
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),
      linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"
      ></div>
      <div className="relative z-10 max-w-10xl mx-auto sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left side - Main Content */}
        <div className="space-y-8">
          <div className="flex space-x-4 mb-6">
            <div className="p-3 bg-blue-500/20 rounded-lg backdrop-blur-sm border border-blue-500/30">
              <Code2 className="w-6 h-6 text-blue-400" />
            </div>
            <div className="p-3 bg-purple-500/20 rounded-lg backdrop-blur-sm border border-purple-500/30">
              <Braces className="w-6 h-6 text-purple-400" />
            </div>
            <div className="p-3 bg-green-500/20 rounded-lg backdrop-blur-sm border border-green-500/30">
              <GitBranch className="w-6 h-6 text-green-400" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="text-sm font-mono text-blue-600 t dark:text-blue-300 mb-2">
              // Full Stack Developer
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-green-400">
                {PERSONAL_INFO.name}
              </span>
            </h1>
            <div className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-medium">
              <span className="text-blue-400">.NET </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                &
              </span>
              <span className="text-cyan-400"> React </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-green-600">
                🌟 Passionate Learner
              </span>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              🔧 Crafting scalable web and desktop applications with modern
              technologies. ✨ Passionate about writing clean code, optimizing
              performance, and elevating user experience. 🚀
            </p>
          </div>
          {/* Location */}
          <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-300">
            <MapPin size={16} />
            <span>{PERSONAL_INFO.location} </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3 text-slate-600 dark:text-slate-300 bg-gradient-to-r 
              from-blue-300 dark:from-blue-500 to-purple-400 dark:to-purple-600 rounded-lg 
             hover:from-blue-400 dark:hover:from-blue-600 hover:to-purple-500  dark:hover:to-purple-700 
              transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:scale-105 font-semibold"
            >
              Let's Collaborate
            </button>
            <button
              onClick={() =>
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3  backdrop-blur-sm bg-black/20 text-slate-600 dark:text-slate-300 hover:bg-black/30
               dark:bg-white/10 rounded-lg dark:hover:bg-white/20 transition-all duration-300 shadow-lg border border-white/20 font-semibold"
            >
              View Projects
            </button>
          </div>

          {/* Social Links */}
          <div className="flex  justify-center space-x-4 pt-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-black/20 dark:bg-white/10 backdrop-blur-sm
                text-slate-700 dark:text-white hover:bg-gradient-to-r hover:from-blue-500
                hover:to-purple-600 hover:scale-110 transition-all duration-300 shadow-lg"
                aria-label={link.name}
              >
                {getSocialIcon(link.icon)}
              </a>
            ))}
          </div>
        </div>
        {/* Right side - Terminal */}
        <Terminal />
      </div>
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60
         hover:text-white transition-colors duration-300 animate-bounce"
        aria-label="Scroll to next section"
      >
        <ChevronDown size={24} />
      </button>
    </section>
  );
};

export default Hero;
