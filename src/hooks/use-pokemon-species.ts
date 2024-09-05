import { useQuery } from '@tanstack/react-query'

import { fetchPokemonSpecies } from '@/services/pokemon-api'

export const usePokemonSpecies = (name: string) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['pokemon-color', name],
    queryFn: () => fetchPokemonSpecies(name),
    staleTime: 5 * 60 * 1000
  })

  return {
    pokemonColor: data?.color.name,
    isLoading,
    isPokemonSpeciesError: isError,
    pokemonSpeciesError: error
  }
}
