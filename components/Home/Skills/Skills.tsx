// import { themeI } from "../../../themes/themeI";
import { skills } from "../../../data/skills";
import { SkillI } from "../../../types/skillI";
import Skill from "../../Skill/Skill";
import {
  SkillsElement,
  SkillsLeftElement,
  SkillsRightElement,
  UnderlineElement,
} from "./Skills.styles";

interface SkillsProps {}

const Skills: React.FC<SkillsProps> = () => {
  return (
    <SkillsElement>
      <SkillsLeftElement>
        {skills.map(
          ({ skillName, skillLevel, percentage }: SkillI, index: number) => (
            <Skill
              key={index}
              skillName={skillName}
              skillLevel={skillLevel}
              percentage={percentage}
            />
          )
        )}
      </SkillsLeftElement>
      <SkillsRightElement>
        <h1>Skills</h1>
        <UnderlineElement />
      </SkillsRightElement>
    </SkillsElement>
  );
};

export default Skills;
