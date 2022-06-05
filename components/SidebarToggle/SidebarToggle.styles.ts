import styled from "styled-components";
import { themeI } from "../../themes/themeI";

export const SidebarToggleElement = styled.div`
  display: none;


  @media screen and (max-width: 450px) {
    display: flex;
    background-color: transparent;
    margin: 0 2rem;

    #nav-icon3 {
    width: 30px;
    height: 30px;
    position: relative;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    cursor: pointer;
    border-radius: 0.3rem;
    }

    #nav-icon3 span {
      display: block;
      position: absolute;
      height: 5px;
      width: 30px;
      background: ${({ theme }: { theme: themeI }) => theme.primary};
      border-radius: 9px;
      opacity: 1;
      left: 0;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: .25s ease-in-out;
      -moz-transition: .25s ease-in-out;
      -o-transition: .25s ease-in-out;
      transition: .25s ease-in-out;
    }

    /* Icon 3 */

    #nav-icon3 span:nth-child(1) {
      top: 0px;
    }

    #nav-icon3 span:nth-child(2),#nav-icon3 span:nth-child(3) {
      top: 10px;
    }

    #nav-icon3 span:nth-child(4) {
      top: 20px;
    }

    #nav-icon3.open span:nth-child(1) {
      top: 10px;
      width: 0%;
      left: 50%;
    }

    #nav-icon3.open span:nth-child(2) {
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      transform: rotate(45deg);
    }

    #nav-icon3.open span:nth-child(3) {
      -webkit-transform: rotate(-45deg);
      -moz-transform: rotate(-45deg);
      -o-transform: rotate(-45deg);
      transform: rotate(-45deg);
    }

    #nav-icon3.open span:nth-child(4) {
      top: 10px;
      width: 0%;
      left: 50%;
    }
  }
  
`;

