import { AppProps } from "next/app";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../themes/global";
import { themes } from "../themes/main";

interface MyAppProps extends AppProps {}

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeProvider theme={themes[theme]}>
      <Component {...pageProps} theme={theme} setTheme={setTheme} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
