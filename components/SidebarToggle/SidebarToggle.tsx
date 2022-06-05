import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GlobalStateI,
  SHOW_SIDEBAR,
  SIDEBAR_TOGGLE_ANIMATE,
  SIDEBAR_TOGGLE_UNANIMATE,
} from "../../redux/reduxTypes";
import { SidebarToggleElement } from "./SidebarToggle.styles";

interface SidebarToggleProps {}

export const SidebarToggle: React.FC<SidebarToggleProps> = () => {
  const open = useSelector((state: GlobalStateI) => state.sidebarToggleAnimate);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({ type: SIDEBAR_TOGGLE_ANIMATE });
    dispatch({ type: SHOW_SIDEBAR });
  };
  return (
    <SidebarToggleElement>
      <div
        id="nav-icon3"
        className={open ? "open" : ""}
        onClick={() => handleClick()}
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
