import { SidebarElement } from "./Sidebar.styles";
import Image from "next/image";
import { HIDE_SIDEBAR } from "../../../redux/reduxTypes";
import { educationModalVariants } from "../../../animations/global";
import ModalWrapper from "../../../layouts/ModalWrapper/ModalWrapper";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = ({}) => {
  return (
    <ModalWrapper type={HIDE_SIDEBAR} variants={educationModalVariants}>
      <SidebarElement>Sidebar</SidebarElement>
    </ModalWrapper>
  );
};

export default Sidebar;
