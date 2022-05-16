import { FeaturedI } from "../../types/featuredI";
import { DateDiff, extractDate } from "../../util/common";
import { SingleFeaturedElement } from "./SingleFeatured.styles";

interface SingleFeaturedProps extends FeaturedI {
  modal: boolean,
  setModal: (data: boolean) => any; 
}

const SingleFeatured: React.FC<SingleFeaturedProps> = (props) => {
  const { name, role, category, company, startedAt, endedAt, modal, setModal } = props;
  return (
    <SingleFeaturedElement onClick={() => setModal(true)}>
      <h3>{name}</h3>
      <h4>{role}</h4>
      {/* <h4>{company}</h4> */}
      <h5>{category}</h5>
      <p>
        {extractDate(startedAt)} to {endedAt ? extractDate(endedAt) : "Present"}{" "}
        <span>({DateDiff.get(startedAt, endedAt)})</span>
      </p>
    </SingleFeaturedElement>
  );
};

export default SingleFeatured;
