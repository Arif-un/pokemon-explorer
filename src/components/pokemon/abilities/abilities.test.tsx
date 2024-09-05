import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import Abilities from './abilities'

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
  fadeAnimation: {},
  listItemAnimation: {},
  listParentAnimation: {}
}))

describe('Abilities Component', () => {
  const abilities = ['overgrow', 'chlorophyll']

  it('renders correctly with abilities', () => {
    const finishNavigation = vi.fn()
    const { asFragment } = render(
      <Abilities abilities={abilities} isNavigating={false} finishNavigation={finishNavigation} />
    )

    abilities.forEach(ability => {
      expect(screen.getByText(ability.replace(/-/g, ' '))).toBeInTheDocument()
    })

    expect(asFragment()).toMatchSnapshot()
  })

  it('renders nothing while navigating', () => {
    const finishNavigation = vi.fn()
    const { asFragment } = render(
      <Abilities abilities={abilities} isNavigating={true} finishNavigation={finishNavigation} />
    )

    expect(screen.queryByText('Abilities')).not.toBeInTheDocument()

    expect(asFragment()).toMatchSnapshot()
  })

  it('calls finishNavigation on animation exit complete', () => {
    const finishNavigation = vi.fn()
    render(<Abilities abilities={abilities} isNavigating={false} finishNavigation={finishNavigation} />)

    expect(finishNavigation).toHaveBeenCalledTimes(1)
  })

  it('renders an empty list when no abilities are provided', () => {
    const finishNavigation = vi.fn()
    const { asFragment } = render(
      <Abilities abilities={[]} isNavigating={false} finishNavigation={finishNavigation} />
    )

    expect(screen.queryByRole('listitem')).not.toBeInTheDocument()

    expect(asFragment()).toMatchSnapshot()
  })
})
