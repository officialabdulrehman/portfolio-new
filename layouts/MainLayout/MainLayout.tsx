import React from "react";
import Head from "next/head";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MainLayoutElement from "./MainLayoutElement.styles";

interface LayoutProps {
  pageTitle: string;
  description?: string;
  theme: string;
  setTheme: (theme: string) => {};
}

const MainLayout: React.FC<LayoutProps> = ({
  pageTitle,
  description = "NizTheDev Portfolio",
  children,
  theme,
  setTheme,
}) => {
  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />

        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="@argentinux" key="twhandle" />

        <title>NizTheDev | {pageTitle}</title>
      </Head>
      <MainLayoutElement>
        <Header theme={theme} setTheme={setTheme} />
        <main>{children}</main>
        <Footer />
      </MainLayoutElement>
    </>
  );
};

export default MainLayout;
