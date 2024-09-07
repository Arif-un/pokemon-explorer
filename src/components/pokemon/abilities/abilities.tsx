import { RiShieldStarFill } from 'react-icons/ri'

import { AnimatePresence, motion } from 'framer-motion'

import { fadeAnimation, listItemAnimation, listParentAnimation } from '@/animations/common-animation'

interface AbilitiesProps {
  abilities?: string[]
  isNavigating: boolean
  finishNavigation: () => void
}

export default function Abilities({ abilities, isNavigating, finishNavigation }: AbilitiesProps) {
  return (
    <section className="my-4">
      <AnimatePresence mode="wait" onExitComplete={finishNavigation}>
        {!isNavigating && (
          <>
            <motion.h2
              initial="hidden"
              animate={abilities && 'visible'}
              exit="hidden"
              variants={fadeAnimation}
              className="text-slate-600 dark:text-slate-500 mb-1"
            >
              Abilities
            </motion.h2>

            <motion.ul
              variants={listParentAnimation}
              initial="hidden"
              animate={abilities && 'visible'}
              exit="hidden"
              className="flex gap-3 w-[370px] sm:w-full flex-wrap"
              aria-label="List of Pokemon Abilities"
            >
              {abilities?.map(ability => (
                <motion.li
                  key={ability}
                  variants={listItemAnimation}
                  className="capitalize flex gap-2 items-center py-1 px-3 text-indigo-700 bg-indigo-200 dark:bg-indigo-900 dark:text-indigo-100 rounded-full font-semibold"
                >
                  <RiShieldStarFill className="size-5" />
                  {ability?.replace(/-/g, ' ')}
                </motion.li>
              ))}
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
