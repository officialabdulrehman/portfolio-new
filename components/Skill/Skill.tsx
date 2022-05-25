import { SkillI } from "../../types/skillI";
import {
  SingleSkillElement,
  SkillBarElement,
  SkillBarInnerElement,
} from "./Skill.styles";

interface SkillProps extends SkillI {
  percentage: number;
  skillName: string;
  skillLevel: string;
}

const Skill: React.FC<SkillProps> = ({ percentage, skillName, skillLevel }) => {
  return (
    <SingleSkillElement>
      <h3>{skillName}</h3>
      <h4>{skillLevel}</h4>
      <SkillBarElement>
        <SkillBarInnerElement
          style={{
            width: `${percentage}%`,
          }}
        />
      </SkillBarElement>
    </SingleSkillElement>
  );
};

export default Skill;
