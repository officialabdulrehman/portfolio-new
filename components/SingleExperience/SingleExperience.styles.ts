import styled from "styled-components";
import { themeI } from "../../themes/themeI";

export const SingleExperienceElement = styled.a`
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
