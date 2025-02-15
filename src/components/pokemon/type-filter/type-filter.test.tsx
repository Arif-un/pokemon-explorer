import { useNavigate, useSearch } from '@tanstack/react-router'
import { render, screen } from '@testing-library/react'
import ResizeObserver from 'resize-observer-polyfill'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { usePokemonTypes } from '@/hooks/use-pokemon-types'

import TypeFilter from './type-filter'

vi.mock('@/hooks/use-pokemon-types')
vi.mock('@tanstack/react-router')

global.ResizeObserver = ResizeObserver

describe('TypeFilter', () => {
  const mockTypes = [{ name: 'fire' }, { name: 'water' }, { name: 'grass' }]

  const mockNavigate = vi.fn()

  beforeEach(() => {
    vi.mocked(usePokemonTypes).mockReturnValue({
      types: mockTypes,
      isLoading: false,
      error: null,
      isError: false
    })
    vi.mocked(useSearch).mockReturnValue('')
    vi.mocked(useNavigate).mockReturnValue(mockNavigate)
  })

  it('renders correctly', () => {
    const { asFragment } = render(<TypeFilter />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('handles loading state', () => {
    vi.mocked(usePokemonTypes).mockReturnValue({
      types: [],
      isLoading: true,
      error: null,
      isError: false
    })
    render(<TypeFilter />)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('handles error state', () => {
    vi.mocked(usePokemonTypes).mockReturnValue({
      types: [],
      isLoading: false,
      error: 'Error' as unknown as Error,
      isError: true
    })
    render(<TypeFilter />)
    expect(screen.getByRole('button')).toBeDisabled()
  })
})
