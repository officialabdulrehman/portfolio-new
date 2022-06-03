import { featured } from "../../../data/featured";
import { FeaturedI } from "../../../types/featuredI";
import SingleFeatured from "../../SingleFeatured/SingleFeatured";
import {
  FeaturedElement,
  FeaturedLeftElement,
  FeaturedRightElement,
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
      <FeaturedRightElement>
        {featured.map(
          (
            {
              name,
              role,
              category,
              company,
              startedAt,
              endedAt,
              featured,
              url,
            }: FeaturedI,
            index: number
          ) =>
            featured && (
              <SingleFeatured
                key={index}
                name={name}
                role={role}
                category={category}
                company={company}
                startedAt={startedAt}
                endedAt={endedAt}
                featured={featured}
                url={url}
              />
            )
        )}
      </FeaturedRightElement>
    </FeaturedElement>
  );
};

export default Featured;
