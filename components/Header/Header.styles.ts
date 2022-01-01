import styled from "styled-components";
import { themeI } from "../../themes/themeI";

export const HeaderElement = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  background-color: ${({ theme }: { theme: themeI }) => theme.shade0};
  box-shadow: 0 5px 10px #777;
`;

export const NavElement = styled.nav`
  margin: auto;
`;

export const AnchorElement = styled.a`
  color: ${({ theme }: { theme: themeI }) => theme.shade11};
  padding: 0.5rem;
  margin: 0rem 1rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }: { theme: themeI }) => theme.shade2};
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
  &:hover {
    background-color: ${({ theme }: { theme: themeI }) => theme.shade2};
  }
`;
