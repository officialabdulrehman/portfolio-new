import { ExperienceI } from "../../../types/experienceI";
import { DateDiff, extractDate } from "../../../util/common";
import {
  FeaturedElement,
  FeaturedLeftElement,
  FeaturedRightElement,
  SingleFeatured,
  UnderlineElement,
} from "./Featured.styles";

interface FeaturedProps {}

const Featured: React.FC<FeaturedProps> = () => {
  return (
    <FeaturedElement>
      <FeaturedLeftElement>
        <h1>Featured</h1>
        <UnderlineElement />
      </FeaturedLeftElement>
      <FeaturedRightElement>Right</FeaturedRightElement>
    </FeaturedElement>
  );
};

export default Featured;
