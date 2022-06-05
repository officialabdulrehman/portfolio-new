import styled from "styled-components";
import { themeI } from "../../themes/themeI";

export const MainLayoutElement = styled.main`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }: { theme: themeI }) => theme.shade1};
`;

export const SidebarToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.3rem;
  height: 3rem;
  width: 3rem;
  z-index: 3;
  top: 85vh;
  left: 75vw;
  position: fixed;
  background-color: rgba(200, 200, 200, 0.8);
`

export default MainLayoutElement;
