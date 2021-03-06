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
    background-color: ${({ theme }) => theme.shade1};
    color: ${({ theme }) => theme.shade11};
    letter-spacing: 0.05rem;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.shade11};
    border-radius: 0.3rem;
  }
  h1,h2,h3,h4,h5 {
    /* color: ${({ theme }) => theme.shade12}; */
  }
  ul {
    list-style: none
  }
  .scrolled{
  position: fixed;
  z-index: 2;
  width: 100%;
  /* top: 0;
  left: 0; */
  box-shadow: 0 5px 20px ${({ theme }) => theme.shade2};
  background-color: ${({ theme }) => theme.shade0};
  border-bottom: none;
}
.scrolled > nav > a:hover {
  background-color: ${({ theme }) => theme.shade2};
}
.activeLink {
  color: ${({ theme }) => theme.primaryLight};
  /* background-color: ${({ theme }) => theme.shade2}; */
}
.activeLinkScrolled {
  background-color: ${({ theme }) => theme.shade0};
}

.showcaseRight{
  /* height: 480px; */
  /* width: 400px; */
  /* border-radius: 0.5rem; */
  /* object-fit: cover;
  position: relative;
  background-size: cover;
  background-position: center;
  box-shadow: 1px 2px 10px  #111;
  position: static; */
  object-fit: cover;
  z-index: 1;
}

.sidebarActiveLink {
    color:  ${({ theme }: { theme: themeI }) => theme.primary};
  }
  
// BELOW IS THE STYLING FOR DEFAULT SCROLLBAR

*::-webkit-scrollbar {
  width: 1em;
}
 
*::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.shade5};
  outline: 1px solid ${({ theme }) => theme.shade5};
}

body::-webkit-scrollbar {
  width: 1em;
}
 
body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 10px rgba(100, 100, 100, 0.3);
}
 
body::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.shade5};
  outline: 1px solid ${({ theme }) => theme.shade5};
}
`;

export default GlobalStyle;
