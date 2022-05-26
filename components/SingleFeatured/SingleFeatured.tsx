import { useDispatch, useSelector } from "react-redux";
import { GlobalStateI, SHOW_FEATURED_MODAL } from "../../redux/reduxTypes";
import { FeaturedI } from "../../types/featuredI";
import { DateDiff, extractDate } from "../../util/common";
import { SingleFeaturedElement } from "./SingleFeatured.styles";

interface SingleFeaturedProps extends FeaturedI {}

const SingleFeatured: React.FC<SingleFeaturedProps> = (props) => {
  const dispatch = useDispatch();
  const { name, role, category, company, startedAt, endedAt } = props;
  return (
    <SingleFeaturedElement
      onClick={() => dispatch({ type: SHOW_FEATURED_MODAL })}
    >
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
