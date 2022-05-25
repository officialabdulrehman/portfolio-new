import ConnectComponent from "../components/Connect/Experiences/Connect";
import MainLayout from "../layouts/MainLayout/MainLayout";

interface ConnectProps {
  theme: string;
  setTheme: (theme: string) => {};
  modal: boolean,
  setModal: (data: boolean) => any; 
}

const Connect: React.FC<ConnectProps> = ({ theme, setTheme, modal, setModal }) => {
  return (
    <MainLayout 
      pageTitle="Connect" 
      theme={theme} 
      setTheme={setTheme}
      modal={modal}
      setModal={setModal}
      >
      <ConnectComponent />
    </MainLayout>
  );
};

export default Connect;
