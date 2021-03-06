import { motion } from "framer-motion";
import React, { Dispatch, SetStateAction } from "react";
import { dropdownHeaderVariants } from "../../../animations/global";
import { generateRandomInteger } from "../../../util/common";
import { DropdownHeaderElement } from "./DropdownHeader.styles";

interface DropdownProps {
  selection: string;
  showList: boolean;
  setShowList: Dispatch<SetStateAction<boolean>>;
}

export const DropdownHeader: React.FC<DropdownProps> = ({
  selection,
  showList,
  setShowList,
}) => {
  return (
    <DropdownHeaderElement onClick={() => setShowList(!showList)}>
      {selection}
    </DropdownHeaderElement>
  );
};

export default DropdownHeader;
