import styled from "styled-components";
import { themeI } from "../../../../themes/themeI";

export const DropdownListItemElement = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: ${({ theme }: { theme: themeI }) => theme.shade1};
  padding: 0.5rem;
  border-radius: 0.3rem;
  cursor: pointer;
  &:hover{
    background-color: ${({ theme }: { theme: themeI }) => theme.primary};
    color: ${({ theme }: { theme: themeI }) => theme.shade0};
    transition: 0.3s;
  }
`;
