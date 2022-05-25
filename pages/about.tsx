import CommunityWorks from "../components/About/CommunityWorks/CommunityWorks";
import Process from "../components/About/MyProcess/Process";
import Showcase from "../components/About/Showcase/Showcase";
import Education from "../components/Home/Education/Education";
import MainLayout from "../layouts/MainLayout/MainLayout";

interface AboutProps {
  theme: string;
  setTheme: (theme: string) => {};
  modal: boolean,
  setModal: (data: boolean) => any; 
}

const About: React.FC<AboutProps> = ({ theme, setTheme, modal, setModal }) => {
  return (
    <MainLayout 
      pageTitle="About" 
      theme={theme} 
      setTheme={setTheme}
      modal={modal}
      setModal={setModal}
      >
      <Showcase />
      <Process />
      <CommunityWorks 
        modal={modal}
        setModal={setModal}
      />
      <Education 
        modal={modal}
        setModal={setModal} 
        />
    </MainLayout>
  );
};

export default About;
