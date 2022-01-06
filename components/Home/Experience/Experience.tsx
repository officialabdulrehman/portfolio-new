import {
  ExperienceElement,
  ExperienceLeftElement,
  ExperienceRightElement,
  UnderlineElement,
} from "./Experience.styles";

interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = () => {
  return (
    <ExperienceElement>
      <ExperienceLeftElement>
        <h2>Experience</h2>
        <UnderlineElement />
      </ExperienceLeftElement>
      <ExperienceRightElement>
        <h4>Centrox AI</h4>
        <h5>FullStack Engineer</h5>
        <p>April/2020 to Present</p>
        <br />
        <h4>Centrox AI</h4>
        <h5>FullStack Engineer</h5>
        <p>April/2020 to Present</p>
        <br />
        <h4>Centrox AI</h4>
        <h5>FullStack Engineer</h5>
        <p>April/2020 to Present</p>
        <br />
        <h4>Centrox AI</h4>
        <h5>FullStack Engineer</h5>
        <p>April/2020 to Present</p>
        <br />
        <h4>Centrox AI</h4>
        <h5>FullStack Engineer</h5>
        <p>April/2020 to Present</p>
        <br />
      </ExperienceRightElement>
    </ExperienceElement>
  );
};

export default Experience;
