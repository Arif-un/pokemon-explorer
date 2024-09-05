import { useAtomValue } from 'jotai'

import themeAtom from '@/global-states/theme-atom'

import StatsIcon from './stats-icon'

interface StatPieProps {
  value: number
  name: string
  percent: number
  color: string
}

export function StatPie({ value = 0, name, percent, color }: StatPieProps) {
  const theme = useAtomValue(themeAtom)
  const isDark = theme === 'dark'
  const pieBgColor = isDark ? 'rgb(15 23 42 / 1)' : 'rgb(241 245 249 / 1)'
  const pieEmptyColor = isDark ? 'rgb(2 6 23 / 1)' : 'rgb(203, 216, 228)'
  const nameDecorised = name?.replace(/-/g, ' ')

  return (
    <div className="inline-flex justify-center flex-col items-center min-w-24">
      <figure className="size-14 rounded-full bg-slate-400 bg-opacity-60 dark:bg-slate-900 grid place-content-center relative">
        <div
          role="img"
          aria-label={`${nameDecorised}: ${percent}%`}
          style={{
            background: `conic-gradient(from 213deg at 50% 50%, ${color} 0%, ${color} ${percent}%, ${pieEmptyColor} ${percent}%, ${pieEmptyColor} 83%, ${pieBgColor} 83%, ${pieBgColor} 100%)`
          }}
          className="size-14 rounded-full"
        ></div>

        <div
          style={{ color }}
          className="size-11 rounded-full bg-slate-100 dark:bg-slate-900 absolute inset-0 m-auto grid place-content-center"
        >
          <StatsIcon
            name={name}
            style={{
              filter: `drop-shadow(0 2px 7px color-mix(in srgb, ${color} 70%, transparent))`
            }}
          />
        </div>

        <span
          aria-label="Pokemon stat name"
          aria-live="polite"
          className="absolute m-auto right-0 left-0 size-4 -bottom-2 text-xs text-slate-600 dark:text-slate-400"
        >
          {value}
        </span>
      </figure>

      {/* Caption for the pie chart */}
      <figcaption className="text-sm text-center text-slate-600 dark:text-slate-400 capitalize mt-3 font-semibold">
        {nameDecorised}
      </figcaption>
    </div>
  )
}
