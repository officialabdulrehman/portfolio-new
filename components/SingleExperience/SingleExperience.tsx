import { DateDiff, extractDate } from "../../util/common";
import { SingleExperienceElement } from "./SingleExperience.styles";

interface SingleExperienceProps {
  name: string;
  role: string;
  startedAt: Date;
  endedAt?: Date;
}

const SingleExperience: React.FC<SingleExperienceProps> = (props) => {
  const { name, role, startedAt, endedAt } = props;
  return (
    <SingleExperienceElement>
      <h4>{name}</h4>
      <h5>{role}</h5>
      <p>
        {extractDate(startedAt)} to {endedAt ? extractDate(endedAt) : "Present"}{" "}
        <span>({DateDiff.get(startedAt, endedAt)})</span>
      </p>
    </SingleExperienceElement>
  );
};

export default SingleExperience;
