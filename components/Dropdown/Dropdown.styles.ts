import styled from "styled-components";
import { themeI } from "../../themes/themeI";

export const DropdownElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${({ theme }: { theme: themeI }) => theme.shade0};
  padding: 1rem;
  border-radius: 0.3rem;
  min-width: 300px;
  gap: 0.5rem;
  position: fixed;
  z-index: 4;
  top: 50px;
  box-shadow: 1px 1px 15px ${({ theme }: { theme: themeI }) => theme.shade1};
`;

export const UnderlineElement = styled.div`
  width: 100%;
  height: 0.25rem;
  border-radius: 0.3rem;
  background-color: ${({ theme }: { theme: themeI }) => theme.primary};
`;
