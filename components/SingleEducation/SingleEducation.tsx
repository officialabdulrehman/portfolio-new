import Link from "next/link";
import { useDispatch } from "react-redux";
import { SHOW_EDUCATION_MODAL } from "../../redux/reduxTypes";
import { EducationI } from "../../types/educationI";
import { SingleEducationElement } from "./SingleEducation.styles";

interface SingleEducationProps extends EducationI {}

const SingleEducation: React.FC<SingleEducationProps> = (props) => {
  const { name, level, city, country, url } = props;
  const dispatch = useDispatch();
  return (
    <Link href={url ? url : "/"}>
      <SingleEducationElement
        //onClick={() => dispatch({ type: SHOW_EDUCATION_MODAL })}
        href={url ? url : "/"}
        target="_blank"
      >
        <h3>{name}</h3>
        <h4>{level}</h4>
        <p>
          {city}, {country}
        </p>
      </SingleEducationElement>
    </Link>
  );
};

export default SingleEducation;
