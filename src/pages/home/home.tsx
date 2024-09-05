import { useRef } from 'react'

import ItemsPerPage from '@/components/items-per-page/items-per-page'
import Pagination from '@/components/pagination'
import PokemonList from '@/components/pokemon/pokemon-list'
import { usePokemons } from '@/hooks/use-pokemons'
import { Route as RootRoute } from '@/routes'
import { DEFAULT_POKEMON_FETCH_LIMIT, DEFAULT_POKEMON_FETCH_OFFSET } from '@/utils/constants'

export default function Home() {
  const { limit, offset } = RootRoute.useSearch<{ limit?: number; offset?: number }>()
  const totalItemsCached = useRef(0)
  const { pokemons, totalItems, isLoading, isError, error } = usePokemons({ limit, offset })
  const navigate = RootRoute.useNavigate()

  if (!isLoading && totalItemsCached.current !== totalItems) {
    totalItemsCached.current = totalItems || 0
  }

  const handleOffsetChange = (newOffset: number) => {
    navigate({ search: { limit, offset: newOffset }, resetScroll: false })
  }

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    navigate({ search: { limit: newItemsPerPage, offset: DEFAULT_POKEMON_FETCH_OFFSET } })
  }

  if (isError) {
    return (
      <div>
        <h2>Error occurred:</h2>
        <p>{error?.message}</p>
      </div>
    )
  }

  return (
    <div>
      <PokemonList
        pokemons={pokemons}
        limit={limit || DEFAULT_POKEMON_FETCH_LIMIT}
        isLoading={isLoading}
      />

      <div className="flex gap-6 justify-center items-center flex-col my-24">
        <Pagination
          totalItems={totalItemsCached.current}
          itemsPerPage={limit || DEFAULT_POKEMON_FETCH_LIMIT}
          offset={offset || DEFAULT_POKEMON_FETCH_OFFSET}
          onOffsetChange={handleOffsetChange}
        />
        <ItemsPerPage
          itemsPerPage={limit || DEFAULT_POKEMON_FETCH_LIMIT}
          onItemsPerPageChange={handleItemsPerPageChange}
        />
      </div>
    </div>
  )
}
