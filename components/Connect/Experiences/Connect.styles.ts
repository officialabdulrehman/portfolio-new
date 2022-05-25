import styled from "styled-components";
import { themeI } from "../../../themes/themeI";

export const ConnectElement = styled.div`
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

export const ConnectLeftElement = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: default;

  .connect {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .icons {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
`;

export const IconsContainer = styled.div`
  gap: 1.5rem;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 450px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 90vw;
    .icons{
    }
    a{
      width: 0px;
      padding: 0px;
      margin-right: 2rem;
      &:click {
        padding: 0;
      }
    }
  }
`;

export const ConnectRightElement = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem 0;
  @media screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
`;

export const UnderlineElement = styled.div`
  width: 11rem;
  height: 0.25rem;
  border-radius: 0.3rem;
  margin-left: -5px;
  background-color: ${({ theme }: { theme: themeI }) => theme.primary};
`;

export const FormElement = styled.form`
  background-color: ${({ theme }: { theme: themeI }) => theme.shade0};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 3rem;
  border-radius: 0.3rem;

  input {
    border: none;
    border: 1px solid ${({ theme }: { theme: themeI }) => theme.shade1};
    border-radius: 0.3rem;
    font-size: 1rem;
    width: 300px;
    height: 50px;
    padding: 0 1rem;
    background-color: ${({ theme }: { theme: themeI }) => theme.shade1};
    color: ${({ theme }: { theme: themeI }) => theme.shade10};
    &:hover,
    &:focus {
      border: 1px solid ${({ theme }: { theme: themeI }) => theme.primary};
    }
    &:hover {
      background-color: ${({ theme }: { theme: themeI }) => theme.primary};
      color: ${({ theme }: { theme: themeI }) => theme.shade0};
      &::placeholder {
        color: ${({ theme }: { theme: themeI }) => theme.shade0};
      }
    }
  }

  textarea {
    border: none;
    border-radius: 0.3rem;
    width: 300px;
    padding: 1rem;
    font: inherit;
    font-size: 1rem;
    background-color: ${({ theme }: { theme: themeI }) => theme.shade1};
    color: ${({ theme }: { theme: themeI }) => theme.shade10};
    resize: none;
    border: 1px solid ${({ theme }: { theme: themeI }) => theme.shade1};
    &:hover,
    &:focus {
      border: 1px solid ${({ theme }: { theme: themeI }) => theme.primary};
    }
    &:hover {
      background-color: ${({ theme }: { theme: themeI }) => theme.primary};
      color: ${({ theme }: { theme: themeI }) => theme.shade0};
      &::placeholder {
        color: ${({ theme }: { theme: themeI }) => theme.shade0};
      }
    }
  }

  button {
    font-size: 1.2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: ${({ theme }: { theme: themeI }) => theme.shade11};
    background-color: ${({ theme }: { theme: themeI }) => theme.shade1};
    &:hover {
      background-color: ${({ theme }: { theme: themeI }) => theme.primary};
      color: ${({ theme }: { theme: themeI }) => theme.shade0};
    }
    padding: 1rem 2rem;
    letter-spacing: 0.1rem;
    border: none;
    border-radius: 0.3rem;
    cursor: pointer;
  }
`;
