"use client";
import { motion } from "framer-motion";
interface ProjectCardProp {
  title: string;
  desc: string;
  image: string;
  live: string;
  techStack: string[];
  repo: string;
}
const childVarients = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.7,
    },
  },
};

const ProjectCard = ({
  title,
  image,
  live,
  repo,
  techStack,
  desc,
}: ProjectCardProp) => {
  return (
    <motion.div
      variants={childVarients}
      key={title}
      className="bg-stone-100 text-center rounded-2xl mb-7 sm:mb-15 lg:mb-7 transition duration-300 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] hover:-translate-y-4 hover:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
    >
      <img className="rounded-t-2xl" src={image} alt={title} />
      <div className="px-3 py-3 sm:py-8 lg:pt-4 flex flex-col items-center">
        <h3 className="text-2xl sm:text-3xl lg:text-2xl tracking-wider mb-1 font-bold bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent">
          {title}
        </h3>
        <h3 className="text-sm mb-4">{desc}</h3>
        <p className="text-[13px] font-gothic max-w-[80%] bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-3">
          {techStack.join(", ")}
        </p>
        <div className="flex gap-4">
          {/* GitHub Button */}
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold overflow-hidden transition-all duration-300"
            style={{ background: "#181717", color: "#fff" }}
          >
            {/* Hover overlay */}
            <span className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg"></span>
            <i className="fab fa-github relative z-10" />
            <span className="relative z-10">GitHub</span>
          </a>

          {/* Live Button */}
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 bg-green-600 hover:bg-green-700"
          >
            {/* Gradient hover effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <i className="fas fa-external-link-alt relative z-10" />
            <span className="relative z-10">Live</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};
export default ProjectCard;
