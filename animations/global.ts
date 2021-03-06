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

export const projectVariants: Variants = {
  hidden: {
    y: "-100vh",
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  },
  exit: {
    y: "100vh",
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

export const dropdownHeaderVariants: Variants = {
  hidden: {
    // opacity: 0,
    // y: "50vh",
    // scale: 1,
  },
  visible: {
    // opacity: 1,
    // y: 0,
    // transition: {
    //   duration: 1,
    //   ease: "anticipate",
    //   when: "beforeChildren",
    //   staggerChildren: 0.5,
    // },
  },
  exit: {
    // y: "-50vh",
    // opacity: 0,
    // transition: {
    //   ease: "anticipate",
    //   duration: 1,
    // },
  },
};

export const dropdownListVariants: Variants = {
  hidden: {
    opacity: 0,
    y: "-10vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: "-10vh",
    transition: {
      ease: "anticipate",
      duration: 0.5,
    },
  },
};

export const dropdownListItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: "-10vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: "-10vh",
    transition: {
      ease: "anticipate",
      duration: 0.5,
    },
  },
};

export const sidebarVariants: Variants = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tweek',
      duration: 0.6,
      ease: 'easeInOut',
    }
  },
  exit: {
    opacity: 0,
    x: '100vw',
    transition: {
      ease: 'easeInOut',
      duration: 1
    }
  }
}

export const sidebarListItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tweek',
      duration: 0.6,
      ease: 'easeInOut',
    }
  },
  exit: {
    opacity: 0,
    x: '100vw',
    transition: {
      ease: 'easeInOut',
      duration: 1
    }
  }
}