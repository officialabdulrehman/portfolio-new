import styled from "styled-components";
import { themeI } from "../../../themes/themeI";

export const SkillsElement = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: ${({ theme }: { theme: themeI }) => theme.shade1};

  height: 93vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

export const SkillsLeftElement = styled.div``;

export const SkillsRightElement = styled.div``;

export const UnderlineElement = styled.div`
  width: 4.2rem;
  height: 0.25rem;
  border-radius: 0.3rem;
  background-color: ${({ theme }: { theme: themeI }) => theme.primary};
`;
