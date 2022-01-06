import Experience from "../components/Home/Experience/Experience";
import Showcase from "../components/Home/Showcase/Showcase";
import Skills from "../components/Home/Skills/Skills";
import MainLayout from "../layouts/MainLayout/MainLayout";

interface HomeProps {
  theme: string;
  setTheme: (theme: string) => {};
}

const Home: React.FC<HomeProps> = ({ theme, setTheme }) => {
  return (
    <MainLayout pageTitle="Home" theme={theme} setTheme={setTheme}>
      <Showcase />
      <Experience />
      <Skills />
    </MainLayout>
  );
};

export default Home;
