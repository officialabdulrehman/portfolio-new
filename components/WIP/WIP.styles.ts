import styled from "styled-components";
import { themeI } from "../../themes/themeI";


export const WIPElement = styled.div`
  display: flex;
  // flex-direction: row;
  // justify-content: center;
  // align-item: center;
  // background-color: ${({ theme }: { theme: themeI }) => theme.secondary};
  // background: rgba(0, 0, 0, 0.5);
  // width: 100vw;
  // height: 100vh;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  // width: 100%;
  // height: 100%;
  z-index: 3;
  
  background-color: rgba(200, 200, 200, 0.8);
  position: fixed;
  top: 0;
  left: 0;
`;

export const WIPImageContainerElement = styled.div`
  height: 128px;
  width: 128px;
  left: calc(50% - 100px);
  top: calc(50% - 100px);
  position: fixed;
  z-index: 3;

  @media screen and (max-width: 450px) {
    left: calc(50% - 60px);
    top: calc(50% - 120px);
  }
`;
