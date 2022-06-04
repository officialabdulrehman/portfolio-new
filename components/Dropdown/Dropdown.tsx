import { AnimatePresence } from "framer-motion";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { generateRandomInteger } from "../../util/common";
import { DropdownElement, UnderlineElement } from "./Dropdown.styles";
import DropdownHeader from "./DropdownHeader/DropdownHeader";
import DropdownList from "./DropdownList/DropdownList";

interface DropdownProps {
  label: string;
  items?: string[];
  defaultCompany: string;
  setCompanyFilter: Dispatch<SetStateAction<string>>;
}

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  items,
  setCompanyFilter,
  defaultCompany,
}) => {
  const [selection, setSelection] = useState("select");
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    setShowList(!showList);
    setCompanyFilter(selection);
  }, [selection]);

  useEffect(() => {
    // this useEffect is being used to cancel out above useEffect for component mount which sets showList to true
    setShowList(false);
    setCompanyFilter(defaultCompany);
  }, []);

  return (
    <DropdownElement>
      <label>{label}</label>
      <UnderlineElement />
      <DropdownHeader
        selection={selection}
        showList={showList}
        setShowList={setShowList}
      />
      <AnimatePresence
        exitBeforeEnter
        key={generateRandomInteger(0, 100000000)}
      >
        {showList ? (
          <DropdownList
            items={items}
            selection={selection}
            setShowList={setShowList}
            setSelection={setSelection}
            key={generateRandomInteger(0, 100000000)}
          />
        ) : (
          ""
        )}
      </AnimatePresence>
    </DropdownElement>
  );
};

export default Dropdown;
