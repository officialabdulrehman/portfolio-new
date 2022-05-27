import { ExperienceModalImageContainerElement } from "./ExperienceModal.styles";
import Image from "next/image";
import ExperienceModalPicture from "../../../assets/icons/WIP.png";
import { HIDE_EXPERIENCE_MODAL } from "../../../redux/reduxTypes";
import { experienceModalVariants } from "../../../animations/global";
import ModalWrapper from "../../../layouts/ModalWrapper/ModalWrapper";

interface ExperienceModalProps {}

const ExperienceModal: React.FC<ExperienceModalProps> = ({}) => {
  return (
    <ModalWrapper
      type={HIDE_EXPERIENCE_MODAL}
      variants={experienceModalVariants}
    >
      <ExperienceModalImageContainerElement>
        <Image
          src={ExperienceModalPicture}
          height="128px"
          width="128px"
          className="showcaseRight"
        />
      </ExperienceModalImageContainerElement>
    </ModalWrapper>
  );
};

export default ExperienceModal;
