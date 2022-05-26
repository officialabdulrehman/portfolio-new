import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import moon from "../../assets/icons/moon.png";
import Logo from "../Logo/Logo";
import {
  AnchorElement,
  HeaderElement,
  NavElement,
  ThemeIconElement,
} from "./Header.styles";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { GlobalStateI, SWITCH_THEME } from "../../redux/reduxTypes";
import { headerVariants, themeIconAnimations } from "../../animations/global";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: GlobalStateI) => state.theme);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  let headerClasses = [];
  // let linkClasses = ["activeLink"];

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 150) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  if (scrolled) {
    headerClasses.unshift("scrolled");
    // linkClasses.unshift("activeLinkScrolled");
  }

  return (
    <HeaderElement
      className={headerClasses.join(" ")}
      as={motion.header}
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Logo />
      <NavElement>
        <Link href="/">
          <AnchorElement className={router.pathname == "/" ? "activeLink" : ""}>
            Home
          </AnchorElement>
        </Link>
        {/* <Link href="/projects">
          <AnchorElement
            className={router.pathname == "/projects" ? "activeLink" : ""}
          >
            Projects
          </AnchorElement>
        </Link> */}
        <Link href="/about">
          <AnchorElement
            className={router.pathname == "/about" ? "activeLink" : ""}
          >
            About
          </AnchorElement>
        </Link>
        <Link href="/connect">
          <AnchorElement
            className={router.pathname == "/connect" ? "activeLink" : ""}
          >
            Connect
          </AnchorElement>
        </Link>
      </NavElement>
      <ThemeIconElement
        onClickCapture={() =>
          dispatch({
            type: SWITCH_THEME,
            payload: theme,
          })
        }
        style={{
          position: "relative",
        }}
      >
        <AnimatePresence exitBeforeEnter>
          {theme === "dark" ? (
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              width="30px"
              height="30px"
              variants={themeIconAnimations}
              initial="hidden"
              animate="visible"
              exit="exit"
              // style={{
              //   position: "absolute",
              // }}
            >
              <linearGradient
                id="tXu54Kp6YqZVIlGnJHOxOa"
                x1="32"
                x2="32"
                y1="38.5"
                y2="45.502"
                gradientUnits="userSpaceOnUse"
                spreadMethod="reflect"
              >
                <stop offset="0" stopColor="#6dc7ff" />
                <stop offset="1" stopColor="#e6abff" />
              </linearGradient>
              <path
                fill="url(#tXu54Kp6YqZVIlGnJHOxOa)"
                d="M27.107,39c-0.615,0-1.114,0.553-0.996,1.157C26.651,42.917,29.082,45,32,45 c2.918,0,5.349-2.083,5.888-4.843C38.007,39.553,37.508,39,36.893,39H27.107z"
              />
              <linearGradient
                id="tXu54Kp6YqZVIlGnJHOxOb"
                x1="32"
                x2="32"
                y1="5.333"
                y2="58.718"
                gradientUnits="userSpaceOnUse"
                spreadMethod="reflect"
              >
                <stop offset="0" stopColor="#1a6dff" />
                <stop offset="1" stopColor="#c822ff" />
              </linearGradient>
              <path
                fill="url(#tXu54Kp6YqZVIlGnJHOxOb)"
                d="M32,12c-11.028,0-20,8.972-20,20s8.972,20,20,20s20-8.972,20-20S43.028,12,32,12z M32,50 c-9.925,0-18-8.075-18-18s8.075-18,18-18s18,8.075,18,18S41.925,50,32,50z"
              />
              <linearGradient
                id="tXu54Kp6YqZVIlGnJHOxOc"
                x1="32"
                x2="32"
                y1="5.333"
                y2="58.718"
                gradientUnits="userSpaceOnUse"
                spreadMethod="reflect"
              >
                <stop offset="0" stopColor="#1a6dff" />
                <stop offset="1" stopColor="#c822ff" />
              </linearGradient>
              <path
                fill="url(#tXu54Kp6YqZVIlGnJHOxOc)"
                d="M36,27c-1.103,0-2,1-2,2h-4c0-1-0.897-2-2-2l-10,0c-1.103,0-2,0.897-2,2l0,2 c0,3.309,2.691,6,6,6l2,0c3.309,0,6-2.691,6-6l4,0c0,3.309,2.691,6,6,6h2c3.309,0,6-2.691,6-6v-2c0-1.103-0.897-2-2-2H36z M28,31 c0,2.206-1.794,4-4,4l-2,0c-2.206,0-4-1.794-4-4l0-2l1.586,0l-0.293,0.293c-0.391,0.391-0.391,1.023,0,1.414 C19.488,30.902,19.744,31,20,31s0.512-0.098,0.707-0.293L22.414,29l2.172,0l-2.293,2.293c-0.391,0.391-0.391,1.023,0,1.414 C22.488,32.902,22.744,33,23,33s0.512-0.098,0.707-0.293L27.414,29H28L28,31z M46,31c0,2.206-1.794,4-4,4h-2c-2.206,0-4-1.794-4-4 v-2h1.586l-0.293,0.293c-0.391,0.391-0.391,1.023,0,1.414C37.488,30.902,37.744,31,38,31s0.512-0.098,0.707-0.293L40.414,29h2.172 l-2.293,2.293c-0.391,0.391-0.391,1.023,0,1.414C40.488,32.902,40.744,33,41,33s0.512-0.098,0.707-0.293L45.414,29H46V31z"
              />
              <linearGradient
                id="tXu54Kp6YqZVIlGnJHOxOd"
                x1="26.409"
                x2="26.409"
                y1="5.333"
                y2="58.718"
                gradientUnits="userSpaceOnUse"
                spreadMethod="reflect"
              >
                <stop offset="0" stopColor="#1a6dff" />
                <stop offset="1" stopColor="#c822ff" />
              </linearGradient>
              <path
                fill="url(#tXu54Kp6YqZVIlGnJHOxOd)"
                d="M20.819,23c0.274,0,0.548-0.112,0.745-0.333C24.22,19.701,28.023,18,31.999,18 c0.553,0,1-0.447,1-1c0-0.553-0.447-1-1-1c-4.544,0-8.891,1.943-11.925,5.333c-0.368,0.411-0.333,1.044,0.078,1.412 C20.343,22.916,20.581,23,20.819,23z"
              />
              <linearGradient
                id="tXu54Kp6YqZVIlGnJHOxOe"
                x1="32"
                x2="32"
                y1="5.333"
                y2="58.718"
                gradientUnits="userSpaceOnUse"
                spreadMethod="reflect"
              >
                <stop offset="0" stopColor="#1a6dff" />
                <stop offset="1" stopColor="#c822ff" />
              </linearGradient>
              <path
                fill="url(#tXu54Kp6YqZVIlGnJHOxOe)"
                d="M58,32c0-1.912-1.209-3.766-3.345-5.167c0.229-1.288,0.093-2.596-0.403-3.824 c-0.529-1.312-1.445-2.426-2.618-3.203c0.566-2.548,0.118-4.823-1.249-6.19s-3.641-1.815-6.19-1.249 c-0.777-1.173-1.892-2.089-3.204-2.618c-1.228-0.497-2.534-0.634-3.823-0.403C35.766,7.209,33.912,6,32,6s-3.766,1.209-5.167,3.345 c-1.289-0.23-2.597-0.094-3.824,0.403c-1.31,0.529-2.43,1.446-3.208,2.617c-2.546-0.567-4.82-0.116-6.186,1.25 c-1.367,1.367-1.815,3.643-1.249,6.19c-1.173,0.777-2.089,1.892-2.618,3.204c-0.496,1.228-0.633,2.535-0.403,3.823 C7.209,28.234,6,30.088,6,32s1.209,3.766,3.345,5.167c-0.229,1.288-0.093,2.596,0.403,3.824c0.529,1.312,1.445,2.426,2.618,3.203 c-0.566,2.548-0.118,4.823,1.249,6.19c1.368,1.368,3.647,1.817,6.19,1.248c0.778,1.174,1.893,2.09,3.204,2.619 c1.228,0.497,2.534,0.634,3.823,0.403C28.234,56.791,30.088,58,32,58s3.766-1.209,5.167-3.345c1.289,0.23,2.597,0.094,3.824-0.403 c1.311-0.529,2.425-1.445,3.203-2.619c2.546,0.569,4.823,0.12,6.19-1.248c1.367-1.367,1.815-3.643,1.249-6.19 c1.173-0.777,2.089-1.892,2.618-3.204c0.496-1.228,0.633-2.535,0.403-3.823C56.791,35.766,58,33.912,58,32z M53.024,35.82 c-0.403,0.229-0.597,0.705-0.467,1.15c0.319,1.092,0.264,2.223-0.159,3.271c-0.451,1.116-1.294,2.032-2.374,2.58 c-0.431,0.218-0.644,0.713-0.507,1.176c0.634,2.139,0.429,3.997-0.547,4.974c-0.977,0.977-2.834,1.182-4.974,0.546 c-0.46-0.135-0.958,0.076-1.176,0.507c-0.548,1.08-1.464,1.924-2.579,2.375c-1.049,0.423-2.18,0.479-3.271,0.159 c-0.447-0.133-0.922,0.063-1.15,0.467C34.764,54.888,33.336,56,32,56s-2.764-1.112-3.82-2.976c-0.182-0.319-0.518-0.507-0.87-0.507 c-0.093,0-0.188,0.013-0.28,0.04c-1.093,0.319-2.224,0.264-3.271-0.159c-1.116-0.451-2.032-1.295-2.58-2.375 c-0.219-0.431-0.717-0.641-1.176-0.507c-2.14,0.636-3.997,0.431-4.974-0.546c-0.976-0.977-1.181-2.835-0.547-4.974 c0.137-0.463-0.076-0.958-0.507-1.176c-1.08-0.548-1.923-1.464-2.374-2.579c-0.423-1.049-0.479-2.18-0.159-3.271 c0.13-0.445-0.063-0.921-0.467-1.15C9.112,34.764,8,33.336,8,32s1.112-2.764,2.976-3.82c0.403-0.229,0.597-0.705,0.467-1.15 c-0.319-1.092-0.264-2.223,0.159-3.271c0.451-1.116,1.294-2.032,2.374-2.58c0.431-0.218,0.644-0.713,0.507-1.176 c-0.634-2.139-0.429-3.997,0.547-4.974c0.976-0.976,2.836-1.181,4.974-0.547c0.468,0.136,0.962-0.079,1.179-0.512l0.056-0.119 c0.552-1.017,1.447-1.815,2.521-2.25c1.049-0.423,2.18-0.479,3.271-0.159c0.443,0.131,0.921-0.063,1.15-0.467 C29.236,9.112,30.664,8,32,8s2.764,1.112,3.82,2.976c0.229,0.403,0.704,0.598,1.15,0.467c1.091-0.321,2.223-0.264,3.271,0.159 c1.116,0.451,2.032,1.294,2.58,2.374c0.218,0.43,0.707,0.642,1.176,0.507c2.137-0.633,3.998-0.43,4.974,0.547 s1.181,2.835,0.547,4.974c-0.137,0.463,0.076,0.958,0.507,1.176c1.08,0.548,1.923,1.464,2.374,2.579 c0.423,1.049,0.479,2.18,0.159,3.271c-0.13,0.445,0.063,0.921,0.467,1.15C54.888,29.236,56,30.664,56,32S54.888,34.764,53.024,35.82 z"
              />
            </motion.svg>
          ) : (
            <motion.div
              key="sun"
              variants={themeIconAnimations}
              initial="hidden"
              animate="visible"
              exit="exit"
              // style={{
              //   position: "absolute",
              // }}
            >
              <Image key="moon" src={moon} alt="Moon" />
            </motion.div>
          )}
        </AnimatePresence>
      </ThemeIconElement>
    </HeaderElement>
  );
};

export default Header;
