import React from "react";
import FooterElement from "./Footer.styles";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <FooterElement>
      <p>
        <a href="mailto:hello@nizthedev.com">
          hello@<span>niz</span>thedev.com
        </a>{" "}
        | &copy; <span>Niz</span>TheDev | All rights reserved.
      </p>
    </FooterElement>
  );
};

export default Footer;
