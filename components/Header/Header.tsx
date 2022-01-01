import Link from "next/link";
import React from "react";
import DarkIcon from "../icons/darkIcon/DarkIcon";
import LightIcon from "../icons/lightIcon/LightIcon";
import Logo from "../Logo/Logo";
import {
  AnchorElement,
  HeaderElement,
  NavElement,
  ThemeIconElement,
} from "./Header.styles";

interface HeaderProps {
  theme: string;
  setTheme: (theme: string) => {};
}

const Header: React.FC<HeaderProps> = ({ theme, setTheme }) => {
  return (
    <HeaderElement>
      <Logo />
      <NavElement>
        <Link href="/">
          <AnchorElement>Home</AnchorElement>
        </Link>
        <Link href="/projects">
          <AnchorElement>Projects</AnchorElement>
        </Link>
        <Link href="/about">
          <AnchorElement>About</AnchorElement>
        </Link>
        <Link href="/connect">
          <AnchorElement>Connect</AnchorElement>
        </Link>
      </NavElement>
      <ThemeIconElement
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? <LightIcon /> : <DarkIcon />}
      </ThemeIconElement>
    </HeaderElement>
  );
};

export default Header;
