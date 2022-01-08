import styled from "styled-components";
import { themeI } from "../../../themes/themeI";

export const ExperiencesElement = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: ${({ theme }: { theme: themeI }) => theme.shade0};

  min-height: 93vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

export const ExperiencesLeftElement = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: default;
`;

export const ExperiencesRightElement = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem 0;
`;

export const UnderlineElement = styled.div`
  width: 9rem;
  height: 0.25rem;
  border-radius: 0.3rem;
  margin-left: -10px;
  background-color: ${({ theme }: { theme: themeI }) => theme.primary};
`;

export const SingleExperiences = styled.a`
  border-radius: 0.3rem;
  padding: 1rem;
  width: fit-content;
  min-width: 350px;
  cursor: pointer;
  background-color: ${({ theme }: { theme: themeI }) => theme.shade1};
  &:hover {
    background-color: ${({ theme }: { theme: themeI }) => theme.primary};
    color: ${({ theme }: { theme: themeI }) => theme.shade0};
  }
  h4 {
  }
  h5 {
    /* letter-spacing: 0.01rem; */
  }
  p {
    /* font-size: calc(12px + 0.3vw); */
    /* letter-spacing: 0.01rem;
    font-weight: 600; */
    span {
      font-size: calc(8px + 0.3vw);
      font-weight: 400;
      letter-spacing: 0;
    }
  }
`;
