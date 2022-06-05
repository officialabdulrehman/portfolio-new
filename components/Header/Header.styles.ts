import styled from "styled-components";
import { themeI } from "../../themes/themeI";

export const HeaderElement = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: ${({ theme }: { theme: themeI }) => theme.shade1};

  @media screen and (max-width: 450px) {
    width: 100vw;
    padding: 1rem 0;
    justify-content: flex-end;
  }
`;

export const NavElement = styled.nav`
  margin: auto;
  @media screen and (max-width: 450px) {
    display: none;
    height: 0;
    width: 0;
  }
`;

export const SidebarToggle = styled.button`
  display: none;
  height: 0;
  width: 0;
  @media screen and (max-width: 450px) {
    display: flex;
    width: auto;
    height: auto;
  }
`

export const AnchorElement = styled.a`
  color: ${({ theme }: { theme: themeI }) => theme.shade11};
  padding: 1rem;
  margin: 0rem 1rem;
  cursor: pointer;
  &:hover {
    transition: 0.3s;
    background-color: ${({ theme }: { theme: themeI }) => theme.shade2};
  }
  letter-spacing: 0.08rem;
  @media screen and (max-width: 450px) {
    padding: 0.5rem 1rem;
    margin: 0px;
  }
`;

export const ThemeIconElement = styled.div`
  color: ${({ theme }: { theme: themeI }) => theme.shade11};
  padding: 0;
  margin-top: auto;
  margin-bottom: auto;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;

  @media screen and (max-width: 450px) {
    margin: 0 1rem;
    display: none;
  }
`;
