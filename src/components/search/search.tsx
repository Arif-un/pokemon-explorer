import { type ChangeEventHandler, useEffect, useRef, useState } from 'react'
import { useDebounce } from 'react-use'

import { useNavigate, useSearch } from '@tanstack/react-router'
import classNames from 'classnames'
import { SearchIcon } from 'lucide-react'

const SEARCH_DEBOUNCE = 300

export default function Search() {
  const searchParams: { name?: string } = useSearch({ strict: false })
  const [searchQuery, setSearchQuery] = useState(searchParams.name || '')
  const [debouncedValue, setDebouncedValue] = useState('')
  const navigate = useNavigate()
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current && !debouncedValue) return
    navigate({
      search: prv => ({
        ...prv,
        name: debouncedValue || undefined,
        offset: undefined
      }),
      resetScroll: false
    })
    isFirstRender.current = false
  }, [debouncedValue, navigate])

  useDebounce(() => setDebouncedValue(searchQuery), SEARCH_DEBOUNCE, [searchQuery])

  const handleSearch: ChangeEventHandler<HTMLInputElement> = e => {
    setSearchQuery(e.target.value)
  }

  return (
    <div className="relative focus-within:text-yellow-500 dark:text-white inline-block">
      <input
        className={classNames(
          'h-11 inline-block rounded-full px-4 w-64 pl-10',
          'border border-slate-300 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-950 dark:text-white',
          'focus:outline-none focus:ring-2 ring-yellow-500  focus:bg-white focus:dark:bg-slate-800'
        )}
        onChange={handleSearch}
        type="search"
        value={searchQuery}
        placeholder="Search for a Pokémon..."
      />
      <SearchIcon size={18} className="absolute inset-y-0 my-auto left-4" />
    </div>
  )
}
