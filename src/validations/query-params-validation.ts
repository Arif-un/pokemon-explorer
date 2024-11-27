import DomPurify from 'dompurify'
import { z } from 'zod'

import { ITEM_PER_PAGE_OPTIONS } from '@/components/items-per-page/items-per-page'
import { SORT_OPTIONS } from '@/components/pokemon/sort-pokemons/sort-pokemons'
import { DEFAULT_POKEMON_FETCH_LIMIT, DEFAULT_POKEMON_FETCH_OFFSET } from '@/utils/constants'

const sortOrders = SORT_OPTIONS.filter(option => option.value !== undefined).map(option => option.value!)
const maxItemsPerPage = Math.max(...ITEM_PER_PAGE_OPTIONS)

type SortOrders = (typeof sortOrders)[number]

export const QueryParamsSchema = z.object({
  limit: z.coerce
    .number()
    .int()
    .positive()
    .max(maxItemsPerPage)
    .default(DEFAULT_POKEMON_FETCH_LIMIT)
    .optional(),
  offset: z.coerce.number().int().nonnegative().default(DEFAULT_POKEMON_FETCH_OFFSET)
.optional(),
  name: z
    .string()
    .trim()
    .transform(str => DomPurify.sanitize(str || '') as string)
    .optional(),
  type: z
    .string()
    .trim()
    .transform(str => DomPurify.sanitize(str || '') as string)
    .optional(),
  sort: z.enum(sortOrders as [SortOrders, ...SortOrders[]]).optional()
})
