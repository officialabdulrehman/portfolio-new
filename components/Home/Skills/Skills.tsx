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
        <h4>NodeJS</h4>
        <h5>Good</h5>
        <p>April/2020 to Present</p>
        <br />
        <h4>NodeJS</h4>
        <h5>Good</h5>
        <p>April/2020 to Present</p>
        <br />
        <h4>NodeJS</h4>
        <h5>Good</h5>
        <p>April/2020 to Present</p>
        <br />
        <h4>NodeJS</h4>
        <h5>Good</h5>
        <p>April/2020 to Present</p>
        <br />
        <h4>NodeJS</h4>
        <h5>Good</h5>
        <p>April/2020 to Present</p>
        <br />
      </SkillsLeftElement>
      <SkillsRightElement>
        <h2>Skills</h2>
        <UnderlineElement />
      </SkillsRightElement>
    </SkillsElement>
  );
};

export default Skills;
