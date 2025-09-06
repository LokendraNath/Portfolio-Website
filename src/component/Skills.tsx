import SkillCard from "./SkillCard";
import htmlIcon from "../../public/assets/skills/html.svg";
import cssIcon from "../../public/assets/skills/css.svg";
import jsIcon from "../../public/assets/skills/js.svg";
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
