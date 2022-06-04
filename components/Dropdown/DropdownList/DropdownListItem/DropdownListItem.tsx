import React, { Dispatch, SetStateAction } from "react";
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
    <DropdownListItemElement onClick={() => setSelection(item)}>
      {item}
    </DropdownListItemElement>
  );
};

export default DropdownListItem;
