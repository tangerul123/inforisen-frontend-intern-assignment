// Shared framer-motion variants.

export const EASE = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4 } },
};

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

// Sticky header sliding in from above once the hero is scrolled past.
export const headerSlide = {
  hidden: { y: -96, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.35, ease: EASE } },
  exit: { y: -96, opacity: 0, transition: { duration: 0.25, ease: EASE } },
};
