import { useQuery } from '@tanstack/react-query'

import { fetchPokemonSpecies } from '@/services/pokemon-api'
import { DEFAULT_QUERY_STALE_TIME } from '@/utils/constants'

export const usePokemonSpecies = (name: string) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['pokemon-color', name],
    queryFn: () => fetchPokemonSpecies(name),
    staleTime: DEFAULT_QUERY_STALE_TIME
  })

  return {
    pokemonColor: data?.color.name,
    isLoading,
    isPokemonSpeciesError: isError,
    pokemonSpeciesError: error
  }
}
