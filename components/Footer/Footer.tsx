import React from "react";
import FooterElement from "./Footer.styles";

interface FooterProps {}
// TODO make mail dynamic
export const Footer: React.FC<FooterProps> = () => {
  return (
    <FooterElement>
      <p>
        <a href="mailto:arehman08@hotmail.com">
          hello@<span>niz</span>thedev.com
        </a>{" "}
        | &copy; <span>Niz</span>TheDev | All rights reserved.
      </p>
    </FooterElement>
  );
};

export default Footer;
//"mailto:hello@nizthedev.com"
