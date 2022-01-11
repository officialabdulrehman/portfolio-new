import { ExperienceI } from "../../types/experienceI";
import { DateDiff, extractDate } from "../../util/common";
import { SingleExperienceElement } from "./SingleExperience.styles";

interface SingleExperienceProps extends ExperienceI {}

const SingleExperience: React.FC<SingleExperienceProps> = (props) => {
  const { name, role, startedAt, endedAt } = props;
  return (
    <SingleExperienceElement>
      <h3>{name}</h3>
      <h4>{role}</h4>
      <p>
        {extractDate(startedAt)} to {endedAt ? extractDate(endedAt) : "Present"}{" "}
        <span>({DateDiff.get(startedAt, endedAt)})</span>
      </p>
    </SingleExperienceElement>
  );
};

export default SingleExperience;
