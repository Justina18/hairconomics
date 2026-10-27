import type { Variants } from "framer-motion";

export const pageVariants: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -6, transition: { duration: 0.18, ease: "easeIn" } },
};

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: (index: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.28, delay: Math.min(index * 0.045, 0.32), ease: [0.22, 1, 0.36, 1] },
  }),
};

export const menuVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.16 } },
};

export const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.98, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.24, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, scale: 0.98, y: 8, transition: { duration: 0.18, ease: "easeIn" } },
};

export const reducedMotion = {
  initial: false,
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.01 },
};
