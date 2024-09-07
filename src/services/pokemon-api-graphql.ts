import { gql, request } from 'graphql-request'

import { type PokemonResponse, type PokemonTypeResponse } from '@/types/Pokemon'

const endpoint = 'https://beta.pokeapi.co/graphql/v1beta'

interface GetPokemonFetchQueryProps {
  types?: string[]
  nameOrder?: 'asc' | 'desc'
  heightOrder?: 'asc' | 'desc'
  limit: number
  offset: number
  name?: string
}

type FetchPokemonWithFiltersProps = Omit<
  GetPokemonFetchQueryProps,
  'nameOrder' | 'heightOrder' | 'types'
> & {
  sort?: 'name-asc' | 'name-desc' | 'height-asc' | 'height-desc' | string
  types?: string
}

const getPokemonFetchQuery = ({ types, nameOrder, heightOrder }: GetPokemonFetchQueryProps) => {
  const GET_POKEMON_BY_NAME_AND_TYPE = gql`
  query getPokemonByNameAndType(
    $name: String
    $limit: Int!
    $offset: Int!
    $types: [String]
    $nameOrder: order_by
    $heightOrder: order_by
  ) {
    pokemon_aggregate: pokemon_v2_pokemon_aggregate(
      where: {
        name: { _like: $name }
        ${types ? `pokemon_v2_pokemontypes: { pokemon_v2_type: { name: { _in: $types } } }` : ''}
      }
    ) {
      aggregate {
        count
      }
    }
    pokemons: pokemon_v2_pokemon(
      where: {
        name: { _like: $name }
        ${types ? `pokemon_v2_pokemontypes: { pokemon_v2_type: { name: { _in: $types } } }` : ''}
      }
      limit: $limit
      offset: $offset
      ${nameOrder ? `order_by: { name: $nameOrder }` : ''}
      ${heightOrder ? `order_by: { height: $heightOrder }` : ''}
    ) {
      name
      sprites: pokemon_v2_pokemonsprites {
        sprites
      }
      types: pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
    }
  }
  `

  return GET_POKEMON_BY_NAME_AND_TYPE
}

const GET_POKEMON_TYPES = gql`
  query getPokemonTypes {
    pokemon_v2_type {
      name
    }
  }
`

export const fetchPokemonWithFilters = async ({
  name,
  limit,
  offset,
  types,
  sort
}: FetchPokemonWithFiltersProps) => {
  const variables: GetPokemonFetchQueryProps = {
    name: name ? `%${name}%` : '%%',
    limit,
    offset,
    types: types?.split('-') || undefined,
    nameOrder: undefined,
    heightOrder: undefined
  }

  switch (sort) {
    case 'name-asc':
      variables.nameOrder = 'asc'
      break
    case 'name-desc':
      variables.nameOrder = 'desc'
      break
    case 'height-asc':
      variables.heightOrder = 'asc'
      break
    case 'height-desc':
      variables.heightOrder = 'desc'
      break
    default:
      break
  }

  return request<PokemonResponse>(endpoint, getPokemonFetchQuery(variables), variables)
}

export const fetchPokemonTypes = async () => {
  return request<PokemonTypeResponse>(endpoint, GET_POKEMON_TYPES)
}
