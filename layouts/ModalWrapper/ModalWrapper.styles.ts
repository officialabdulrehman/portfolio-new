import styled from "styled-components";
import { themeI } from "../../themes/themeI";

const ModalWrapperElement = styled.div`
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 3;
  background-color: rgba(200, 200, 200, 0.8);
`;

export default ModalWrapperElement;
