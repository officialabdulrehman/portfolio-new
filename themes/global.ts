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
    font-size: calc(14px + .5vw);
    font-family: 'Fira Sans', 'Lato', sans-serif;
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
`;

export default GlobalStyle;
