import { featured } from "../../../data/featured";
import { FeaturedI } from "../../../types/featuredI";
import FeaturedModal from "../../modals/FeaturedModal/FeaturedModal";
import SingleFeatured from "../../SingleFeatured/SingleFeatured";
import {
  FeaturedElement,
  FeaturedLeftElement,
  FeaturedRightElement,
  UnderlineElement,
} from "./Featured.styles";

interface FeaturedProps {
  modal: boolean,
  setModal: (data: boolean) => any; 
}

const Featured: React.FC<FeaturedProps> = ({modal, setModal}) => {
  return (
    <FeaturedElement>
      <FeaturedLeftElement>
        <h1>Featured</h1>
        <UnderlineElement />
      </FeaturedLeftElement>
      <FeaturedRightElement>
        {featured.map(
          (
            { name, role, category, company, startedAt, endedAt }: FeaturedI,
            index: number
          ) => (
            <SingleFeatured
              key={index}
              name={name}
              role={role}
              category={category}
              company={company}
              startedAt={startedAt}
              endedAt={endedAt}
              modal={modal}
              setModal={setModal}
            />
          )
        )}
      </FeaturedRightElement>
    </FeaturedElement>
  );
};

export default Featured;
