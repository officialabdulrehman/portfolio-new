import axios from "axios";
import { useState } from "react";
import ConnectComponent from "../components/Connect/Experiences/Connect";
import MainLayout from "../layouts/MainLayout/MainLayout";

interface ConnectProps {
  theme: string;
  setTheme: (theme: string) => {};
}

const Connect: React.FC<ConnectProps> = ({ theme, setTheme }) => {
  return (
    <MainLayout pageTitle="Connect" theme={theme} setTheme={setTheme}>
      <ConnectComponent />
    </MainLayout>
  );
};

export default Connect;
