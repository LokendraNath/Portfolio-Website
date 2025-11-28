"use client";
// import SkillCard from "./SkillCard";
import htmlIcon from "@/public/assets/skills/html.svg";
import cssIcon from "@/public/assets/skills/css.svg";
import jsIcon from "@/public/assets/skills/javascript.png";
import twIcon from "@/public/assets/skills/tailwind-css.svg";
import tsIcon from "@/public/assets/skills/typescript.png";
import reactIcon from "@/public/assets/skills/react.svg";
import git from "@/public/assets/skills/git.png";
import redux from "@/public/assets/skills/redux.png";
import framerMotion from "@/public/assets/skills/brand-framer-motion.png";
import materialUI from "@/public/assets/skills/material-ui.svg";
import MongoDB from "@/public/assets/skills/mongodb_.png";
import MySQL from "@/public/assets/skills/mysql_.png";
import NodeJS from "@/public/assets/skills/node-js.svg";
import ExpressJS from "@/public/assets/skills/express-js2.svg";
import Learning from "@/public/assets/skills/learning2.png";
import zustand from "@/public/assets/skills/zustand.svg";
import nextjs from "@/public/assets/skills/nextjs.png";
import Image from "next/image";

const skills = [
  { name: "HTML", Icon: htmlIcon },
  { name: "CSS", Icon: cssIcon },
  { name: "Tailwind", Icon: twIcon },
  { name: "JS", Icon: jsIcon },
  { name: "TypeScript", Icon: tsIcon },
  { name: "Git", Icon: git },
  { name: "React", Icon: reactIcon },
  { name: "Redux", Icon: redux },
  { name: "Zustand", Icon: zustand },
  { name: "MaterialUI", Icon: materialUI },
  { name: "Motion", Icon: framerMotion },
  { name: "NodeJS", Icon: NodeJS },
  { name: "ExpressJs", Icon: ExpressJS },
  { name: "MongoDB", Icon: MongoDB },
  // { name: "PostgresSQL", Icon: PostgresSQL },
  { name: "MySQL", Icon: MySQL },
  { name: "Next.js", Icon: nextjs },
];

const Skills = () => {
  return (
    <section
      id="skill"
      className="skill min-h-screen pt-20 sm:pt-40 lg:pt-22 px-10 lg:px-10 w-full"
    >
      <h1 className="text-center text-4xl font-bold">Skills</h1>

      <div className="flex items-center justify-center sm:mt-20 lg:mt-10">
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-y-3  gap-x-5 sm:gap-x-20 sm:gap-y-5">
          {skills.map(({ name, Icon }) => (
            <div key={name} className="skillCardDiv">
              <Image
                src={Icon}
                className="w-13 md:w-22 mb-2 sm:mb-4"
                alt="Hello"
              />

              <h3 className="text-[11px] text-center line-clamp-1 sm:text-[15px] text-stone-800">
                {name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
