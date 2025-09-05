import SkillCard from "./SkillCard";
import htmlIcon from "../assets/skills/html.svg";
import cssIcon from "../assets/skills/css.svg";
import jsIcon from "../assets/skills/js.svg";
import twIcon from "../assets/skills/tailwind-css.svg";
import bsIcon from "../assets/skills/bootstrap.svg";
import nmpIcon from "../assets/skills/npm.svg";
import tsIcon from "../assets/skills/typescript.svg";
import reactIcon from "../assets/skills/react.svg";

const skills = [
  { name: "HTML", Icon: htmlIcon },
  { name: "CSS", Icon: cssIcon },
  { name: "JS", Icon: jsIcon },
  { name: "Tailwind", Icon: twIcon },
  { name: "Bootstrap", Icon: bsIcon },
  { name: "NPM", Icon: nmpIcon },
  { name: "React", Icon: reactIcon },
  { name: "TypeScript", Icon: tsIcon },
];

const Skills = () => {
  return (
    <section
      id="skill"
      className="skill min-h-screen py-20 lg:py:30 px-10 lg:px-10 w-full"
    >
      <h1 className="section-title">Skills</h1>
      <div className="skill-info flex items-center justify-center">
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-5">
          {skills.map(({ name, Icon }) => (
            <SkillCard key={name} skill={name} Icon={Icon} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
