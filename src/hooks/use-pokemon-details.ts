import { useQuery } from '@tanstack/react-query'

import { fetchPokemonDetails } from '@/services/pokemon-api'

export const usePokemonDetails = (name: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ['pokemon', name],
    queryFn: () => fetchPokemonDetails(name)
  })
  return { pokemonDetails: data, isLoading }
}
