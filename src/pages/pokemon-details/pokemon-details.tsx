import { useCallback } from 'react'
import { useEffectOnce } from 'react-use'

import { useParams } from '@tanstack/react-router'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import { ChevronLeft } from 'lucide-react'

import { fadeAnimation } from '@/animations/common-animation'
import Abilities from '@/components/pokemon/abilities/abilities'
import ImageCard from '@/components/pokemon/image-card/image-card'
import PokemonTypes from '@/components/pokemon/pokemon-types'
import StatsCard from '@/components/pokemon/stats-card'
import Button from '@/components/ui/button'
import { useDelayedNavigation } from '@/hooks/use-delay-navigation'
import { usePokemonDetails } from '@/hooks/use-pokemon-details'
import { usePokemonSpecies } from '@/hooks/use-pokemon-species'
import { preparePokemonDetails } from '@/utils/query-helpers'

import PokemonDetailsLoader from './pokemon-details-loader'

export default function PokemonDetails() {
  const { name } = useParams({ from: '/pokemon-details/$name' })
  const {
    data: pokemonDetails,
    isLoading,
    isError,
    error
  } = usePokemonDetails<ReturnType<typeof preparePokemonDetails>>(
    name,
    useCallback(preparePokemonDetails, [name])
  )
  const { pokemonColor, isPokemonSpeciesError, pokemonSpeciesError } = usePokemonSpecies(name)
  const controls = useAnimation()

  const { isNavigating, navigate, finishNavigation } = useDelayedNavigation()

  useEffectOnce(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })

  const handleBackButton = () => {
    controls.start({ scale: 0.7, transition: { duration: 0.2 } })
    navigate('/')
  }

  if (isLoading) return <PokemonDetailsLoader />

  if (isError || isPokemonSpeciesError) {
    return (
      <div>
        <h2>Error occurred:</h2>
        <p>{error?.message || pokemonSpeciesError?.message}</p>
      </div>
    )
  }

  return (
    <>
      <div className="p-2 mt-52 container mx-auto">
        <div className="flex justify-center gap-14">
          <div>
            <AnimatePresence>
              {!isNavigating && (
                <motion.div initial="hidden" animate="visible" exit="hidden" variants={fadeAnimation}>
                  <Button onClick={handleBackButton} className="mb-3" rounded>
                    <ChevronLeft /> Back
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>

            <ImageCard
              name={name}
              animationControls={controls}
              imageSrc={pokemonDetails.image}
              pokemonColor={pokemonColor}
            />
          </div>

          <div className="mt-9">
            <motion.h2
              layoutId={`pokemon-name-${name}`}
              className="capitalize text-3xl my-3 font-bold text-slate-950 dark:text-slate-100 mb-5"
            >
              {name}
            </motion.h2>

            <PokemonTypes
              types={pokemonDetails.types}
              isNavigating={isNavigating}
              finishNavigation={finishNavigation}
            />

            <Abilities
              abilities={pokemonDetails.abilities}
              isNavigating={isNavigating}
              finishNavigation={finishNavigation}
            />

            <StatsCard
              baseStats={pokemonDetails.baseStats}
              isNavigating={isNavigating}
              finishNavigation={finishNavigation}
            />
          </div>
        </div>
      </div>
    </>
  )
}
