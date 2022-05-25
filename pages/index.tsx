import Education from "../components/Home/Education/Education";
import Experience from "../components/Home/Experiences/Experiences";
import Featured from "../components/Home/Featured/Featured";
import Showcase from "../components/Home/Showcase/Showcase";
import MainLayout from "../layouts/MainLayout/MainLayout";

interface HomeProps {
  theme: string;
  setTheme: (theme: string) => {};
  modal: boolean,
  setModal: (data: boolean) => any; 
}

const Home: React.FC<HomeProps> = ({ theme, setTheme, modal, setModal }) => {
  return (
    <MainLayout 
      pageTitle="Home" 
      theme={theme} 
      setTheme={setTheme} 
      modal={modal}
      setModal={setModal}
      >
      <Showcase />
      <Featured modal={modal} setModal={setModal}/>
      <Experience modal={modal} setModal={setModal} />
      <Education modal={modal} setModal={setModal}/>
    </MainLayout>
  );
};

export default Home;
