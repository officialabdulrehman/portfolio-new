import {
  EducationElement,
  EducationLeftElement,
  EducationRightElement,
  UnderlineElement,
} from "./Education.styles";

interface EducationProps {}

const Education: React.FC<EducationProps> = () => {
  return (
    <EducationElement>
      <EducationLeftElement>Left</EducationLeftElement>
      <EducationRightElement>
        <h1>Education</h1>
        <UnderlineElement />
      </EducationRightElement>
    </EducationElement>
  );
};

export default Education;
