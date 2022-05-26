import React from "react";
import Head from "next/head";
import Footer from "../../components/Footer/Footer";
import MainLayoutElement from "./MainLayoutElement.styles";
import { motion } from "framer-motion";

interface LayoutProps {
  pageTitle: string;
  description?: string;
}

const containerVariants = {
  hidden: {
    opacity: 0,
    y: "50vh",
    scale: 1,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "anticipate",
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
  exit: {
    y: "-50vh",
    opacity: 0,
    transition: {
      ease: "anticipate",
      duration: 1,
    },
  },
};

const MainLayout: React.FC<LayoutProps> = ({
  pageTitle,
  description = "NizTheDev Portfolio",
  children,
}) => {
  return (
    <div>
      <Head>
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />

        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="@argentinux" key="twhandle" />

        <title>NizTheDev | {pageTitle}</title>
      </Head>
      <MainLayoutElement className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {children}
        </motion.div>
        <Footer />
      </MainLayoutElement>
    </div>
  );
};

export default MainLayout;
