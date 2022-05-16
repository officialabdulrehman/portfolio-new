// import { themeI } from "../../../themes/themeI";
import Link from "next/link";
import { CommunityWorkI } from "../../types/communityWorkI";
import {
  SingleCommunityWorkElement,
  CommunityWorkBarElement,
  CommunityWorkBarInnerElement,
} from "./CommunityWork.styles";

interface CommunityWorkProps extends CommunityWorkI {
  modal: boolean,
  setModal: (data: boolean) => any; 
}

const CommunityWork: React.FC<CommunityWorkProps> = ({
  name,
  role,
  location,
  startDate,
  endDate,
  links,
  modal, 
  setModal
}) => {
  return (
    <SingleCommunityWorkElement onClick={() => setModal(true)}>
      <h3>{name}</h3>
      <h4>{role}</h4>
      <h5>{location}</h5>
      <h5>Links: </h5>
      <ul>
        {links.map((link) => <li><Link href={link.url}><a target="_blank">{link.name}</a></Link></li>)}
      </ul>
      <p>{startDate} - {endDate ? endDate : "Present"}</p>
    </SingleCommunityWorkElement>
  );
};

export default CommunityWork;
