import { useEffect, useState } from "react";
import type { Skill } from "../types";
import { SkillsData } from "../constants/SkillsData";

const Skills = () => {
  const [filteredSkills, setFilteredSkills] = useState<Skill[]>(SkillsData);
  const [search, setSearch] = useState<string>("");
  useEffect(() => {
    if (search)
      setFilteredSkills(
        SkillsData.filter((skill) =>
          skill.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    if (search === "") setFilteredSkills(SkillsData);
  }, [search]);
  const groupedSkills = filteredSkills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="skills" className="pt-15 pb-10  relative overflow-hidden">
      <div className=" mx-auto px-4 sm:px-6 lg:px-12 relative text-slate-600 dark:text-slate-300 ">
        <div
          className={`text-center mb-5 transform transition-all duration-1000 
          `}
        >
          <h2
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-teal-600
           dark:from-sky-400 dark:to-green-700 bg-clip-text text-transparent pb-5"
          >
            Technology Stack
          </h2>
          <div className="w-36 h-1 bg-gradient-to-r via-indigo-500 to-teal-600 mx-auto rounded-full animate-ping"></div>
          <div className="space-y-8 mt-6">
            <div className="flex flex-col md:flex-row  items-start space-y-4 md:space-y-0 justify-start md:items-center  md:justify-between ">
              <h3 className="text-3xl   font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-green-400">
                What I Bring to the Table
              </h3>
              <input
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Filter"
                className="max-w-sm w-full px-4 py-3 bg-white/10  dark:bg-gray-900/50 backdrop-blur-sm rounded-xl shadow-lg border
                       border-white/50  focus:ring-2
                focus:ring-violet-400 focus:border-violet-400 transition-all duration-300"
              />
            </div>
            {Object.entries(groupedSkills).map(([category, group]) => (
              <div key={category} className="text-start ">
                <h3 className="text-2xl font-bold  mb-8 flex items-center">
                  {category}
                </h3>
                <div className="flex flex-wrap items-center justify-start w-full gap-4">
                  {group.map(({ name, icon: Icon, color }, index) => (
                    <div
                      key={`${name}-${index}`}
                      className="flex flex-col w-36 h-36 bg-white/10  dark:bg-gray-900/50 backdrop-blur-sm px-6 py-2 rounded-xl shadow-lg border
                       border-white/50 group-hover:shadow-xl group cursor-pointer justify-center transform hover:scale-105 items-center transition-all duration-300 "
                    >
                      <Icon size={48} style={{ color }} />
                      <span>{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
