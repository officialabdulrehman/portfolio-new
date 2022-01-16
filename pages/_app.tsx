import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Header from "../components/Header/Header";
import GlobalStyle from "../themes/global";
import { themes } from "../themes/main";

interface MyAppProps extends AppProps {}

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps, router }) => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeProvider theme={themes[theme]}>
      <AnimatePresence exitBeforeEnter>
        <Header theme={theme} setTheme={setTheme} />
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        <Component
          {...pageProps}
          theme={theme}
          setTheme={setTheme}
          key={router.route}
        />
      </AnimatePresence>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
