import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { GlobalStateI, SHOW_FEATURED_MODAL } from "../../redux/reduxTypes";
import { FeaturedI } from "../../types/featuredI";
import { DateDiff, extractDate } from "../../util/common";
import { SingleFeaturedElement } from "./SingleFeatured.styles";

interface SingleFeaturedProps extends FeaturedI {}

const SingleFeatured: React.FC<SingleFeaturedProps> = (props) => {
  const dispatch = useDispatch();
  const { name, role, category, company, startedAt, endedAt, url } = props;
  return (
    <Link href={url ? url : "/"}>
      <SingleFeaturedElement
        // onClick={() => dispatch({ type: SHOW_FEATURED_MODAL })}
        href={url ? url : "/"}
        target="_blank"
      >
        <h3>{name}</h3>
        <h4>{role}</h4>
        <h4 id="company">{company}</h4>
        <h5>{category}</h5>
        <p>
          {extractDate(startedAt)} to{" "}
          {endedAt ? extractDate(endedAt) : "Present"}{" "}
          <span>({DateDiff.get(startedAt, endedAt)})</span>
        </p>
      </SingleFeaturedElement>
    </Link>
  );
};

export default SingleFeatured;
