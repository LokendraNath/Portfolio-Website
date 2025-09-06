import SkillCard from "./SkillCard";
import htmlIcon from "../assets/skills/html.svg";
import cssIcon from "../assets/skills/css.svg";
import jsIcon from "../assets/skills/js.svg";
import twIcon from "../assets/skills/tailwind-css.svg";
import bsIcon from "../assets/skills/bootstrap.svg";
import nmpIcon from "../assets/skills/npm.svg";
import tsIcon from "../assets/skills/typescript.svg";
import reactIcon from "../assets/skills/react.svg";
import figma from "../assets/skills/figma.svg";
import framerMotion from "../assets/skills/brand-framer-motion.svg";
import graphSqL from "../assets/skills/graphql.svg";
import materialUI from "../assets/skills/material-ui.svg";
import JEST from "../assets/skills/jest.svg";
import sass from "../assets/skills/sass.svg";
import restAPI from "../assets/skills/rest-api.svg";

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

const Skills = () => {
  return (
    <section
      id="skill"
      className="skill min-h-screen pt-20 sm:pt-40 lg:pt-22 px-10 lg:px-10 w-full"
    >
      <h1 className="section-title">Skills</h1>
      <div className=" flex items-center justify-center sm:mt-20 lg:mt-10">
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-5 sm:gap-10">
          {skills.map(({ name, Icon }) => (
            <SkillCard key={name} skill={name} Icon={Icon} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
