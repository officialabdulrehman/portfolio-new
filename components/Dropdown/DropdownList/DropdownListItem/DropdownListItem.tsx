import { motion } from "framer-motion";
import React, { Dispatch, SetStateAction } from "react";
import { dropdownListItemVariants } from "../../../../animations/global";
import { DropdownListItemElement } from "./DropdownListItem.styles";

interface DropdownListItemProps {
  item: string;
  setSelection: Dispatch<SetStateAction<string>>;
}

export const DropdownListItem: React.FC<DropdownListItemProps> = ({
  item,
  setSelection,
}) => {
  return (
    <DropdownListItemElement
      onClick={() => setSelection(item)}
      as={motion.a}
      variants={dropdownListItemVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      key={item}
    >
      {item}
    </DropdownListItemElement>
  );
};

export default DropdownListItem;
