import { useState } from 'react'

import { useRouter } from '@tanstack/react-router'

interface NextLocation {
  to: string
  replace: boolean
}

export function useDelayedNavigation() {
  const router = useRouter()
  const [isNavigating, setIsNavigating] = useState(false)
  const [nextLocation, setNextLocation] = useState<NextLocation | null>(null)

  const navigate = (to: string, { replace = false } = {}) => {
    setIsNavigating(true)
    setNextLocation({ to, replace })
  }

  const finishNavigation = () => {
    if (nextLocation) {
      const { to, replace } = nextLocation
      router.navigate({ to, replace, search: prv => ({ ...prv }) })
      setIsNavigating(false)
      setNextLocation(null)
    }
  }

  return { isNavigating, navigate, finishNavigation }
}
