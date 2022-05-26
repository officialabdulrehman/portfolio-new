import CommunityWorks from "../components/About/CommunityWorks/CommunityWorks";
import Process from "../components/About/MyProcess/Process";
import Showcase from "../components/About/Showcase/Showcase";
import Education from "../components/Home/Education/Education";
import MainLayout from "../layouts/MainLayout/MainLayout";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <MainLayout pageTitle="About">
      <Showcase />
      <Process />
      <CommunityWorks />
      <Education />
    </MainLayout>
  );
};

export default About;
