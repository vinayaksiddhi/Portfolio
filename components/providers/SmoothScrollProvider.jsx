'use client'

import React, { useEffect, useState } from 'react'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'

export const SmoothScrollContext = React.createContext(null)

export function SmoothScrollProvider({ children }) {
  const [lenis, setLenis] = useState(null)

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    })

    setLenis(lenisInstance)

    gsap.ticker.add((time) => {
      lenisInstance.raf(time * 1000)
    })
    
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove((time) => lenisInstance.raf(time * 1000))
      lenisInstance.destroy()
    }
  }, [])

  return (
    <SmoothScrollContext.Provider value={lenis}>
      {children}
    </SmoothScrollContext.Provider>
  )
}
