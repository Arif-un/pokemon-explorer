import CardSkeletonLoader from '@/components/loaders/card-skeleton-loader'
import PokemonPreviewCard from '@/components/pokemon/pokemon-preview-card'
import { type Pokemon } from '@/types/Pokemon'

interface PokemonListProps {
  pokemons?: Pokemon[]
  limit: number
  isLoading: boolean
}

export default function PokemonList({ pokemons, isLoading, limit }: PokemonListProps) {
  return (
    <section aria-label="List of Pokémon" className="mt-56 p-2">
      <ul className="flex justify-center gap-x-10 gap-y-28 flex-wrap">
        {isLoading && <CardSkeletonLoader totalCard={limit} />}

        {!isLoading &&
          pokemons?.map(pokemon => (
            <li className="list-none" key={pokemon.name}>
              <PokemonPreviewCard name={pokemon.name} />
            </li>
          ))}
      </ul>
    </section>
  )
}
