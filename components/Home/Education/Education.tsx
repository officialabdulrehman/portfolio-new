import { educations } from "../../../data/education";
import { EducationI } from "../../../types/educationI";
import SingleEducation from "../../SingleEducation/SingleEducation";
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
      <EducationLeftElement>
        {educations.map(
          ({ name, level, city, country }: EducationI, index: number) => (
            <SingleEducation
              key={index}
              name={name}
              level={level}
              city={city}
              country={country}
            />
          )
        )}
      </EducationLeftElement>
      <EducationRightElement>
        <h1>Education</h1>
        <UnderlineElement />
      </EducationRightElement>
    </EducationElement>
  );
};

export default Education;
