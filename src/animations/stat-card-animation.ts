export const startCardParentAnimations = {
  hidden: { opacity: 0, width: '200px' },
  visible: {
    opacity: 1,
    width: '100%',
    transition: {
      delay: 0.2,
      staggerChildren: 0.2
    }
  }
}

export const statsPieItemAnimations = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.2 } }
}
