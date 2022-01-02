import { createGlobalStyle } from "styled-components";
import { themeI } from "./themeI";

interface Props {
  theme: themeI;
}

const GlobalStyle = createGlobalStyle<Props>`
  *, *:after, *:before {
    box-sizing: border-box;
    margin: 0;
    outline: none
  }
  html {
    padding: 0;
  }
  body {
    font-size: calc(14px + .3vw);
    font-family: 'Poppins', 'Fira Sans', 'Lato', sans-serif;
    line-height: 1.7;
    background: ${({ theme }) => theme.shade0};
    color: ${({ theme }) => theme.shade15};
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.shade15};
    border-radius: 0.3rem;
  }
  ul {
    list-style: none
  }
  .scrolled{
  position: fixed;
  width: 100%;
  background-color: ${({ theme }) => theme.shade0};
  box-shadow: 0 5px 10px ${({ theme }) => theme.shade5};
  border-bottom: none;
}
.scrolled > nav > a:hover {
  /* background-color: #03a9f4; */
  background-color: ${({ theme }) => theme.shade2};
}
.activeLink {
  background-color: ${({ theme }) => theme.shade2};
}
.activeLinkScrolled {
  background-color: ${({ theme }) => theme.shade0};
}
`;

export default GlobalStyle;
