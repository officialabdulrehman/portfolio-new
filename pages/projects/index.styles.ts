import styled from "styled-components";
import { themeI } from "../../themes/themeI";

export const ProjectsPageElement = styled.div`
  background: ${({ theme }: { theme: themeI }) => theme.shade1};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: calc(100vh - 142px);
  width: 80vw;
  margin: auto;
`
export const FiltersElement = styled.div`
  background: ${({ theme }: { theme: themeI }) => theme.shade1};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  min-height: 230px;
`
export const ProjectsElement = styled.div`
  background: ${({ theme }: { theme: themeI }) => theme.shade1};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  flex-wrap: wrap;
  padding-bottom: 2rem;
  @media screen and (max-width: 450px) {
    padding-bottom: 3rem; 
  }
  /* padding: 3rem 0; */
`

export default ProjectsPageElement