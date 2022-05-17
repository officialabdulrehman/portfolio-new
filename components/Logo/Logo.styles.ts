import styled from "styled-components";
import { themeI } from "../../themes/themeI";

export const LogoElement = styled.div`
  cursor: pointer;
  margin-top: auto;
  margin-bottom: auto;
  @media screen and (max-width: 450px) {
    display: none;
  }
`;

export const SpanElement = styled.span`
  color: ${({ theme }: { theme: themeI }) => theme.primary};
`;

export const AnchorElement = styled.a`
  color: ${({ theme }: { theme: themeI }) => theme.shade11};
  cursor: pointer;
`;
