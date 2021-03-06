import styled from "styled-components";
import { themeI } from "../../../themes/themeI";

export const DropdownListElement = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: ${({ theme }: { theme: themeI }) => theme.shade0};
  gap: 0.5rem;
  width: 100%;
`;
