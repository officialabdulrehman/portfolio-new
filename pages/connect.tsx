import ConnectComponent from "../components/Connect/Experiences/Connect";
import MainLayout from "../layouts/MainLayout/MainLayout";

interface ConnectProps {}

const Connect: React.FC<ConnectProps> = () => {
  return (
    <MainLayout pageTitle="Connect">
      <ConnectComponent />
    </MainLayout>
  );
};

export default Connect;
