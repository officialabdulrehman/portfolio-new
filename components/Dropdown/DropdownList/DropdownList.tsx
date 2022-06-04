import React, { Dispatch, SetStateAction } from "react";
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
    <DropdownListElement>
      {items?.map((item: string) =>
        item !== selection ? (
          <DropdownListItem item={item} setSelection={setSelection} />
        ) : (
          ""
        )
      )}
    </DropdownListElement>
  );
};

export default DropdownList;
