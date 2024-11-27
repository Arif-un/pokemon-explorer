import { useRef } from 'react'

import { useNavigate, useSearch } from '@tanstack/react-router'
import classNames from 'classnames'
import { Loader } from 'lucide-react'

import ItemsPerPage from '@/components/items-per-page'
import Pagination from '@/components/pagination'
import PokemonList from '@/components/pokemon/pokemon-list'
import SortPokemons from '@/components/pokemon/sort-pokemons'
import TypeFilter from '@/components/pokemon/type-filter'
import Search from '@/components/search'
import { usePokemons } from '@/hooks/use-pokemons'
import { DEFAULT_POKEMON_FETCH_LIMIT, DEFAULT_POKEMON_FETCH_OFFSET } from '@/utils/constants'

export default function Home() {
  const totalItemsCached = useRef(0)
  const { limit, offset, ...restParams } = useSearch({ from: '/pokemon-explorer/' })
  const navigate = useNavigate({ from: '/pokemon-explorer' })
  const { pokemons, totalItems, isLoading, isError, error, isFetching } = usePokemons({
    limit,
    offset,
    ...restParams
  })

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
          className={classNames(
            'z-50',
            'dark:bg-slate-900 dark:text-white border dark:border-slate-800',
            'mx-auto mt-40 sm:mt-24 animate-spin bg-slate-50 p-3 absolute inset-0 m-auto -top-3  rounded-full border-slate-200'
          )}
          size={52}
        />
      )}
      <div className="flex items-center justify-between mt-10 sm:mt-28 px-6 sm:flex-col sm:gap-3">
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
