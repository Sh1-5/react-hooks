import React, { useState, useEffect } from 'react'

import { useScrollPosition } from './hooks/scroll-position.hook'

export default function CustomScrollPositionHook() {
  // const [scrollPosition, setScrollPosition] = useState(0)
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollPosition(window.scrollY)
  //   }
  //   document.addEventListener('scroll', handleScroll)
  //   return () => {
  //     document.removeEventListener('scroll')
  //   }
  // }, [])
  const [scrollPosition] = useScrollPosition()
  return (
    <div style={{ height: '110vh' }}>
      <h2 style={{ position: 'fixed', top: 0, left: 0 }}>
        CustomScrollPositionHook：{scrollPosition}
      </h2>
    </div>
  )
}
