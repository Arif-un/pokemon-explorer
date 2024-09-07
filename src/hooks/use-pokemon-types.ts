import { useQuery } from '@tanstack/react-query'

import { fetchPokemonTypes } from '@/services/pokemon-api-graphql'
import { DEFAULT_QUERY_STALE_TIME } from '@/utils/constants'

export function usePokemonTypes() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['pokemon-types'],
    queryFn: fetchPokemonTypes,
    staleTime: DEFAULT_QUERY_STALE_TIME
  })

  return {
    types: data?.pokemon_v2_type.sort((a, b) => a.name.localeCompare(b.name)),
    isLoading,
    isError,
    error
  }
}
