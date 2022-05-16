import { EducationI } from "../../types/educationI";
import { SingleEducationElement } from "./SingleEducation.styles";

interface SingleEducationProps extends EducationI {
  modal: boolean,
  setModal: (data: boolean) => any; 
}

const SingleEducation: React.FC<SingleEducationProps> = (props) => {
  const { name, level, city, country, modal, setModal } = props;
  return (
    <SingleEducationElement onClick={() => setModal(true)}>
      <h3>{name}</h3>
      <h4>{level}</h4>
      <p>
        {city}, {country}
      </p>
    </SingleEducationElement>
  );
};

export default SingleEducation;
