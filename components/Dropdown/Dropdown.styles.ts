import styled from "styled-components";
import { themeI } from "../../themes/themeI";

export const DropdownElement = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: ${({ theme }: { theme: themeI }) => theme.shade0};
`;
