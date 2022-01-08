import { experiences } from "../../../data/experiences";
import { ExperienceI } from "../../../types/experienceI";
import { DateDiff, extractDate } from "../../../util/common";
import {
  ExperiencesElement,
  ExperiencesLeftElement,
  ExperiencesRightElement,
  SingleExperiences,
  UnderlineElement,
} from "./Experiences.styles";

interface ExperiencesProps {}

const Experiences: React.FC<ExperiencesProps> = () => {
  return (
    <ExperiencesElement>
      <ExperiencesLeftElement>
        <h1>Experiences</h1>
        <UnderlineElement />
      </ExperiencesLeftElement>
      <ExperiencesRightElement>
        {experiences.map(
          ({ name, role, startedAt, endedAt }: ExperienceI, index: number) => (
            <SingleExperiences key={index}>
              <h4>{name}</h4>
              <h5>{role}</h5>
              <p>
                {extractDate(startedAt)} to{" "}
                {endedAt ? extractDate(endedAt) : "Present"}{" "}
                <span>({DateDiff.get(startedAt, endedAt)})</span>
              </p>
            </SingleExperiences>
          )
        )}
        {/* <SingleExperiences>
          <h4>Centrox AI</h4>
          <h5>FullStack Engineer</h5>
          <p>
            Apr/2020 to Present <span>(10 months)</span>
          </p>
        </SingleExperiences>
        <SingleExperiences>
          <h4>Freelance</h4>
          <h5>FullStack Engineer</h5>
          <p>
            Sep/2020 to Dec/2020 <span>(4 months)</span>
          </p>
        </SingleExperiences>
        <SingleExperiences>
          <h4>University of Sindh</h4>
          <h5>FullStack Developer - Intern</h5>
          <p>
            Jan/2019 to Dec/2019 <span>(1 year)</span>
          </p>
        </SingleExperiences> */}
      </ExperiencesRightElement>
    </ExperiencesElement>
  );
};

export default Experiences;
