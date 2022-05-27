import { FeaturedModalImageContainerElement } from "./FeaturedModal.styles";
import Image from "next/image";
import FeaturedModalPicture from "../../../assets/icons/WIP.png";
import { HIDE_FEATURED_MODAL } from "../../../redux/reduxTypes";
import { featureModalVariants } from "../../../animations/global";
import ModalWrapper from "../../../layouts/ModalWrapper/ModalWrapper";
interface FeaturedModalProps {}

const FeaturedModal: React.FC<FeaturedModalProps> = ({}) => {
  return (
    <ModalWrapper type={HIDE_FEATURED_MODAL} variants={featureModalVariants}>
      <FeaturedModalImageContainerElement>
        <Image
          src={FeaturedModalPicture}
          height="128px"
          width="128px"
          className="showcaseRight"
        />
      </FeaturedModalImageContainerElement>
    </ModalWrapper>
  );
};

export default FeaturedModal;
