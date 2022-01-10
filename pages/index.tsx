import Education from "../components/Home/Education/Education";
import Experience from "../components/Home/Experiences/Experiences";
import Featured from "../components/Home/Featured/Featured";
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
      <Featured />
      <Education />
    </MainLayout>
  );
};

export default Home;
