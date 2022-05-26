import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Header from "../components/Header/Header";
import FeaturedModal from "../components/modals/FeaturedModal/FeaturedModal";
import WIP from "../components/modals/WIP/WIP";
import GlobalStyle from "../themes/global";
import { themes } from "../themes/main";
import { Provider, useSelector } from "react-redux";
import { GlobalStateI } from "../redux/reduxTypes";
import { store } from "../redux/store";

interface MyAppProps extends AppProps {}

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps, router }) => {
  return (
    <Provider store={store}>
      <ReduxWrapper
        Component={Component}
        pageProps={pageProps}
        router={router}
      />
    </Provider>
  );
};

export default MyApp;

const ReduxWrapper = ({ Component, pageProps, router }: MyAppProps) => {
  const [theme, setTheme] = useState("light");
  const [modal, setModal] = useState(false);
  const featuredModal = useSelector(
    (state: GlobalStateI) => state.featuredModal
  );
  return (
    <ThemeProvider theme={themes[theme]}>
      <AnimatePresence exitBeforeEnter>
        {modal ? <WIP modal={modal} setModal={setModal} /> : ""}
        {featuredModal ? <FeaturedModal /> : ""}
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        <Header theme={theme} setTheme={setTheme} />
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        <Component
          {...pageProps}
          theme={theme}
          setTheme={setTheme}
          key={router.route}
          modal={modal}
          setModal={setModal}
        />
      </AnimatePresence>
      <GlobalStyle />
    </ThemeProvider>
  );
};
