import { EducationI } from "../../types/educationI";
import { SingleEducationElement } from "./SingleEducation.styles";

interface SingleEducationProps extends EducationI {}

const SingleEducation: React.FC<SingleEducationProps> = (props) => {
  const { name, level, city, country } = props;
  return (
    <SingleEducationElement>
      <h3>{name}</h3>
      <h4>{level}</h4>
      <p>
        {city}, {country}
      </p>
    </SingleEducationElement>
  );
};

export default SingleEducation;
