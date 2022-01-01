import Image from "next/image";
import React from "react";
// import { DarkIconElement } from "./DarkIcon.styles";
// import { ReactComponent as Dark } from "../../../assets/icons/sun.svg";
import moon from "../../../assets/icons/moon.png";
interface DarkIconProps {}

const DarkIcon: React.FC<DarkIconProps> = () => {
  return <Image src={moon} alt="Moon" />;
};

export default DarkIcon;
