import type React from "react";

interface SkillCardProps {
  skill: string;
  Icon: React.ComponentType<{ className?: string }> | string;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, Icon }) => {
  return (
    <div className="skillCardDiv">
      {typeof Icon === "string" && (
        <img
          src={Icon}
          className="w-15 sm:w-22 h-15 sm:h-22 mb-2 sm:mb-4"
          alt=""
        />
      )}
      <h3 className="text-sm sm:text-[25px] text-stone-800">{skill}</h3>
    </div>
  );
};
export default SkillCard;
