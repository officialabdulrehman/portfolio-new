import React from "react";
import ModalWrapperElement from "./ModalWrapper.styles";
import { motion, Variants } from "framer-motion";
import { useDispatch } from "react-redux";

interface LayoutProps {
  type: string;
  variants: Variants;
}

const ModalWrapper: React.FC<LayoutProps> = ({ children, type, variants }) => {
  const dispatch = useDispatch();
  return (
    <ModalWrapperElement
      as={motion.div}
      onClick={() => dispatch({ type })}
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </ModalWrapperElement>
  );
};

export default ModalWrapper;
