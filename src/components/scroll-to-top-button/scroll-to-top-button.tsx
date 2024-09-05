import { useState } from 'react'
import { useEvent } from 'react-use'

import { ArrowUp } from 'lucide-react'

import Button from '@/components/ui/button'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 1100) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEvent('scroll', toggleVisibility)

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <Button title="Scroll page to top" icon onClick={scrollToTop} className="fixed right-3 bottom-3">
          <ArrowUp />
        </Button>
      )}
    </div>
  )
}
