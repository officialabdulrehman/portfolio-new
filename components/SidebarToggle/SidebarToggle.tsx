import React, { useState } from "react";
import { SidebarToggleElement } from "./SidebarToggle.styles";

interface SidebarToggleProps {}

export const SidebarToggle: React.FC<SidebarToggleProps> = () => {
  const [open, setOpen] = useState(false);
  return (
    <SidebarToggleElement>
      <div
        id="nav-icon3"
        className={open ? "open" : ""}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </SidebarToggleElement>
  );
};

export default SidebarToggle;
