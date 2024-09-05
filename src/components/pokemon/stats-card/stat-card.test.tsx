import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { type Stats } from '@/utils/query-helpers'

import StatsCard from './stats-card'

vi.mock('framer-motion', async () => {
  const actual = await vi.importActual('framer-motion')
  return {
    ...actual,
    AnimatePresence: ({
      children,
      onExitComplete
    }: {
      children: React.ReactNode
      onExitComplete?: () => void
    }) => {
      onExitComplete?.()
      return <div>{children}</div>
    }
  }
})

vi.mock('@/animations/common-animation', () => ({
  fadeAnimation: {}
}))

vi.mock('@/animations/stat-card-animation', () => ({
  startCardParentAnimations: {},
  statsPieItemAnimations: {}
}))

describe('StatsCard Component', () => {
  const baseStats: Stats[] = [
    { name: 'HP', value: 60, max: 100, color: 'red' },
    { name: 'Attack', value: 80, max: 100, color: 'blue' },
    { name: 'Defense', value: 70, max: 100, color: 'green' }
  ]

  it('renders correctly with baseStats', () => {
    const finishNavigation = vi.fn()
    const { asFragment } = render(
      <StatsCard baseStats={baseStats} isNavigating={false} finishNavigation={finishNavigation} />
    )

    // Check if the component renders the stats
    baseStats.forEach(stat => {
      expect(screen.getByText(stat.name)).toBeInTheDocument()
      expect(screen.getByText(stat.value.toString())).toBeInTheDocument()
    })

    // Check if StatPie component renders correctly without mocking
    const statPies = screen.getAllByRole('img')
    expect(statPies).toHaveLength(baseStats.length)

    baseStats.forEach((stat, index) => {
      const percent = (stat.value / stat.max) * 100
      expect(statPies[index].getAttribute('aria-label')).toContain(`${stat.name}: ${percent}%`)
    })

    expect(asFragment()).toMatchSnapshot()
  })

  it('renders nothing while navigating', () => {
    const finishNavigation = vi.fn()
    const { asFragment } = render(
      <StatsCard baseStats={baseStats} isNavigating={true} finishNavigation={finishNavigation} />
    )

    // Expect the Stats header not to appear
    expect(screen.queryByText('Stats')).not.toBeInTheDocument()

    expect(asFragment()).toMatchSnapshot()
  })

  it('calls finishNavigation on animation exit complete', () => {
    const finishNavigation = vi.fn()
    render(<StatsCard baseStats={baseStats} isNavigating={false} finishNavigation={finishNavigation} />)

    // Ensure that finishNavigation was called
    expect(finishNavigation).toHaveBeenCalledTimes(1)
  })
})
