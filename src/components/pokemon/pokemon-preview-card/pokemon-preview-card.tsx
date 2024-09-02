import { memo } from 'react'

import { Link } from '@tanstack/react-router'

import pokemonPlaceholder from '@/assets/Pokeball.svg'
import pokemonLoader from '@/assets/pokemon-loader.svg'
import TiltCard from '@/components/ui/tilt-card/tilt-card'
import { usePokemonDetails } from '@/hooks/use-pokemon-details'

import CardImage from './card-image'
import { CardTitle } from './card-title'

interface PokemonPreviewCardProps {
  name: string
}

function PokemonPreviewCard({ name }: PokemonPreviewCardProps) {
  const { pokemonDetails, isLoading } = usePokemonDetails(name)
  const isLongText = name.length > 22
  const images = pokemonDetails?.sprites

  const pokemonImage =
    images?.other?.['official-artwork']?.front_shiny ||
    images?.other?.['official-artwork']?.front_default ||
    images?.other?.dream_world?.front_default ||
    images?.other?.home?.front_shiny ||
    images?.front_shiny ||
    pokemonPlaceholder

  return (
    <Link
      to={`pokemon-details/${name}`}
      aria-label={`View details of ${name}`}
      className="inline-block focus-visible:outline outline-yellow-500 outline-2 focus-visible:outline-offset-8 outline-offset-0  rounded-3xl transition-offset duration-200 motion-reduce:duration-0"
    >
      <TiltCard className="inline-flex flex-col justify-center group cursor-pointer bg-slate-800 dark:bg-slate-900 p-2 dark:text-slate-50 rounded-3xl dark:border-slate-800 border">
        <CardImage
          src={pokemonImage}
          fallbackImg={pokemonLoader}
          alt={`${name} image`}
          isLoading={isLoading}
        />

        <CardTitle className={isLongText ? 'text-base' : 'text-xl'}>{name}</CardTitle>
      </TiltCard>
    </Link>
  )
}

export default memo(PokemonPreviewCard)
