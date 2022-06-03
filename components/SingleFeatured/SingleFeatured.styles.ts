import styled from "styled-components";
import { themeI } from "../../themes/themeI";

export const SingleFeaturedElement = styled.a`
  border-radius: 0.3rem;
  padding: 1rem;
  width: fit-content;
  min-width: 350px;
  cursor: pointer;
  background-color: ${({ theme }: { theme: themeI }) => theme.shade1};
  &:hover {
    transition: 0.3s;
    background: ${({ theme }: { theme: themeI }) => theme.genRandomColor()};
    color: ${({ theme }: { theme: themeI }) => theme.shade0};
  }
  &:hover h3 {
    color: ${({ theme }: { theme: themeI }) => theme.shade0};
  }
  &:hover h4 {
    color: ${({ theme }: { theme: themeI }) => theme.shade0};
  }
  &:hover h5 {
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
    color: ${({ theme }: { theme: themeI }) => theme.shade10};
  }
  h5 {
    letter-spacing: 0.03rem;
    color: ${({ theme }: { theme: themeI }) => theme.genRandomColor()};
  }
  p {
    color: ${({ theme }: { theme: themeI }) => theme.shade8};
    font-size: calc(12px + 0.3vw);
    font-weight: 600;
    text-align: end;
    font-weight: 400;
    letter-spacing: 0.01rem;
    span {
      font-size: calc(8px + 0.3vw);
      font-weight: 400;
      letter-spacing: 0;
    }
  }
  #company {
    font-size: 1rem;
    margin: 0px;
    padding: 0px;
  }
`;
