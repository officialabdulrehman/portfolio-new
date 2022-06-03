import styled from "styled-components";
import { themeI } from "../../themes/themeI";

const FooterElement = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: ${({ theme }: { theme: themeI }) => theme.shade0};
  padding: 1.5rem 0;

  p {
    letter-spacing: 0.08rem;
    font-weight: 400;
    font-size: 0.9em;
    cursor: default;

    a {
      display: inline;
      &:hover {
        transition: 0.3s;
        color: ${({ theme }: { theme: themeI }) => theme.primary};
      }
    }

    span {
      color: ${({ theme }: { theme: themeI }) => theme.primary};
    }
  }
`;

export default FooterElement;
