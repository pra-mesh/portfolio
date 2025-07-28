import { ArrowRight, ExternalLink, Zap } from "lucide-react";
import { ProjectsData } from "../constants/ProjectsData";
import { SiGithub } from "react-icons/si";
import { useState } from "react";

const Project = () => {
  const [hoveredProject, setHoverProject] = useState<number | null>(null);
  return (
    <section id="projects" className="pt-15 pb-10  relative overflow-hidden">
      <div className="relative mx-auto sm:px-6 lg:px-12 text-sl text-slate-600 dark:text-slate-300">
        <div
          className={`text-center mb-5 transform transition-all duration-1000 
          `}
        >
          <h2
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-teal-600
           dark:from-sky-400 dark:to-green-700 bg-clip-text text-transparent pb-5"
          >
            Projects
          </h2>
          <div className="w-36 h-1 bg-gradient-to-r via-indigo-500 to-teal-600 mx-auto rounded-full animate-ping"></div>
          <div className="text-start mt-2 mb-6">
            <div className="inline-flex  px-4 py-2 bg-gradient-to-r from-violet-100 to-indigo-100 text-violet-700 text-sm font-semibold rounded-full">
              <Zap size={16} className="mr-2" />
              Featured Project
            </div>
          </div>
          <div className="space-y-24">
            {ProjectsData.map((project, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center  `}
                onMouseEnter={() => setHoverProject(project.id)}
                onMouseLeave={() => setHoverProject(null)}
              >
                {/* Project Image */}
                <div
                  className={`relative group ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <div
                    className="absolute -inset-4 bg-gradient-to-r from-violet-600/20
                   to-indigo-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 
                   transition-opacity duration-500"
                  ></div>

                  <div className="relative  aspect-video rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-120 transition-transform duration-700"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/50
                     via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    ></div>
                    {/* Overlay Content */}
                    <div className="absolute inset-0 flex space-x-4 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project?.github ?? "#projects"}
                        target="_blank"
                        className="p-3 bg-black/40 backdrop-blur-xl rounded-full border border-white/30
                         text-white hover:bg-black/50 transform hover:scale-110 transition-all duration-300"
                      >
                        <SiGithub size={20} />
                      </a>
                      <a
                        target="_blank"
                        href={project.demo ?? "#projects"}
                        className="p-3 bg-black/40 backdrop-blur-xl rounded-full border border-black/30 text-white hover:bg-black/50 transform hover:scale-110 transition-all duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                {/* Project Content */}
                <div
                  className={`space-y-6 text-justify  ${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <span
                      className="px-3 py-1 bg-gradient-to-r from-violet-100/80 to-indigo-100/80 dark:from-violet-50/30 dark:to-indigo-100/30
                     text-sm font-medium rounded-full"
                    >
                      {project.type}
                    </span>
                  </div>
                  {/* Project Title */}
                  <h3 className="text-3xl md:text-4xl font-bold  group-hover:text-violet-600 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-lg leading-relaxed">
                    {hoveredProject === project.id
                      ? project.longDescription
                      : project.description}
                  </p>
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1  bg-gradient-to-r from-violet-50/80 to-indigo-50/80 dark:from-violet-50/30 dark:to-indigo-50/30
                         rounded-lg text-sm font-medium
                         hover:border-violet-300 hover:text-teal-600 transition-all duration-300 
                         transform hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* Action Buttons */}
                  <div className="flex space-x-4 pt-4">
                    <a
                      href={project.github ?? "#projects"}
                      className="group inline-flex items-center px-6 py-3 bg-gray-900 
                      rounded-full font-semibold hover:bg-gray-800 transform hover:scale-105 transition-all duration-300"
                    >
                      <SiGithub size={20} className="mr-2" />
                      View Code
                      <ArrowRight
                        size={16}
                        className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </a>
                    <a
                      href={project.demo ?? "#projects"}
                      className="group inline-flex items-center px-6 py-3 border-2
                       border-violet-600  dark:bg-violet-500/50 rounded-full font-semibold hover:bg-violet-600/50 
                        transform hover:scale-105 transition-all duration-300"
                    >
                      <ExternalLink size={20} className="mr-2" />
                      Live Demo
                      <ArrowRight
                        size={16}
                        className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
