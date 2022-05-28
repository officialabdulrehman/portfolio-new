import { useDispatch } from "react-redux";
import { SHOW_PROJECT_MODAL } from "../../redux/reduxTypes";
import { FeaturedI } from "../../types/featuredI";
import { DateDiff, extractDate } from "../../util/common";
import { ProjectElement } from "./Project.styles";

interface ProjectProps extends FeaturedI {}

const Project: React.FC<ProjectProps> = (props) => {
  const dispatch = useDispatch();
  const { name, role, category, company, startedAt, endedAt } = props;
  return (
    <ProjectElement onClick={() => dispatch({ type: SHOW_PROJECT_MODAL })}>
      <h3>{name}</h3>
      <h4>{role}</h4>
      <h4 id="company">{company}</h4>
      <h5>{category}</h5>
      <p>
        {extractDate(startedAt)} to {endedAt ? extractDate(endedAt) : "Present"}{" "}
        <span>({DateDiff.get(startedAt, endedAt)})</span>
      </p>
    </ProjectElement>
  );
};

export default Project;
