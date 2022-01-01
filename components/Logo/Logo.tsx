import Link from "next/link";
import React from "react";
import { AnchorElement, LogoElement, SpanElement } from "./Logo.styles";

interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
  return (
    <LogoElement>
      <Link href="/">
        <AnchorElement>
          <SpanElement>Niz</SpanElement>TheDev
        </AnchorElement>
      </Link>
    </LogoElement>
  );
};

export default Logo;
