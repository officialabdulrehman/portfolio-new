import styled from "styled-components";
import { themeI } from "../../themes/themeI";

export const SingleSkillElement = styled.a`
  border-radius: 0.3rem;
  padding: 1rem;
  width: fit-content;
  min-width: 300px;
  cursor: pointer;
  background-color: ${({ theme }: { theme: themeI }) => theme.shade0};
  &:hover h3 {
    color: ${({ theme }: { theme: themeI }) => theme.shade0};
  }
  &:hover h4 {
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
    text-align: end;
  }
  &:hover {
    background-color: ${({ theme }: { theme: themeI }) => theme.primary};
    color: ${({ theme }: { theme: themeI }) => theme.shade0};
  }
  &:hover div {
    background-color: ${({ theme }: { theme: themeI }) => theme.shade5};
  }
  &:hover div div {
    background-color: ${({ theme }: { theme: themeI }) => theme.shade0};
  }
`;

export const SkillBarElement = styled.div`
  width: 100%;
  height: 0.5rem;
  margin-top: 1rem;
  border-radius: 0.3rem;
  background-color: ${({ theme }: { theme: themeI }) => theme.shade1};
  &:hover {
    background-color: ${({ theme }: { theme: themeI }) => theme.shade3};
  }
`;

export const SkillBarInnerElement = styled.div`
  height: 0.5rem;
  border-radius: 0.3rem;
  background-color: ${({ theme }: { theme: themeI }) => theme.primary};
  &:hover {
    background-color: ${({ theme }: { theme: themeI }) => theme.shade0};
  }
`;
