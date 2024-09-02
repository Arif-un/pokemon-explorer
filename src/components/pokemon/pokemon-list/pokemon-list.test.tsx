import { type HTMLProps } from 'react'

import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import * as usePokemonDetailsHook from '@/hooks/use-pokemon-details'

import PokemonList from './pokemon-list'

vi.mock('@tanstack/react-router', () => ({
  Link: ({ children, ...props }: HTMLProps<HTMLAnchorElement>) => <a {...props}>{children}</a>
}))

vi.mock('@/hooks/use-pokemon-details', () => ({
  usePokemonDetails: vi.fn()
}))

describe('PokemonList', () => {
  const mockPokemons = [
    { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
    { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' },
    { name: 'squirtle', url: 'https://pokeapi.co/api/v2/pokemon/7/' }
  ]

  const mockPokemonDetails = {
    sprites: {
      other: {
        'official-artwork': {
          front_shiny: 'https://example.com/pokemon.png'
        }
      }
    }
  }

  beforeEach(() => {
    vi.mocked(usePokemonDetailsHook.usePokemonDetails).mockReturnValue({
      pokemonDetails: mockPokemonDetails,
      isLoading: false
    })
  })

  it('renders loading state correctly', () => {
    const { asFragment } = render(<PokemonList pokemons={[]} isLoading={true} limit={3} />)
    expect(screen.getAllByTestId('card-skeleton-loader')).toHaveLength(3)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders pokemon list correctly', () => {
    const { asFragment } = render(<PokemonList pokemons={mockPokemons} isLoading={false} limit={3} />)

    mockPokemons.forEach(pokemon => {
      expect(screen.getByText(pokemon.name)).toBeInTheDocument()
    })

    expect(asFragment()).toMatchSnapshot()
  })

  it('does not render CardSkeletonLoader when not loading', () => {
    render(<PokemonList pokemons={mockPokemons} isLoading={false} limit={3} />)
    expect(screen.queryByTestId('card-skeleton-loader')).not.toBeInTheDocument()
  })

  it('renders correct number of PokemonPreviewCards', () => {
    render(<PokemonList pokemons={mockPokemons} isLoading={false} limit={3} />)
    mockPokemons.forEach(pokemon => {
      expect(screen.getByLabelText(`View details of ${pokemon.name}`)).toBeInTheDocument()
    })
  })

  it('calls usePokemonDetails with correct pokemon names', () => {
    render(<PokemonList pokemons={mockPokemons} isLoading={false} limit={3} />)
    mockPokemons.forEach(pokemon => {
      expect(usePokemonDetailsHook.usePokemonDetails).toHaveBeenCalledWith(pokemon.name)
    })
  })

  it('renders empty list when no pokemons are provided', () => {
    const { container } = render(<PokemonList pokemons={[]} isLoading={false} limit={3} />)
    expect(screen.getByLabelText('List of Pokémon').querySelector('ul')?.childNodes).toHaveLength(0)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('renders PokemonPreviewCards with correct image sources', () => {
    render(<PokemonList pokemons={mockPokemons} isLoading={false} limit={3} />)
    const images = screen.getAllByRole('img')
    images.forEach(img => {
      expect(img).toHaveAttribute('src', 'https://example.com/pokemon.png')
    })
  })
})
