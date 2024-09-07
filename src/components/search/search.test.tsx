import { type DependencyList } from 'react'
import { useDebounce } from 'react-use'

import { useNavigate, useSearch } from '@tanstack/react-router'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import Search from './search'

vi.mock('@tanstack/react-router', () => ({
  useNavigate: vi.fn(),
  useSearch: vi.fn()
}))

vi.mock('react-use', () => ({
  useDebounce: vi.fn()
}))

describe('Search', () => {
  const mockNavigate = vi.fn()
  let mockSetDebouncedValue: (value: string) => void

  beforeEach(() => {
    vi.mocked(useNavigate).mockReturnValue(mockNavigate)
    vi.mocked(useSearch).mockReturnValue({ name: '' })
    vi.mocked(useDebounce).mockImplementation(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
      (callback: Function, _delay: number, _deps: DependencyList) => {
        mockSetDebouncedValue = callback as (value: string) => void
      }
    )
    vi.clearAllMocks()
  })

  it('renders correctly', () => {
    const { asFragment } = render(<Search />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('displays the search input with correct placeholder', () => {
    render(<Search />)
    const input = screen.getByPlaceholderText('Search for a Pokémon...')
    expect(input).toBeInTheDocument()
  })

  it('updates search query on input change', () => {
    render(<Search />)
    const input = screen.getByPlaceholderText('Search for a Pokémon...') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'Pikachu' } })
    expect(input.value).toBe('Pikachu')
  })

  it('calls navigate when debounced value changes', () => {
    render(<Search />)
    const input = screen.getByPlaceholderText('Search for a Pokémon...')
    fireEvent.change(input, { target: { value: 'Charizard' } })

    act(() => {
      mockSetDebouncedValue('Charizard')
    })

    expect(mockNavigate).toHaveBeenCalledWith({
      search: expect.any(Function),
      resetScroll: false
    })
  })

  it('initializes search query from URL parameters', () => {
    vi.mocked(useSearch).mockReturnValue({ name: 'Bulbasaur' })
    render(<Search />)
    const input = screen.getByPlaceholderText('Search for a Pokémon...') as HTMLInputElement
    expect(input.value).toBe('Bulbasaur')
  })

  it('does not navigate on first render with empty query', () => {
    render(<Search />)
    expect(mockNavigate).not.toHaveBeenCalled()
  })
})
