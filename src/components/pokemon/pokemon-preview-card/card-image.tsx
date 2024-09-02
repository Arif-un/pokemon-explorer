import { motion } from 'framer-motion'

interface CardImageProps {
  src: string
  alt: string
  fallbackImg: string
  isLoading: boolean
}

export default function CardImage({ src, alt, fallbackImg, isLoading }: CardImageProps) {
  return (
    <figure className="popup-element flex items-center justify-center">
      <motion.div layout className="relative w-60 h-60 -mt-16">
        {isLoading ? (
          <motion.img src={fallbackImg} alt="pokemon loading image" className="w-40 m-auto" />
        ) : (
          <>
            <motion.img
              loading="lazy"
              src={src}
              height={240}
              width={240}
              alt={`${alt}-backdrop`}
              className="blur-2xl w-52 absolute opacity-50 group-hover:opacity-90 m-auto inset-0 transition-opacity"
            />
            <motion.img
              loading="lazy"
              layoutId="pokemon-image"
              alt={alt}
              height={240}
              width={240}
              src={src}
              className="w-52 m-auto z-10 relative"
            />
          </>
        )}
      </motion.div>
    </figure>
  )
}
