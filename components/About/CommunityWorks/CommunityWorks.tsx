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

interface CommunityWorksProps {
  modal: boolean,
  setModal: (data: boolean) => any; 
}

const CommunityWorks: React.FC<CommunityWorksProps> = ({modal, setModal}) => {
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
              modal={modal}
              setModal={setModal}
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
