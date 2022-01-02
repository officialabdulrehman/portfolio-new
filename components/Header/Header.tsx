import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import DarkIcon from "../icons/DarkIcon/DarkIcon";
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
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  let headerClasses = [];
  // let linkClasses = ["activeLink"];

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 40) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  if (scrolled) {
    headerClasses.unshift("scrolled");
    // linkClasses.unshift("activeLinkScrolled");
  }

  return (
    <HeaderElement className={headerClasses.join(" ")}>
      <Logo />
      <NavElement>
        <Link href="/">
          <AnchorElement className={router.pathname == "/" ? "activeLink" : ""}>
            Home
          </AnchorElement>
        </Link>
        <Link href="/projects">
          <AnchorElement
            className={router.pathname == "/projects" ? "activeLink" : ""}
          >
            Projects
          </AnchorElement>
        </Link>
        <Link href="/about">
          <AnchorElement
            className={router.pathname == "/about" ? "activeLink" : ""}
          >
            About
          </AnchorElement>
        </Link>
        <Link href="/connect">
          <AnchorElement
            className={router.pathname == "/connect" ? "activeLink" : ""}
          >
            Connect
          </AnchorElement>
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
