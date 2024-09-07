import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { useImageLoader } from '@/hooks/use-image-loader'

import PokemonPreviewCard from './pokemon-preview-card'

vi.mock('@tanstack/react-router', () => ({
  Link: ({ children, search, ...props }: React.HTMLProps<HTMLAnchorElement> & { search: string }) => (
    <a {...props}>{children}</a>
  )
}))

vi.mock('@/hooks/use-image-loader', () => ({
  useImageLoader: vi.fn()
}))

describe('PokemonPreviewCard', () => {
  it('renders correctly while loading', () => {
    vi.mocked(useImageLoader).mockReturnValue({
      src: '/assets/pokemon-loader.svg',
      isLoading: true,
      error: null
    })

    const { asFragment } = render(
      <PokemonPreviewCard name="Pikachu" image="https://example.com/pikachu.png" />
    )

    expect(asFragment()).toMatchSnapshot()

    const loadingImage = screen.getByAltText('Pikachu image')
    expect(loadingImage).toHaveAttribute('src', '/assets/pokemon-loader.svg')
  })

  it('renders correctly with loaded image', () => {
    vi.mocked(useImageLoader).mockReturnValue({
      src: 'https://example.com/pikachu.png',
      isLoading: false,
      error: null
    })

    const { asFragment } = render(
      <PokemonPreviewCard name="Pikachu" image="https://example.com/pikachu.png" />
    )

    expect(asFragment()).toMatchSnapshot()

    const pokemonImage = screen.getByAltText('Pikachu image')
    expect(pokemonImage).toHaveAttribute('src', 'https://example.com/pikachu.png')

    const pokemonName = screen.getByText('Pikachu')
    expect(pokemonName).toBeInTheDocument()
  })

  it('renders correctly with long name', () => {
    vi.mocked(useImageLoader).mockReturnValue({
      src: 'https://example.com/long-name-pokemon.png',
      isLoading: false,
      error: null
    })

    const longName = 'VeryLongPokemonNameExceedingLimit'
    const { asFragment } = render(
      <PokemonPreviewCard name={longName} image="https://example.com/long-name-pokemon.png" />
    )

    expect(asFragment()).toMatchSnapshot()

    const pokemonName = screen.getByText(longName)
    expect(pokemonName).toHaveClass('text-base')
  })

  it('renders fallback image on error', () => {
    vi.mocked(useImageLoader).mockReturnValue({
      src: '/assets/pokemon-loader.svg',
      isLoading: false,
      error: new Event('error')
    })

    render(<PokemonPreviewCard name="Pikachu" image="https://example.com/pikachu.png" />)

    const fallbackImage = screen.getByAltText('Pikachu image')
    expect(fallbackImage).toHaveAttribute('src', '/assets/pokemon-loader.svg')
  })

  it('applies correct link and aria-label', () => {
    vi.mocked(useImageLoader).mockReturnValue({
      src: 'https://example.com/pikachu.png',
      isLoading: false,
      error: null
    })

    render(<PokemonPreviewCard name="Pikachu" image="https://example.com/pikachu.png" />)

    const link = screen.getByLabelText('View details of Pikachu')
    expect(link).toHaveAttribute('to', 'pokemon-details/Pikachu')
    expect(link).toHaveAttribute('aria-label', 'View details of Pikachu')
  })
})
