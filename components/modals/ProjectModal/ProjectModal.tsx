import { ProjectModalImageContainerElement } from "./ProjectModal.styles";
import Image from "next/image";
import ProjectModalPicture from "../../../assets/icons/WIP.png";
import { HIDE_PROJECT_MODAL } from "../../../redux/reduxTypes";
import { featureModalVariants } from "../../../animations/global";
import ModalWrapper from "../../../layouts/ModalWrapper/ModalWrapper";
interface ProjectModalProps {}

const ProjectModal: React.FC<ProjectModalProps> = ({}) => {
  return (
    <ModalWrapper type={HIDE_PROJECT_MODAL} variants={featureModalVariants}>
      <ProjectModalImageContainerElement>
        <Image
          src={ProjectModalPicture}
          height="128px"
          width="128px"
          className="showcaseRight"
        />
      </ProjectModalImageContainerElement>
    </ModalWrapper>
  );
};

export default ProjectModal;
