import { type HTMLProps } from 'react'

import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { useImageLoader } from '@/hooks/use-image-loader'
import { type Pokemon } from '@/types/Pokemon'
import { pickPokemonImage } from '@/utils/query-helpers'

import PokemonList from './pokemon-list'

vi.mock('@tanstack/react-router', () => ({
  Link: ({ children, search, ...props }: HTMLProps<HTMLAnchorElement> & { search: string }) => (
    <a {...props}>{children}</a>
  )
}))

vi.mock('@/hooks/use-image-loader', () => ({
  useImageLoader: vi.fn()
}))

describe('PokemonList', () => {
  const mockPokemons: Pokemon[] = [
    {
      name: 'bulbasaur',
      sprites: [
        {
          sprites: {
            other: {
              'official-artwork': {
                front_shiny: 'https://example.com/pokemon.png'
              }
            }
          }
        }
      ],
      types: [
        {
          pokemon_v2_type: {
            name: 'grass'
          }
        }
      ]
    },
    {
      name: 'charmander',
      sprites: [
        {
          sprites: {
            other: {
              'official-artwork': {
                front_shiny: 'https://example.com/pokemon.png'
              }
            }
          }
        }
      ],
      types: [
        {
          pokemon_v2_type: {
            name: 'grass'
          }
        }
      ]
    },
    {
      name: 'squirtle',
      sprites: [
        {
          sprites: {
            other: {
              'official-artwork': {
                front_shiny: 'https://example.com/pokemon.png'
              }
            }
          }
        }
      ],
      types: [
        {
          pokemon_v2_type: {
            name: 'grass'
          }
        }
      ]
    }
  ]

  it('renders loading state correctly', () => {
    const { asFragment } = render(<PokemonList pokemons={[]} isLoading={true} limit={3} />)
    expect(screen.getAllByTestId('card-skeleton-loader')).toHaveLength(3)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders pokemon list correctly', () => {
    vi.mocked(useImageLoader).mockReturnValue({
      src: pickPokemonImage(mockPokemons[0]),
      isLoading: false,
      error: null
    })
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

  it('renders empty list when no pokemons are provided', () => {
    const { container } = render(<PokemonList pokemons={[]} isLoading={false} limit={3} />)
    expect(screen.getByLabelText('List of Pokémon').querySelector('ul')?.childNodes).toHaveLength(0)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('renders PokemonPreviewCards with correct image sources', () => {
    vi.mocked(useImageLoader).mockReturnValue({
      src: pickPokemonImage(mockPokemons[0]),
      isLoading: false,
      error: null
    })
    render(<PokemonList pokemons={mockPokemons} isLoading={false} limit={3} />)
    const images = screen.getAllByRole('img')
    images.forEach(img => {
      expect(img).toHaveAttribute('src', 'https://example.com/pokemon.png')
    })
  })
})
