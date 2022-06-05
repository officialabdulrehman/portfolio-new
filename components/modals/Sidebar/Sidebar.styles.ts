import styled from "styled-components";

export const SidebarElement = styled.div`
  height: 0;
  width: 0;
  display: none;
  @media screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    left: calc(50% - 60px);
    top: calc(50% - 120px);
  }
`;
