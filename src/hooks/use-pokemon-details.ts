import { useQuery } from '@tanstack/react-query'

import { fetchPokemonDetails } from '@/services/pokemon-api'
import { type PokemonDetailsResponse } from '@/types/Pokemon'

export const usePokemonDetails = <SelectedData = PokemonDetailsResponse>(
  name: string,
  select: (data: PokemonDetailsResponse) => SelectedData
) => {
  const { data, isLoading, isError, error } = useQuery<PokemonDetailsResponse, Error, SelectedData>({
    queryKey: ['pokemon', name],
    queryFn: () => fetchPokemonDetails(name),
    select
  })

  return { data: data as SelectedData, isLoading, isError, error }
}
