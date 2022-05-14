// import { themeI } from "../../../themes/themeI";
import { CommunityWorkI } from "../../types/communityWorkI";
import {
  SingleCommunityWorkElement,
  CommunityWorkBarElement,
  CommunityWorkBarInnerElement,
} from "./CommunityWork.styles";

interface CommunityWorkProps extends CommunityWorkI {}

const CommunityWork: React.FC<CommunityWorkProps> = ({
  name,
  role,
  work,
  date,
  duration,
  links,
}) => {
  return (
    <SingleCommunityWorkElement>
      <h3>{name}</h3>
      <h4>{role}</h4>
    </SingleCommunityWorkElement>
  );
};

export default CommunityWork;
