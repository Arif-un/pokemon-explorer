import { type AnimationControls, motion } from 'framer-motion'

import TiltCard from '@/components/ui/tilt-card'

interface ImageCardProps {
  animationControls: AnimationControls
  imageSrc: string
  pokemonColor?: string
  name: string
}

export default function ImageCard({ animationControls, imageSrc, pokemonColor, name }: ImageCardProps) {
  return (
    <motion.div
      layoutId={`image-wrapper-${name}`}
      animate={animationControls}
      className="inner-glow group relative overflow-hidden border border-slate-800 bg-slate-900 dark:bg-opacity-70 p-5 h-[500px] grid place-content-center rounded-3xl"
    >
      <div
        className="h-24 absolute rounded-full m-auto w-full -bottom-28 blur-3xl opacity-40"
        style={{ background: pokemonColor }}
      />
      <TiltCard parralexEffect={false} glareEnable={false} scale={1.1}>
        <img
          src={imageSrc}
          alt="Pokemon image backdrop"
          className="absolute blur-3xl z-0 opacity-50 group-hover:opacity-80 transition-opacity"
        />
        <motion.img
          layoutId={`${name} image pokemon`}
          className="w-96 relative"
          src={imageSrc}
          alt={`Pokemon ${name} image`}
        />
      </TiltCard>
    </motion.div>
  )
}
