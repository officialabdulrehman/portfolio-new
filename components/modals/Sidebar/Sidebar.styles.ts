import styled from "styled-components";
import { themeI } from "../../../themes/themeI";

export const SidebarElement = styled.div`
  height: 0;
  width: 0;
  display: none;
  z-index: 6;
  @media screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 40vw;
    margin-left: auto;
    height: 100%;
    background-color:  transparent;
    background-color:  ${({ theme }: { theme: themeI }) => theme.shade0};
  }
`;

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  background-color:  ${({ theme }: { theme: themeI }) => theme.shade0};
  padding-top: 2rem;
  border-top-left-radius: 0.5rem;
  z-index: 6;
`

export const ToggleContainer = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const ListContainer = styled.div`
  width: 100%;
  margin: 2rem 0;
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;
  padding: 0 1rem;
  list-style: none;
  z-index: 6;
`

export const ListItem = styled.li`
  padding: 1rem;  
  background:  ${({ theme }: { theme: themeI }) => theme.shade1};
  border-radius: 0.4rem;
  width: 100%;
  z-index: 6;
  .sidebarActiveLink {
    color:  ${({ theme }: { theme: themeI }) => theme.primary};
  }
`
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
  }
`;