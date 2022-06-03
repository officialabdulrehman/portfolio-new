import styled from "styled-components";
import { themeI } from "../../../themes/themeI";

export const ShowcaseElement = styled.div`
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
  @media screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
`;

export const ShowcaseLeftElement = styled.div`
  h4 {
    padding: 0 0 5px 0;
    margin-top: 1rem;
    font-weight: 400;
    letter-spacing: 0.06rem;
    color: ${({ theme }: { theme: themeI }) => theme.shade11};
    cursor: default;
    height: 100%;
    word-wrap: normal;
    max-width: 540px;
  }
  @media screen and (max-width: 450px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    padding: 0 1rem;
  }
`;

export const ShowcaseLeftHeading = styled.div`
  h1 {
    padding: 0 0 15px 0;
    letter-spacing: 0.2rem;
    font-weight: 400;
    cursor: default;
  }
`;

export const HireElement = styled.a`
  color: ${({ theme }: { theme: themeI }) => theme.shade11};
  margin: 2rem 0rem 0rem 0rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${({ theme }: { theme: themeI }) => theme.shade0};
  &:hover {
    transition: 0.3s;
    background-color: ${({ theme }: { theme: themeI }) => theme.primary};
    color: ${({ theme }: { theme: themeI }) => theme.shade0};
  }
  padding: 1rem 2rem;
  letter-spacing: 0.1rem;
  /* width: 70px; */
  border-radius: 0.3rem;
  cursor: pointer;
`;

export const UnderlineElement = styled.div`
  width: 2.6rem;
  height: 0.25rem;
  border-radius: 0.3rem;
  background-color: ${({ theme }: { theme: themeI }) => theme.primary};
`;

export const IconsElement = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 450px) {
    justify-content: space-evenly;
  width: 90vw;
  }
`;

export const AnchorIconElement = styled.a`
  color: ${({ theme }: { theme: themeI }) => theme.shade11};
  padding: 1rem 1.2rem;
  /* margin: 0rem 1rem; */
  
  cursor: pointer;
  &:hover {
    transition: 0.3s;
    background-color: ${({ theme }: { theme: themeI }) => theme.shade0};
    /* border-bottom: 1px solid ${({ theme }: { theme: themeI }) =>
    theme.primary}; */
  }
  img {
    height: 37px;
    /* margin-right: 12px; */
    width: 37px;
    margin-top: 5px;
  }
`;

export const ShowcaseRightElement = styled.div`
  height: 400px;
  width: 320px;
  /* box-shadow: 0 5px 10px ${({ theme }) => theme.shade5}; */
  /* border-radius: 0.5rem;
  object-fit: cover;
  position: relative;
  background-size: cover;
  background-position: center;
  box-shadow: 1px 2px 10px #111;
  position: static; */
  .showcaseRight {
    border-radius: 0.3rem;
  }
  @media screen and (max-width: 450px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // width: 100vw;
    padding: 1rem 0px 0px 0px;
    .showcaseRight {
      border-radius: 0px;
    }
  }
`;
