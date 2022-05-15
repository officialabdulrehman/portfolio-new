import {
  WIPElement,
  WIPImageContainerElement
} from "./WIP.styles";
import Image from "next/image";
import WIPPicture from "../../assets/icons/WIP.png";
interface WIPProps {}

const WIP: React.FC<WIPProps> = () => {
  return (
    <WIPElement>
      <WIPImageContainerElement>
        <Image
          src={WIPPicture}
          height="128px"
          width="128px"
          className="showcaseRight"
        />
      </WIPImageContainerElement>
    </WIPElement>
  );
};

export default WIP;
