import { experiences } from "../../../data/experiences";
import { ExperienceI } from "../../../types/experienceI";
import { DateDiff, extractDate } from "../../../util/common";
import SingleExperience from "../../SingleExperience/SingleExperience";
import {
  ExperiencesElement,
  ExperiencesLeftElement,
  ExperiencesRightElement,
  UnderlineElement,
} from "./Experiences.styles";

interface ExperiencesProps {}

const Experiences: React.FC<ExperiencesProps> = () => {
  return (
    <ExperiencesElement>
      <ExperiencesLeftElement>
        {experiences.map(
          ({ name, role, startedAt, endedAt }: ExperienceI, index: number) => (
            <SingleExperience
              key={index}
              name={name}
              role={role}
              startedAt={startedAt}
              endedAt={endedAt}
            >
              <h4>{name}</h4>
              <h5>{role}</h5>
              <p>
                {extractDate(startedAt)} to{" "}
                {endedAt ? extractDate(endedAt) : "Present"}{" "}
                <span>({DateDiff.get(startedAt, endedAt)})</span>
              </p>
            </SingleExperience>
          )
        )}
      </ExperiencesLeftElement>
      <ExperiencesRightElement>
        <h1>Experiences</h1>
        <UnderlineElement />
      </ExperiencesRightElement>
    </ExperiencesElement>
  );
};

export default Experiences;
