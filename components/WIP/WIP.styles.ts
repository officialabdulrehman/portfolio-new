import styled from "styled-components";
import { themeI } from "../../themes/themeI";


export const WIPElement = styled.div`
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 3;
  background-color: rgba(200, 200, 200, 0.8);
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
