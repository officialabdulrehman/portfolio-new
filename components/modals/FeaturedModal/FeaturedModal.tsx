import {
  FeaturedModalElement,
  FeaturedModalImageContainerElement,
} from "./FeaturedModal.styles";
import Image from "next/image";
import FeaturedModalPicture from "../../../assets/icons/WIP.png";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { HIDE_FEATURED_MODAL } from "../../../redux/reduxTypes";
import { featureModalVariants } from "../../../animations/global";
interface FeaturedModalProps {}

const FeaturedModal: React.FC<FeaturedModalProps> = ({}) => {
  const dispatch = useDispatch();
  return (
    <FeaturedModalElement
      as={motion.div}
      onClick={() => dispatch({ type: HIDE_FEATURED_MODAL })}
      variants={featureModalVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <FeaturedModalImageContainerElement>
        <Image
          src={FeaturedModalPicture}
          height="128px"
          width="128px"
          className="showcaseRight"
        />
      </FeaturedModalImageContainerElement>
    </FeaturedModalElement>
  );
};

export default FeaturedModal;
