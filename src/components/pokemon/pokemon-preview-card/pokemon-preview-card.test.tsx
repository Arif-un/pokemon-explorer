import { type HTMLProps } from 'react'

import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { usePokemonDetails } from '@/hooks/use-pokemon-details'

import PokemonPreviewCard from './pokemon-preview-card'

vi.mock('@tanstack/react-router', () => ({
  Link: ({ children, ...props }: HTMLProps<HTMLAnchorElement>) => <a {...props}>{children}</a>
}))

vi.mock('@/hooks/use-pokemon-details', () => ({
  usePokemonDetails: vi.fn()
}))

const mockPokemonDetails = 'https://example.com/shiny.png'

describe('PokemonPreviewCard', () => {
  it('renders correctly while loading', () => {
    vi.mocked(usePokemonDetails).mockReturnValue({
      data: undefined,
      isLoading: true,
      isError: false,
      error: null
    })
    const { asFragment } = render(<PokemonPreviewCard name="Pikachu" />)

    expect(asFragment()).toMatchSnapshot()

    const loadingImage = screen.getByAltText('pokemon loading image')
    expect(loadingImage).toHaveAttribute('src', expect.stringContaining('pokemon-loader.svg'))
  })

  it('renders correctly with pokemon data', () => {
    vi.mocked(usePokemonDetails).mockReturnValue({
      data: mockPokemonDetails,
      isLoading: false,
      isError: false,
      error: null
    })

    const { asFragment } = render(<PokemonPreviewCard name="Charizard" />)

    expect(asFragment()).toMatchSnapshot()

    const pokemonImage = screen.queryByAltText('Charizard image')
    expect(pokemonImage).toHaveAttribute('src', 'https://example.com/shiny.png')

    const pokemonName = screen.getByText('Charizard')
    expect(pokemonName).toBeInTheDocument()
  })

  it('renders correctly with long name', () => {
    vi.mocked(usePokemonDetails).mockReturnValue({
      data: mockPokemonDetails,
      isLoading: false,
      isError: false,
      error: null
    })

    const longName = 'PikachuPikachuPikachuPikachu'
    const { asFragment } = render(<PokemonPreviewCard name={longName} />)

    expect(asFragment()).toMatchSnapshot()

    const pokemonName = screen.getByText(longName)
    expect(pokemonName).toHaveClass('text-base')
  })
})
