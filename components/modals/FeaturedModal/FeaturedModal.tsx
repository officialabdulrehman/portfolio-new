import {
  FeaturedModalElement,
  FeaturedModalImageContainerElement
} from "./FeaturedModal.styles";
import Image from "next/image";
import FeaturedModalPicture from "../../../assets/icons/moon.png";
import { motion } from "framer-motion";
interface FeaturedModalProps {
  featured: boolean,
  setFeatured: (data: boolean) => any; // function declaration
  // doSomething(data: object): boolean; // method declaration
}

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

const FeaturedModal: React.FC<FeaturedModalProps> = ({featured, setFeatured}) => {
  return (
    <FeaturedModalElement 
    as={motion.div}
    onClick={() => setFeatured(false)} 
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit">
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
