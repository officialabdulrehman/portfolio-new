import styled from "styled-components";
import { themeI } from "../../../themes/themeI";

export const DropdownHeaderElement = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: ${({ theme }: { theme: themeI }) => theme.shade1};
  color: ${({ theme }: { theme: themeI }) => theme.primary};
  padding: 0.5rem;
  border-radius: 0.3rem;
  cursor: pointer;
  width: 100%;
  z-index: 5;
  &:hover{
    background-color: ${({ theme }: { theme: themeI }) => theme.primary};
    color: ${({ theme }: { theme: themeI }) => theme.shade0};
    transition: 0.3s;
  }
`;