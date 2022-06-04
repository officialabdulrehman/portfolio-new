import { AnimatePresence, motion } from "framer-motion";
import React, { Dispatch, SetStateAction } from "react";
import { dropdownListVariants } from "../../../animations/global";
import { generateRandomInteger } from "../../../util/common";
import { DropdownListElement } from "./DropdownList.styles";
import DropdownListItem from "./DropdownListItem/DropdownListItem";

interface DropdownListProps {
  items?: string[];
  selection: string;
  setShowList: Dispatch<SetStateAction<boolean>>;
  setSelection: Dispatch<SetStateAction<string>>;
}

export const DropdownList: React.FC<DropdownListProps> = ({
  items,
  selection,
  setShowList,
  setSelection,
}) => {
  return (
    <DropdownListElement
      as={motion.div}
      variants={dropdownListVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      key={generateRandomInteger(0, 1000000)}
    >
      <AnimatePresence
        exitBeforeEnter
        key={generateRandomInteger(0, 100000000)}
      >
        {items?.map((item: string) =>
          item !== selection ? (
            <DropdownListItem
              item={item}
              setSelection={setSelection}
              key={generateRandomInteger(0, 100000000)}
            />
          ) : (
            ""
          )
        )}
      </AnimatePresence>
    </DropdownListElement>
  );
};

export default DropdownList;
