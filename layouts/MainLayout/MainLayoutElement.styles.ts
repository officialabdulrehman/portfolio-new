import { motion } from "framer-motion";
import styled from "styled-components";
import { themeI } from "../../themes/themeI";

const MainLayoutElement = styled.main`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }: { theme: themeI }) => theme.shade1};

  .container {
  }
`;

export default MainLayoutElement;
