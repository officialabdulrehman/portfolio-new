import { ExperienceI } from "../../types/experienceI";
import { DateDiff, extractDate } from "../../util/common";
import { SingleExperienceElement } from "./SingleExperience.styles";

interface SingleExperienceProps extends ExperienceI {
  modal: boolean,
  setModal: (data: boolean) => any; 
}

const SingleExperience: React.FC<SingleExperienceProps> = (props) => {
  const { name, role, startedAt, endedAt, modal, setModal } = props;
  return (
    <SingleExperienceElement onClick={() => setModal(true)}>
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
