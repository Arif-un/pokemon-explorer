import { type ReactNode } from 'react'
import { useState } from 'react'

import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions
} from '@headlessui/react'
import { useNavigate, useSearch } from '@tanstack/react-router'
import classNames from 'classnames'
import { Check, SortAsc, SortDescIcon } from 'lucide-react'

export const SORT_OPTIONS: SortOption[] = [
  { name: 'None', value: undefined },
  { name: 'Name Asc', value: 'name-asc', icon: <SortAsc size={14} />, iconText: 'A->Z' },
  { name: 'Name Desc', value: 'name-desc', icon: <SortDescIcon size={14} />, iconText: 'Z->A' },
  { name: 'Height Asc', value: 'height-asc', icon: <SortAsc size={14} />, iconText: 'S->B' },
  { name: 'Height Desc', value: 'height-desc', icon: <SortDescIcon size={14} />, iconText: 'B->S' }
] as const

interface SortOption {
  name: string
  value: 'name-asc' | 'name-desc' | 'height-asc' | 'height-desc' | undefined
  icon?: ReactNode
  iconText?: string
}

export default function SortPokemons() {
  const { sort } = useSearch({ from: '/pokemon-explorer/' })
  const defaultSort = SORT_OPTIONS.find(option => option.value === sort)
  const [selected, setSelected] = useState<SortOption | undefined>(defaultSort || SORT_OPTIONS[0])
  const navigate = useNavigate({ from: '/pokemon-explorer' })

  const handleOnChange = (value: SortOption) => {
    setSelected(value)
    navigate({ search: prv => ({ ...prv, sort: value.value || undefined }), resetScroll: false })
  }

  return (
    <div className="w-11 inline-block">
      <Combobox value={selected} onChange={handleOnChange}>
        <div className="relative">
          <ComboboxInput
            readOnly
            aria-label="Sort pokemons"
            className={classNames(
              'rounded-full size-11',
              'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-0 data-[focus]:outline-yellow-500'
            )}
          />
          <ComboboxButton
            aria-label="Open sort pokemons menu"
            className="size-11 rounded-full flex items-center justify-center absolute inset-0 m-auto  dark:bg-slate-900 border dark:border-slate-800 dark:hover:bg-slate-800 bg-slate-50 hover:bg-slate-100 border-slate-300"
          >
            <SortDescIcon className="size-4 dark:text-slate-50" />
          </ComboboxButton>
        </div>

        <ComboboxOptions
          anchor="bottom end"
          transition
          className={classNames(
            'w-48 rounded-xl border bg-slate-800 border-slate-900 p-1 [--anchor-gap:var(--spacing-1)] empty:invisible',
            'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
          )}
        >
          {SORT_OPTIONS.map(option => (
            <ComboboxOption
              key={option.name}
              value={option}
              className="group flex justify-between cursor-pointer items-center gap-2 rounded-lg text-white  hover:bg-slate-600 py-1.5 px-3 select-none data-[selected]:bg-slate-700"
            >
              <div className="flex gap-3 items-center">
                <Check className="invisible size-3 text-slate-50 group-data-[selected]:visible" />
                <div className="text-sm/6 capitalize">{option.name}</div>
              </div>
              <div className="flex justify-center items-center gap-2 text-sm text-slate-500">
                {option.iconText}
                {option.icon}
              </div>
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </div>
  )
}
