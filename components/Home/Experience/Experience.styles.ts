import styled from "styled-components";
import { themeI } from "../../../themes/themeI";

export const ExperienceElement = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: ${({ theme }: { theme: themeI }) => theme.shade0};

  height: 93vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

export const ExperienceLeftElement = styled.div``;

export const ExperienceRightElement = styled.div``;

export const UnderlineElement = styled.div`
  width: 9rem;
  height: 0.25rem;
  border-radius: 0.3rem;
  background-color: ${({ theme }: { theme: themeI }) => theme.primary};
`;
