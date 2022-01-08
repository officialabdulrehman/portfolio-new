// import { themeI } from "../../../themes/themeI";
import {
  SingleSkillElement,
  SkillBarElement,
  SkillBarInnerElement,
} from "./Skill.styles";

interface SkillProps {
  width: number;
  skillName: string;
  skillLevel: string;
}

const Skill: React.FC<SkillProps> = ({ width, skillName, skillLevel }) => {
  return (
    <SingleSkillElement>
      <h4>{skillName}</h4>
      <h5>{skillLevel}</h5>
      <SkillBarElement>
        <SkillBarInnerElement
          style={{
            width: `${width}%`,
          }}
        />
      </SkillBarElement>
    </SingleSkillElement>
  );
};

export default Skill;
