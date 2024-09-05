import { AnimatePresence, motion } from 'framer-motion'

import { fadeAnimation, listItemAnimation, listParentAnimation } from '@/animations/common-animation'
import { type PokemonTypes } from '@/utils/query-helpers'

interface PokemonTypesProps {
  types?: PokemonTypes[]
  isNavigating: boolean
  finishNavigation: () => void
}

export default function PokemonTypes({ types, isNavigating, finishNavigation }: PokemonTypesProps) {
  return (
    <section>
      <AnimatePresence mode="wait" onExitComplete={finishNavigation}>
        {!isNavigating && (
          <>
            <motion.h2
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={fadeAnimation}
              className="text-slate-600 dark:text-slate-500 mb-1"
            >
              Types
            </motion.h2>
            <motion.ul
              variants={listParentAnimation}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="flex gap-3"
            >
              {types?.map(type => (
                <motion.li
                  key={type?.name}
                  variants={listItemAnimation}
                  className="inline-flex justify-center items-center gap-3 p-1 rounded-full"
                  style={{ background: `color-mix(in oklab, #000000 0%, ${type.color} 14.2%)` }}
                >
                  <div
                    style={{ background: type.color, boxShadow: `0 4px 20px -2px ${type.color}` }}
                    className="rounded-full p-1"
                  >
                    <img src={type.icon} alt={`${type.name} type icon`} className="size-5" />
                  </div>
                  <span className="capitalize font-semibold mr-3 dark:text-slate-100">
                    {type.name?.replace(/-/g, ' ')}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
