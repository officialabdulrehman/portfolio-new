import { WIPElement, WIPImageContainerElement } from "./WIP.styles";
import Image from "next/image";
import WIPPicture from "../../../assets/icons/WIP.png";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { HIDE_WIP_MODAL } from "../../../redux/reduxTypes";
interface WIPProps {}

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

const WIP: React.FC<WIPProps> = ({}) => {
  const dispatch = useDispatch();
  return (
    <WIPElement
      as={motion.div}
      onClick={() => dispatch({ type: HIDE_WIP_MODAL })}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
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
