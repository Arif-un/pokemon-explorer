import { LayoutGroup, motion } from 'framer-motion'

import CardSkeletonLoader from '@/components/loaders/card-skeleton-loader'
import PokemonPreviewCard from '@/components/pokemon/pokemon-preview-card'
import { type Pokemon } from '@/types/Pokemon'
import { pickPokemonImage } from '@/utils/query-helpers'

interface PokemonListProps {
  pokemons?: Pokemon[]
  limit: number
  isLoading: boolean
}

export default function PokemonList({ pokemons, isLoading, limit }: PokemonListProps) {
  return (
    <section aria-label="List of Pokémon" className="mt-24 p-2">
      <ul className="flex justify-center gap-x-10 gap-y-28 flex-wrap">
        {isLoading && !pokemons?.length && <CardSkeletonLoader totalCard={limit} />}

        <LayoutGroup>
          {!!pokemons?.length &&
            pokemons?.map(pokemon => (
              <motion.li layout className="list-none" key={pokemon.name}>
                <PokemonPreviewCard name={pokemon.name} image={pickPokemonImage(pokemon)} />
              </motion.li>
            ))}
        </LayoutGroup>
      </ul>
    </section>
  )
}
