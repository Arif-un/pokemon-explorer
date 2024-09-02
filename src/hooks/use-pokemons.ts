import { useQuery } from '@tanstack/react-query'

import { fetchPokemons } from '@/services/pokemon-api'
import { DEFAULT_POKEMON_FETCH_LIMIT, DEFAULT_POKEMON_FETCH_OFFSET } from '@/utils/constants'

export const usePokemons = ({
  limit = DEFAULT_POKEMON_FETCH_LIMIT,
  offset = DEFAULT_POKEMON_FETCH_OFFSET
}) => {
  const { data, isLoading } = useQuery({
    queryKey: ['pokemons', limit, offset],
    queryFn: () => fetchPokemons({ limit, offset }),
    staleTime: 5 * 60 * 1000
  })
  return { pokemons: data?.results, totalItems: data?.count, isLoading }
}
