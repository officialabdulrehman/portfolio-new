import Link from "next/link";
import { useDispatch } from "react-redux";
import { SHOW_COMMUNITYWORK_MODAL } from "../../redux/reduxTypes";
import { CommunityWorkI } from "../../types/communityWorkI";
import { SingleCommunityWorkElement } from "./CommunityWork.styles";

interface CommunityWorkProps extends CommunityWorkI {}

const CommunityWork: React.FC<CommunityWorkProps> = (props) => {
  const { name, role, location, startDate, endDate, links } = props;
  const dispatch = useDispatch();
  return (
    <SingleCommunityWorkElement
    // onClick={() => dispatch({ type: SHOW_COMMUNITYWORK_MODAL })}
    >
      <h3>{name}</h3>
      <h4>{role}</h4>
      <h5>{location}</h5>
      <h5>Links: </h5>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.url}>
              <a target="_blank">{link.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <p>
        {startDate} - {endDate ? endDate : "Present"}
      </p>
    </SingleCommunityWorkElement>
  );
};

export default CommunityWork;
