import React from "react";
import FooterElement from "./Footer.styles";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <FooterElement>
      <p>hello@nizthedev.com &copy; NizTheDev. All rights reserved.</p>
    </FooterElement>
  );
};

export default Footer;
