import { useEffect, useState } from 'react'

interface ImageState {
  src: string
  isLoading: boolean
  error: Event | string | null
}

const imageCache: Record<string, boolean> = {}

export function useImageLoader(src: string, fallbackSrc: string): ImageState {
  const [imageState, setImageState] = useState<ImageState>({
    src: fallbackSrc,
    isLoading: true,
    error: null
  })

  useEffect(() => {
    if (imageCache[src]) {
      setImageState({
        src: src,
        isLoading: false,
        error: null
      })
      return
    }

    const img = new Image()
    img.src = src

    img.onload = () => {
      imageCache[src] = true

      setImageState({
        src: src,
        isLoading: false,
        error: null
      })
    }

    img.onerror = error => {
      setImageState({
        src: fallbackSrc,
        isLoading: false,
        error
      })
    }

    return () => {
      img.onload = null
      img.onerror = null
    }
  }, [src, fallbackSrc])

  return imageState
}
