import { useState } from 'react'
import { useSearchParam } from 'react-use'

import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions
} from '@headlessui/react'
import { useNavigate } from '@tanstack/react-router'
import classNames from 'classnames'
import { Check, ChevronDown } from 'lucide-react'

import { usePokemonTypes } from '@/hooks/use-pokemon-types'
import { type PokemonType, TYPE_COLORS, TYPE_ICONS } from '@/utils/constants'

export default function TypeFilter() {
  const typesParam = useSearchParam('types')
  const typesParamArray = typesParam ? typesParam?.split('-') : []
  const [selected, setSelected] = useState<string[]>(typesParamArray)
  const { types, isLoading, error, isError } = usePokemonTypes()
  const navigate = useNavigate()

  if (isError) {
    console.error({ error })
  }

  const handleOnChange = (value: string[]) => {
    setSelected(value)
    navigate({
      search: prv => ({
        ...prv,
        types: value.join('-') || undefined,
        offset: undefined
      }),
      resetScroll: false
    })
  }

  return (
    <div className="w-44 inline-block">
      <Combobox multiple value={selected} onChange={handleOnChange}>
        <div className="relative">
          <ComboboxInput
            readOnly
            aria-label="Type filter"
            className={classNames(
              'w-full rounded-full border py-1.5 pr-8 pl-3 h-11 text-sm/6 dark:text-white dark:border-slate-800 border-slate-300 bg-slate-50 dark:bg-slate-900 select-none',
              'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-1 data-[focus]:outline-yellow-500'
            )}
            displayValue={() => `Filter by types (${selected.length})`}
          />
          <ComboboxButton
            aria-label="Open type filter menu"
            disabled={isLoading || isError}
            className="group rounded-full w-full h-11 flex justify-end items-center dark:text-slate-400 inset-y-0 my-auto absolute px-3"
          >
            <ChevronDown className="size-4 dark:text-slate-50" />
          </ComboboxButton>
        </div>

        <ComboboxOptions
          anchor="bottom start"
          transition
          className={classNames(
            'w-52 rounded-xl border bg-slate-800 border-slate-900 p-1 [--anchor-gap:var(--spacing-1)] empty:invisible',
            'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
          )}
        >
          {types?.map(type => (
            <ComboboxOption
              key={type.name}
              value={type.name}
              className="group flex justify-between cursor-pointer items-center gap-2 rounded-lg text-white  hover:bg-slate-600 py-1.5 px-3 select-none data-[selected]:bg-slate-700"
            >
              <div className="flex gap-3 items-center">
                {Object.prototype.hasOwnProperty.call(TYPE_ICONS, type.name) ? (
                  <div
                    className="rounded-full p-2 bg-slate-400"
                    style={{ background: TYPE_COLORS[type.name as PokemonType] }}
                  >
                    <img
                      height={20}
                      width={20}
                      alt={`Type ${type.name} icon`}
                      src={TYPE_ICONS[type.name as PokemonType] || ''}
                    />
                  </div>
                ) : (
                  <div className="size-9 bg-slate-50 rounded-full" />
                )}

                <div className="text-sm/6 capitalize">{type.name}</div>
              </div>
              <Check className="invisible size-4  text-slate-50 group-data-[selected]:visible" />
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </div>
  )
}
