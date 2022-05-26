import {
  ExperienceModalElement,
  ExperienceModalImageContainerElement,
} from "./ExperienceModal.styles";
import Image from "next/image";
import ExperienceModalPicture from "../../../assets/icons/WIP.png";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { HIDE_EXPERIENCE_MODAL } from "../../../redux/reduxTypes";
interface ExperienceModalProps {}

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

const ExperienceModal: React.FC<ExperienceModalProps> = ({}) => {
  const dispatch = useDispatch();
  return (
    <ExperienceModalElement
      as={motion.div}
      onClick={() => dispatch({ type: HIDE_EXPERIENCE_MODAL })}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ExperienceModalImageContainerElement>
        <Image
          src={ExperienceModalPicture}
          height="128px"
          width="128px"
          className="showcaseRight"
        />
      </ExperienceModalImageContainerElement>
    </ExperienceModalElement>
  );
};

export default ExperienceModal;
