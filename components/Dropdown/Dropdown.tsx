import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { DropdownElement } from "./Dropdown.styles";
import DropdownHeader from "./DropdownHeader/DropdownHeader";
import DropdownList from "./DropdownList/DropdownList";

interface DropdownProps {
  label: string;
  items?: string[];
  setCompanyFilter: Dispatch<SetStateAction<string>>;
}

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  items,
  setCompanyFilter,
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
  }, []);

  return (
    <DropdownElement>
      <label>{label}</label>
      <DropdownHeader
        selection={selection}
        showList={showList}
        setShowList={setShowList}
      />
      {showList ? (
        <DropdownList
          items={items}
          selection={selection}
          setShowList={setShowList}
          setSelection={setSelection}
        />
      ) : (
        ""
      )}
    </DropdownElement>
  );
};

export default Dropdown;
