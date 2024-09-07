import { type ReactNode } from 'react'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

interface CardTitleProps {
  children: ReactNode
  id: string
  className?: string
}

export default function CardTitle({ id, children, className }: CardTitleProps) {
  return (
    <div className="flex items-center justify-center gap-2">
      <motion.h3
        layoutId={`pokemon-name-${id}`}
        className={`text-slate-300 group-hover:text-slate-50 dark:text-slate-400 dark:group-hover:text-slate-50 group-hover:underline capitalize text-center font-semibold my-5 ${className}`}
      >
        {children}
      </motion.h3>
      <ArrowUpRight
        aria-hidden="true"
        aria-label="navigate icon"
        className="opacity-0 size-0 scale-0 group-hover:opacity-100 group-hover:scale-100 group-hover:size-auto transition-transform text-slate-50 dark:text-slate-50"
      />
    </div>
  )
}
