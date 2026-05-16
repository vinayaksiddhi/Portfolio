'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useMousePosition } from '@/hooks/useMousePosition'

export default function Cursor() {
  const position = useMousePosition()
  const [isHovering, setIsHovering] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches)

    const handleMouseOver = (e) => {
      const target = e.target
      if (target.closest('a') || target.closest('button')) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mouseover', handleMouseOver)
    return () => window.removeEventListener('mouseover', handleMouseOver)
  }, [])

  if (isTouchDevice) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-gold rounded-full pointer-events-none z-[100]"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: isHovering ? 1.75 : 1,
        }}
        transition={{
          x: { duration: 0 },
          y: { duration: 0 },
          scale: { duration: 0.15, ease: 'easeOut' }
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-9 h-9 border border-gold rounded-full pointer-events-none z-[99]"
        animate={{
          x: position.x - 18,
          y: position.y - 18,
          scale: isHovering ? 1.55 : 1,
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 28 }}
      />
    </>
  )
}
