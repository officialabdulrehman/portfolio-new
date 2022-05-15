import Link from "next/link";
import {
  CommunityWorksElement,
  CommunityWorksLeftElement,
  CommunityWorksRightElement,
  UnderlineElement,
} from "./CommunityWorks.styles";
import Image from "next/image";
import { CommunityWorkI } from "../../../types/communityWorkI";
import CommunityWork from "../../CommunityWork/CommunityWork";
import { communityWorks } from "../../../data/communityWorks";

interface CommunityWorksProps {}

const CommunityWorks: React.FC<CommunityWorksProps> = () => {
  return (
    <CommunityWorksElement>
      <CommunityWorksLeftElement>
        {communityWorks.map(
          (
            { name, role, location, startDate, endDate, duration, links }: CommunityWorkI,
            index: number
          ) => (
            <CommunityWork
              key={index}
              name={name}
              role={role}
              location={location}
              startDate={startDate}
              endDate={endDate}
              duration={duration}
              links={links}
            />
          )
        )}
      </CommunityWorksLeftElement>
      <CommunityWorksRightElement>
        <h1>Community Contributions</h1>
        <UnderlineElement />
      </CommunityWorksRightElement>
    </CommunityWorksElement>
  );
};

export default CommunityWorks;
