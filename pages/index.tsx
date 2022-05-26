import Education from "../components/Home/Education/Education";
import Experience from "../components/Home/Experiences/Experiences";
import Featured from "../components/Home/Featured/Featured";
import Showcase from "../components/Home/Showcase/Showcase";
import MainLayout from "../layouts/MainLayout/MainLayout";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <MainLayout pageTitle="Home">
      <Showcase />
      <Featured />
      <Experience />
      <Education />
    </MainLayout>
  );
};

export default Home;
