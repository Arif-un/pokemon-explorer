import { useQuery, useQueryClient } from '@tanstack/react-query'

import { fetchPokemonDetails } from '@/services/pokemon-api'
import { type PokemonDetailsResponse, type PokemonResponse } from '@/types/Pokemon'
import { preparePokemonDetailsInitialData } from '@/utils/query-helpers'

export const usePokemonDetails = <SelectedData = PokemonDetailsResponse>(
  name: string,
  select: (data: PokemonDetailsResponse) => SelectedData
) => {
  const queryClient = useQueryClient()

  const { data, isLoading, isError, error } = useQuery<PokemonDetailsResponse, Error, SelectedData>({
    queryKey: ['pokemon', name],
    queryFn: () => fetchPokemonDetails(name),
    initialData: () => {
      const cachedPokemonQueries = queryClient.getQueriesData<PokemonResponse>({
        queryKey: ['pokemon']
      })
      return preparePokemonDetailsInitialData(name, cachedPokemonQueries)
    },
    select
  })

  return { data: data as SelectedData, isLoading, isError, error }
}
