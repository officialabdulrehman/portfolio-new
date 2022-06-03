import styled from "styled-components";
import { themeI } from "../../themes/themeI";

export const SingleEducationElement = styled.a`
  border-radius: 0.3rem;
  padding: 1rem;
  min-width: 350px;
  cursor: pointer;
  background-color: ${({ theme }: { theme: themeI }) => theme.shade1};
  transition: 0.3s;
  &:hover {
    background-color: ${({ theme }: { theme: themeI }) => theme.primary};
    color: ${({ theme }: { theme: themeI }) => theme.shade0};
  }
  &:hover h3 {
    color: ${({ theme }: { theme: themeI }) => theme.shade0};
  }
  &:hover h4 {
    color: ${({ theme }: { theme: themeI }) => theme.shade0};
  }
  &:hover p {
    color: ${({ theme }: { theme: themeI }) => theme.shade0};
  }
  h3 {
    color: ${({ theme }: { theme: themeI }) => theme.primary};
    letter-spacing: 0.08rem;
    font-weight: 400;
  }
  h4 {
    letter-spacing: 0.03rem;
    font-weight: 400;
    color: ${({ theme }: { theme: themeI }) => theme.shade9};
  }
  p {
    color: ${({ theme }: { theme: themeI }) => theme.shade10};
    font-size: calc(12px + 0.3vw);
    font-weight: 600;
    text-align: end;
  }
`;
