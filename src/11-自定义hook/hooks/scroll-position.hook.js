import { useState, useEffect } from 'react'

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll')
    }
  }, [])
  return [scrollPosition]
}
