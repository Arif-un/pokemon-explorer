import { useParams } from '@tanstack/react-router'
import { render, screen, waitFor } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { useDelayedNavigation } from '@/hooks/use-delay-navigation'
import { usePokemonDetails } from '@/hooks/use-pokemon-details'
import { usePokemonSpecies } from '@/hooks/use-pokemon-species'

import PokemonDetails from './pokemon-details'

vi.mock('@/hooks/use-pokemon-details')
vi.mock('@/hooks/use-pokemon-species')
vi.mock('@/hooks/use-delay-navigation')
vi.mock('@tanstack/react-router', () => {
  return {
    useParams: vi.fn()
  }
})

const mockPokemonDetails = {
  id: 25,
  image: 'https://example.com/pikachu.png',
  types: [{ name: 'electric', icon: 'electric-icon.png', color: '#FFD700' }],
  abilities: ['static', 'lightning-rod'],
  baseStats: [
    { name: 'hp', value: 35, max: 255, color: '#FF0000' },
    { name: 'attack', value: 55, max: 255, color: '#F08030' }
  ]
}

describe('PokemonDetails', () => {
  beforeEach(() => {
    vi.mocked(usePokemonDetails).mockReturnValue({
      data: mockPokemonDetails,
      isLoading: false,
      isError: false,
      error: null
    })
    vi.mocked(usePokemonSpecies).mockReturnValue({
      pokemonColor: '#FFD700',
      isLoading: false,
      isPokemonSpeciesError: false,
      pokemonSpeciesError: null
    })
    vi.mocked(useDelayedNavigation).mockReturnValue({
      isNavigating: false,
      navigate: vi.fn(),
      finishNavigation: vi.fn()
    })

    window.scrollTo = vi.fn()

    vi.mocked(useParams).mockReturnValueOnce({ name: 'pikachu' })
  })

  it('renders loading state', () => {
    vi.mocked(usePokemonDetails).mockReturnValueOnce({
      data: undefined,
      isLoading: true,
      isError: false,
      error: null
    })

    render(<PokemonDetails />)

    expect(screen.getByLabelText('Loading skeleton')).toBeInTheDocument()
  })

  it('renders pokemon details correctly', async () => {
    const { asFragment } = render(<PokemonDetails />)

    const { value: hpValue, max: hpMax } = mockPokemonDetails.baseStats[0]
    const { value: attackValue, max: attackMax } = mockPokemonDetails.baseStats[1]

    const hpPercentage = (hpValue / hpMax) * 100
    const attackPercentage = (attackValue / attackMax) * 100

    await waitFor(() => {
      expect(screen.getByText('pikachu')).toBeInTheDocument()
      expect(screen.getByAltText('Pokemon pikachu image')).toHaveAttribute(
        'src',
        'https://example.com/pikachu.png'
      )
      expect(screen.getByText('electric')).toBeInTheDocument()
      expect(screen.getByText('static')).toBeInTheDocument()
      expect(screen.getByText('lightning rod')).toBeInTheDocument()
      expect(screen.getByLabelText(`hp: ${hpPercentage}%`)).toBeInTheDocument()
      expect(screen.getByLabelText(`attack: ${attackPercentage}%`)).toBeInTheDocument()
      expect(asFragment()).toMatchSnapshot()
    })
  })
})
