import {
  EducationModalElement,
  EducationModalImageContainerElement,
} from "./EducationModal.styles";
import Image from "next/image";
import EducationModalPicture from "../../../assets/icons/WIP.png";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { HIDE_EDUCATION_MODAL } from "../../../redux/reduxTypes";
interface EducationModalProps {}

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

const EducationModal: React.FC<EducationModalProps> = ({}) => {
  const dispatch = useDispatch();
  return (
    <EducationModalElement
      as={motion.div}
      onClick={() => dispatch({ type: HIDE_EDUCATION_MODAL })}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <EducationModalImageContainerElement>
        <Image
          src={EducationModalPicture}
          height="128px"
          width="128px"
          className="showcaseRight"
        />
      </EducationModalImageContainerElement>
    </EducationModalElement>
  );
};

export default EducationModal;
