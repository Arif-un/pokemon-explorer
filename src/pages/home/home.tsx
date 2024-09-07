import { useRef } from 'react'

import { useNavigate, useSearch } from '@tanstack/react-router'
import { Loader } from 'lucide-react'

import ItemsPerPage from '@/components/items-per-page'
import Pagination from '@/components/pagination'
import PokemonList from '@/components/pokemon/pokemon-list'
import SortPokemons from '@/components/pokemon/sort-pokemons'
import TypeFilter from '@/components/pokemon/type-filter'
import Search from '@/components/search'
import { usePokemons } from '@/hooks/use-pokemons'
import { type QueryParams } from '@/types/Common'
import { DEFAULT_POKEMON_FETCH_LIMIT, DEFAULT_POKEMON_FETCH_OFFSET } from '@/utils/constants'

export default function Home() {
  const searchParams: QueryParams = useSearch({ strict: false })
  const totalItemsCached = useRef(0)
  const limit = searchParams.limit
  const offset = searchParams.offset
  const { pokemons, totalItems, isLoading, isError, error, isFetching } = usePokemons({
    ...searchParams
  })

  const navigate = useNavigate()

  if (!isLoading && totalItemsCached.current !== totalItems) {
    totalItemsCached.current = totalItems || 0
  }

  const handleOffsetChange = (newOffset: number) => {
    navigate({ search: prv => ({ ...prv, offset: newOffset }), resetScroll: false })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    navigate({ search: prv => ({ ...prv, limit: newItemsPerPage }) })
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
      {isFetching && (
        <Loader
          aria-label="Loading..."
          className="mx-auto mt-40 animate-spin bg-slate-50 dark:bg-slate-900 dark:text-white border dark:border-slate-800 p-3 absolute inset-0 m-auto -top-3  rounded-full border-slate-200"
          size={52}
        />
      )}
      <div className="flex items-center justify-between mt-40 px-6">
        <Search />

        <div className="flex gap-2">
          <TypeFilter />
          <SortPokemons />
        </div>
      </div>

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
