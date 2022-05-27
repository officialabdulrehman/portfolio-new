import { CommunityWorkModalImageContainerElement } from "./CommunityWorkModal.styles";
import Image from "next/image";
import CommunityWorkModalPicture from "../../../assets/icons/WIP.png";
import { useDispatch } from "react-redux";
import { HIDE_COMMUNITYWORK_MODAL } from "../../../redux/reduxTypes";
import { communityModalVariants } from "../../../animations/global";
import ModalWrapper from "../../../layouts/ModalWrapper/ModalWrapper";
interface CommunityWorkModalProps {}

const CommunityWorkModal: React.FC<CommunityWorkModalProps> = ({}) => {
  return (
    <ModalWrapper
      type={HIDE_COMMUNITYWORK_MODAL}
      variants={communityModalVariants}
    >
      <CommunityWorkModalImageContainerElement>
        <Image
          src={CommunityWorkModalPicture}
          height="128px"
          width="128px"
          className="showcaseRight"
        />
      </CommunityWorkModalImageContainerElement>
    </ModalWrapper>
  );
};

export default CommunityWorkModal;
