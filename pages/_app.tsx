import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Header from "../components/Header/Header";
import FeaturedModal from "../components/modals/FeaturedModal/FeaturedModal";
import WIP from "../components/modals/WIP/WIP";
import GlobalStyle from "../themes/global";
import { themes } from "../themes/main";
import { Provider, useSelector } from "react-redux";
import { GlobalStateI } from "../redux/reduxTypes";
import { store } from "../redux/store";
import ExperienceModal from "../components/modals/ExperienceModal/ExperienceModal";
import EducationModal from "../components/modals/EducationModal/EducationModal";
import CommunityWorkModal from "../components/modals/CommunityWorkModal/CommunityWorkModal";
import ProjectModal from "../components/modals/ProjectModal/ProjectModal";
import Sidebar from "../components/modals/Sidebar/Sidebar";

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
  const wipModal = useSelector((state: GlobalStateI) => state.wipModal);
  const theme = useSelector((state: GlobalStateI) => state.theme);
  const featuredModal = useSelector(
    (state: GlobalStateI) => state.featuredModal
  );
  const experienceModal = useSelector(
    (state: GlobalStateI) => state.experienceModal
  );
  const educationModal = useSelector(
    (state: GlobalStateI) => state.educationModal
  );
  const communityWorkModal = useSelector(
    (state: GlobalStateI) => state.communityWorkModal
  );
  const sidebar = useSelector((state: GlobalStateI) => state.sidebar);
  const projectModal = useSelector((state: GlobalStateI) => state.projectModal);
  return (
    <ThemeProvider theme={themes[theme]}>
      <AnimatePresence exitBeforeEnter>
        {sidebar ? <Sidebar /> : ""}
        {wipModal ? <WIP /> : ""}
        {featuredModal ? <FeaturedModal /> : ""}
        {experienceModal ? <ExperienceModal /> : ""}
        {educationModal ? <EducationModal /> : ""}
        {communityWorkModal ? <CommunityWorkModal /> : ""}
        {projectModal ? <ProjectModal /> : ""}
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        <Header />
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <GlobalStyle />
    </ThemeProvider>
  );
};
