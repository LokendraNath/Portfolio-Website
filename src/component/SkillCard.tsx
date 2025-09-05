import type React from "react";

interface SkillCardProps {
  skill: string;
  Icon: React.ComponentType<{ className?: string }> | string;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, Icon }) => {
  return (
    <div className="skillCardDiv">
      {typeof Icon === "string" && (
        <img src={Icon} className="w-15 h-15 mb-2" alt="" />
      )}
      <h3 className="text-sm text-stone-800">{skill}</h3>
    </div>
  );
};
export default SkillCard;
