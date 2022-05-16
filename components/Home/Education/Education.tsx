import { educations } from "../../../data/education";
import { EducationI } from "../../../types/educationI";
import SingleEducation from "../../SingleEducation/SingleEducation";
import {
  EducationElement,
  EducationLeftElement,
  EducationRightElement,
  UnderlineElement,
} from "./Education.styles";

interface EducationProps {
  modal: boolean,
  setModal: (data: boolean) => any; 
}

const Education: React.FC<EducationProps> = ({modal, setModal}) => {
  return (
    <EducationElement>
      <EducationLeftElement>
        <h1>Education</h1>
        <UnderlineElement />
      </EducationLeftElement>
      <EducationRightElement>
        {educations.map(
          ({ name, level, city, country }: EducationI, index: number) => (
            <SingleEducation
              key={index}
              name={name}
              level={level}
              city={city}
              country={country}
              modal={modal}
              setModal={setModal}
            />
          )
        )}
      </EducationRightElement>
    </EducationElement>
  );
};

export default Education;
