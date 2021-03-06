import styled from "styled-components";
import { themeI } from "../../../themes/themeI";

export const SkillsElement = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: ${({ theme }: { theme: themeI }) => theme.shade1};

  min-height: 93vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

export const SkillsLeftElement = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem 0;
`;

export const SkillsRightElement = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: default;
`;

export const UnderlineElement = styled.div`
  width: 4.2rem;
  height: 0.25rem;
  border-radius: 0.3rem;
  margin-left: -10px;
  background-color: ${({ theme }: { theme: themeI }) => theme.primary};
`;
