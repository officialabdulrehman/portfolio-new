import {
  EducationModalElement,
  EducationModalImageContainerElement,
} from "./EducationModal.styles";
import Image from "next/image";
import EducationModalPicture from "../../../assets/icons/WIP.png";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { HIDE_EDUCATION_MODAL } from "../../../redux/reduxTypes";
import { educationModalVariants } from "../../../animations/global";
interface EducationModalProps {}

const EducationModal: React.FC<EducationModalProps> = ({}) => {
  const dispatch = useDispatch();
  return (
    <EducationModalElement
      as={motion.div}
      onClick={() => dispatch({ type: HIDE_EDUCATION_MODAL })}
      variants={educationModalVariants}
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
