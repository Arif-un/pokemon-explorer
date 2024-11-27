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
      {
        name: 'grass',
        color: '#7AC74C',
        // eslint-disable-next-line max-len
        icon: "data:image/svg+xml,%3csvg%20fill='none'%20height='512'%20viewBox='0%200%20512%20512'%20width='512'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20clip-rule='evenodd'%20d='m97.4121%20440.649c-1.7574-1.653-3.4954-3.338-5.2132-5.056-90.68455-90.684-90.68453-237.713%200-328.397%2090.6841-90.6849%20379.6401-96.7516%20379.6401-96.7516s39.442%20334.4646-51.242%20425.1486c-80.54%2080.54-205.522%2089.55-296.005%2027.031l72.908-89.471%20116.55-25.163-95.139-9.511%2060.462-61.562%2068.824-15.077-54.422-16.117%2054.422-98.176-77.41%2086.828-29.893-42.183%2010.523%2069.648-53.917%2060.782-24.993-76.9v102.268z'%20fill='%23fff'%20fill-rule='evenodd'/%3e%3c/svg%3e"
      }
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
