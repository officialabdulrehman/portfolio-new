import {
  CommunityWorkModalElement,
  CommunityWorkModalImageContainerElement,
} from "./CommunityWorkModal.styles";
import Image from "next/image";
import CommunityWorkModalPicture from "../../../assets/icons/WIP.png";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { HIDE_COMMUNITYWORK_MODAL } from "../../../redux/reduxTypes";
import { communityModalVariants } from "../../../animations/global";
interface CommunityWorkModalProps {}

const CommunityWorkModal: React.FC<CommunityWorkModalProps> = ({}) => {
  const dispatch = useDispatch();
  return (
    <CommunityWorkModalElement
      as={motion.div}
      onClick={() => dispatch({ type: HIDE_COMMUNITYWORK_MODAL })}
      variants={communityModalVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <CommunityWorkModalImageContainerElement>
        <Image
          src={CommunityWorkModalPicture}
          height="128px"
          width="128px"
          className="showcaseRight"
        />
      </CommunityWorkModalImageContainerElement>
    </CommunityWorkModalElement>
  );
};

export default CommunityWorkModal;
