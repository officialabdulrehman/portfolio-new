import { WIPImageContainerElement } from "./WIP.styles";
import Image from "next/image";
import WIPPicture from "../../../assets/icons/WIP.png";
import { HIDE_WIP_MODAL } from "../../../redux/reduxTypes";
import { wipModalVariants } from "../../../animations/global";
import ModalWrapper from "../../../layouts/ModalWrapper/ModalWrapper";

interface WIPProps {}

const WIP: React.FC<WIPProps> = ({}) => {
  return (
    <ModalWrapper type={HIDE_WIP_MODAL} variants={wipModalVariants}>
      <WIPImageContainerElement>
        <Image
          src={WIPPicture}
          height="128px"
          width="128px"
          className="showcaseRight"
        />
      </WIPImageContainerElement>
    </ModalWrapper>
  );
};

export default WIP;
