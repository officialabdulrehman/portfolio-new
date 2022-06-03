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
        <h1>Education</h1>
        <UnderlineElement />
      </EducationLeftElement>
      <EducationRightElement>
        {educations.map(
          ({ name, level, city, country, url }: EducationI, index: number) => (
            <SingleEducation
              key={index}
              name={name}
              level={level}
              city={city}
              country={country}
              url={url}
            />
          )
        )}
      </EducationRightElement>
    </EducationElement>
  );
};

export default Education;
