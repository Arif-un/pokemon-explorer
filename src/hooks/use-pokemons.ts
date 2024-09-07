import { useQuery } from '@tanstack/react-query'

import { fetchPokemonWithFilters } from '@/services/pokemon-api-graphql'
import {
  DEFAULT_POKEMON_FETCH_LIMIT,
  DEFAULT_POKEMON_FETCH_OFFSET,
  DEFAULT_QUERY_STALE_TIME
} from '@/utils/constants'

interface UsePokemonsParams {
  name?: string
  limit?: number
  offset?: number
  types?: string
  sort?: string
}

export const usePokemons = ({
  name,
  limit = DEFAULT_POKEMON_FETCH_LIMIT,
  offset = DEFAULT_POKEMON_FETCH_OFFSET,
  types,
  sort
}: UsePokemonsParams) => {
  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ['pokemon', name, limit, offset, types, sort],
    queryFn: () => fetchPokemonWithFilters({ name, limit, offset, types, sort }),
    staleTime: DEFAULT_QUERY_STALE_TIME,
    placeholderData: previousData => previousData
  })

  return {
    pokemons: data?.pokemons,
    totalItems: data?.pokemon_aggregate.aggregate.count,
    isLoading,
    isError,
    error,
    isFetching
  }
}
