import { memo } from 'react'

import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'

import pokemonLoader from '@/assets/pokemon-loader.svg'
import TiltCard from '@/components/ui/tilt-card/tilt-card'
import { useImageLoader } from '@/hooks/use-image-loader'

import CardImage from './card-image'
import CardTitle from './card-title'

interface PokemonPreviewCardProps {
  name: string
  image: string
}

function PokemonPreviewCard({ name, image }: PokemonPreviewCardProps) {
  const isLongText = name.length > 22

  const { src: pokemonImgSrc, error } = useImageLoader(image, pokemonLoader)

  if (error) {
    console.error(error)
  }

  return (
    <Link
      to={`pokemon-details/${name}`}
      search={prv => ({ ...prv })}
      aria-label={`View details of ${name}`}
      className="inline-block focus-visible:outline outline-yellow-500 outline-2 focus-visible:outline-offset-8 outline-offset-0  rounded-3xl transition-offset duration-200 motion-reduce:duration-0"
    >
      <motion.div
        layoutId={`image-wrapper-${name}`}
        transition={{ duration: 0.2 }}
        className="inner-glow bg-slate-800 inline-flex flex-col justify-center group cursor-pointer  dark:bg-slate-900 p-2 dark:text-slate-50 rounded-3xl dark:border-slate-800 border"
      >
        <TiltCard>
          <CardImage src={pokemonImgSrc} alt={`${name} image`} />

          <CardTitle className={isLongText ? 'text-base' : 'text-xl'} id={name}>
            {name}
          </CardTitle>
        </TiltCard>
      </motion.div>
    </Link>
  )
}

export default memo(PokemonPreviewCard)
