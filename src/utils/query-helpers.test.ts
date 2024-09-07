import { type QueryKey } from '@tanstack/react-query'
import { describe, expect, it } from 'vitest'

import pokemonPlaceholder from '@/assets/Pokeball.svg'
import { type PokemonDetailsResponse, type PokemonResponse } from '@/types/Pokemon'

import {
  pickPokemonImage,
  preparePokemonDetails,
  preparePokemonDetailsInitialData,
  transformTypeFromCacheData
} from './query-helpers'

const mockPokemonDetails: PokemonDetailsResponse = {
  id: 1,
  name: 'bulbasaur',
  sprites: {
    front_default: 'bulbasaur_default.png',
    other: {
      'official-artwork': {
        front_default: 'official_artwork.png',
        front_shiny: 'official_artwork_shiny.png'
      },
      dream_world: {
        front_default: 'dream_world.png'
      },
      home: {
        front_shiny: 'home_shiny.png'
      }
    },
    front_shiny: 'front_shiny.png'
  },
  abilities: [{ ability: { name: 'overgrow', url: '' } }],
  stats: [
    {
      base_stat: 45,
      stat: { name: 'hp' }
    }
  ],
  types: [
    {
      type: { name: 'grass' }
    }
  ]
}

const mockCachedPokemonResponse: [QueryKey, PokemonResponse | undefined][] = [
  [
    ['pokemon'],
    {
      pokemon_aggregate: {
        aggregate: { count: 100 }
      },
      pokemons: [
        {
          name: 'bulbasaur',
          sprites: [
            {
              sprites: {
                front_default: 'bulbasaur_default.png',
                other: {
                  'official-artwork': {
                    front_default: 'cached_official_artwork.png'
                  }
                }
              }
            }
          ],
          types: [{ pokemon_v2_type: { name: 'grass' } }]
        }
      ]
    }
  ]
]

describe('pickPokemonImage', () => {
  it('should return the shiny artwork image if available', () => {
    const result = pickPokemonImage(mockPokemonDetails)
    expect(result).toBe('official_artwork_shiny.png')
  })

  it('should return the default official artwork image if shiny is not available', () => {
    const result = pickPokemonImage({
      ...mockPokemonDetails,
      sprites: {
        ...mockPokemonDetails.sprites,
        other: {
          ...mockPokemonDetails.sprites?.other,
          'official-artwork': { front_shiny: undefined, front_default: 'official_artwork.png' }
        }
      }
    })
    expect(result).toBe('official_artwork.png')
  })

  it('should return the placeholder if no images are available', () => {
    const result = pickPokemonImage({} as PokemonDetailsResponse)
    expect(result).toBe(pokemonPlaceholder)
  })
})

describe('preparePokemonDetails', () => {
  it('should prepare details including image, types, abilities, and stats', () => {
    const result = preparePokemonDetails(mockPokemonDetails)

    expect(result.id).toBe(1)
    expect(result.image).toBe('official_artwork_shiny.png')
    expect(result.types).toEqual([
      { name: 'grass', color: '#7AC74C', icon: '/src/assets/type-icons/grass.svg' }
    ])
    expect(result.abilities).toEqual(['overgrow'])
    expect(result.baseStats).toEqual([{ name: 'hp', value: 45, max: 255, color: '#ff0000' }])
  })
})

describe('transformTypeFromCacheData', () => {
  it('should correctly transform type data from cache', () => {
    const data = [{ pokemon_v2_type: { name: 'grass' } }]
    const result = transformTypeFromCacheData(data)

    expect(result).toEqual([{ type: { name: 'grass' } }])
  })
})

describe('preparePokemonDetailsInitialData', () => {
  it('should return transformed data from the cache if the Pokemon is found', () => {
    const result = preparePokemonDetailsInitialData('bulbasaur', mockCachedPokemonResponse)

    expect(result).toEqual({
      sprites: {
        front_default: 'bulbasaur_default.png',
        other: {
          'official-artwork': { front_default: 'cached_official_artwork.png' }
        }
      },
      types: [{ type: { name: 'grass' } }]
    })
  })

  it('should return undefined if the Pokemon is not found in the cache', () => {
    const result = preparePokemonDetailsInitialData('charmander', mockCachedPokemonResponse)
    expect(result).toBeUndefined()
  })
})
