import CommunityWork from "../components/About/CommunityWork/CommunityWork";
import Hobbies from "../components/About/Hobbies/Hobbies";
import Process from "../components/About/MyProcess/Process";
import Personality from "../components/About/Personality/Personality";
import Showcase from "../components/About/Showcase/Showcase";
import Education from "../components/Home/Education/Education";
import MainLayout from "../layouts/MainLayout/MainLayout";

interface AboutProps {
  theme: string;
  setTheme: (theme: string) => {};
}

const About: React.FC<AboutProps> = ({ theme, setTheme }) => {
  return (
    <MainLayout pageTitle="About" theme={theme} setTheme={setTheme}>
      <Showcase />
      <Process />
      <Education />
      <CommunityWork />
      <Personality />
      <Hobbies />
    </MainLayout>
  );
};

export default About;
