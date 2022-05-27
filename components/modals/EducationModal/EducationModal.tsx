import { EducationModalImageContainerElement } from "./EducationModal.styles";
import Image from "next/image";
import EducationModalPicture from "../../../assets/icons/WIP.png";
import { HIDE_EDUCATION_MODAL } from "../../../redux/reduxTypes";
import { educationModalVariants } from "../../../animations/global";
import ModalWrapper from "../../../layouts/ModalWrapper/ModalWrapper";

interface EducationModalProps {}

const EducationModal: React.FC<EducationModalProps> = ({}) => {
  return (
    <ModalWrapper type={HIDE_EDUCATION_MODAL} variants={educationModalVariants}>
      <EducationModalImageContainerElement>
        <Image
          src={EducationModalPicture}
          height="128px"
          width="128px"
          className="showcaseRight"
        />
      </EducationModalImageContainerElement>
    </ModalWrapper>
  );
};

export default EducationModal;
