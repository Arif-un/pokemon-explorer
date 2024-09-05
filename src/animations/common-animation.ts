export const fadeAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } }
}

export const listParentAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.3, staggerChildren: 0.5 } }
}

export const listItemAnimation = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.2 } }
}
