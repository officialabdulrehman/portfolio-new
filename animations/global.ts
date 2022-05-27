import { Variants } from "framer-motion";

export const mainLayoutVariants: Variants = {
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

export const headerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "anticipate",
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "anticipate",
      duration: 1,
    },
  },
};

export const themeIconAnimations: Variants = {
  hidden: {
    opacity: 0,
    rotateY: 0,
    y: "-25px",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "anticipate",
    },
  },
  exit: {
    y: "25px",
    rotateY: 0,
    opacity: 0,
    transition: {
      ease: "anticipate",
      duration: 0.5,
    },
  },
};

export const communityModalVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

export const educationModalVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

export const experienceModalVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

export const featureModalVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

export const wipModalVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
};