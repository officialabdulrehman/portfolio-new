import {
  FeaturedModalElement,
  FeaturedModalImageContainerElement,
} from "./FeaturedModal.styles";
import Image from "next/image";
import FeaturedModalPicture from "../../../assets/icons/WIP.png";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { HIDE_FEATURED_MODAL } from "../../../redux/reduxTypes";
interface FeaturedModalProps {}

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

const FeaturedModal: React.FC<FeaturedModalProps> = ({}) => {
  const dispatch = useDispatch();
  return (
    <FeaturedModalElement
      as={motion.div}
      onClick={() => dispatch({ type: HIDE_FEATURED_MODAL })}
      variants={containerVariants}
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
