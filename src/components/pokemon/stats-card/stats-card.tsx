import { AnimatePresence, motion } from 'framer-motion'

import { fadeAnimation } from '@/animations/common-animation'
import { startCardParentAnimations, statsPieItemAnimations } from '@/animations/stat-card-animation'
import { StatPie } from '@/pages/pokemon-details/stat-pie'
import { type Stats } from '@/utils/query-helpers'

interface StatsCardProps {
  baseStats?: Stats[]
  isNavigating: boolean
  finishNavigation: () => void
}

export default function StatsCard({ baseStats, isNavigating, finishNavigation }: StatsCardProps) {
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
              Stats
            </motion.h2>
            <motion.ul
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              variants={startCardParentAnimations}
              className="grid grid-cols-3 gap-y-6 gap-x-4 border dark:border-slate-800 bg-slate-100 bg-opacity-70 dark:bg-slate-900 p-4 rounded-xl"
              aria-label="List of Pokemon Base Stats"
            >
              {baseStats?.map(stat => (
                <motion.li key={stat.name} variants={statsPieItemAnimations}>
                  <StatPie
                    value={stat.value}
                    name={stat.name}
                    color={stat.color}
                    percent={(stat.value / stat.max) * 100}
                  />
                </motion.li>
              ))}
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
