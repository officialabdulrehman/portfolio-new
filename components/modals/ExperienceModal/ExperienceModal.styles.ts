import styled from "styled-components";

export const ExperienceModalImageContainerElement = styled.div`
  height: 128px;
  width: 128px;
  left: calc(50% - 100px);
  top: calc(50vh - 100px);
  position: fixed;
  z-index: 3;
  display: flex;
  @media screen and (max-width: 450px) {
    left: calc(50% - 60px);
    top: calc(50% - 120px);
  }
`;
