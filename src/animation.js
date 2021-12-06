export const titleAnim = {
  hidden: { y: 500 },
  show: {
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};
export const headerAnim = {
  hidden: {
    y: "-100%",
  },
  show: {
    y: "0%",
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 1,
    },
  },
};
export const descAnim = {
  hidden: { y: -900 },
  show: {
    y: 0,
    transition: {
      duration: 0.77,
      ease: "easeOut",
    },
  },
};

export const imgAnim = {
  hidden: {
    scale: 2,
    opacity: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export const lineThrow = {
  hidden: {
    width: "0%",
    height: "0",
    x: "0%",
  },
  show: {
    width: "100%",
    height: "10px",
    x: "130%",
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const rotateCard = {
  hidden: { opacity: 0, x: 500 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.3,
      ease: "easeOut",
    },
  },
};

export const rotateCard2 = {
  hidden: { opacity: 0, x: -500 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.3,
      ease: "easeOut",
    },
  },
};
