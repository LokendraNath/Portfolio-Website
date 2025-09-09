// import SkillCard from "./SkillCard";
import htmlIcon from "../../public/assets/skills/html.svg";
import cssIcon from "../../public/assets/skills/css.svg";
import jsIcon from "../../public/assets/skills/js.svg";
import { motion } from "framer-motion";

import twIcon from "../../public/assets/skills/tailwind-css.svg";
import bsIcon from "../../public/assets/skills/bootstrap.svg";
import nmpIcon from "../../public/assets/skills/npm.svg";
import tsIcon from "../../public/assets/skills/typescript.svg";
import reactIcon from "../../public/assets/skills/react.svg";
import figma from "../../public/assets/skills/figma.svg";
import framerMotion from "../../public/assets/skills/brand-framer-motion.svg";
import graphSqL from "../../public/assets/skills/graphql.svg";
import materialUI from "../../public/assets/skills/material-ui.svg";
import JEST from "../../public/assets/skills/jest.svg";
import sass from "../../public/assets/skills/sass.svg";
import restAPI from "../../public/assets/skills/rest-api.svg";

const skills = [
  { name: "HTML", Icon: htmlIcon },
  { name: "CSS", Icon: cssIcon },
  { name: "JS", Icon: jsIcon },
  { name: "SASS", Icon: sass },
  { name: "Tailwind", Icon: twIcon },
  { name: "Bootstrap", Icon: bsIcon },
  { name: "RESTapi", Icon: restAPI },
  { name: "React", Icon: reactIcon },
  { name: "TypeScript", Icon: tsIcon },
  { name: "GraphQL", Icon: graphSqL },
  { name: "Jest", Icon: JEST },
  { name: "NPM", Icon: nmpIcon },
  { name: "MaterialUI", Icon: materialUI },
  { name: "Motion", Icon: framerMotion },
  { name: "Figma", Icon: figma },
];

const parentVarientMotion = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};
const childVarients = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { type: "spring", stiffness: 400 },
  },
};

const Skills = () => {
  const text = "Skills";
  const letters = text.split("");
  // Motion

  return (
    <section
      id="skill"
      className="skill min-h-screen pt-20 sm:pt-40 lg:pt-22 px-10 lg:px-10 w-full"
    >
      <h1 className="section-title">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, repeat: 1 }}
          >
            {letter}
          </motion.span>
        ))}
      </h1>

      <div className=" flex items-center justify-center sm:mt-20 lg:mt-10">
        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-5 sm:gap-10"
          variants={parentVarientMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          // animate="visible"
        >
          {skills.map(({ name, Icon }) => (
            <motion.div
              className="skillCardDiv"
              variants={childVarients}
              // animate="visible"
            >
              {typeof Icon === "string" && (
                <img src={Icon} className="w-18 md:w-22 mb-2 sm:mb-4" alt="" />
              )}
              <h3 className="text-sm sm:text-[25px] text-stone-800">{name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Skills;
