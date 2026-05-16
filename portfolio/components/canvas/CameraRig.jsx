'use client'

import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useState } from 'react'

export default function CameraRig() {
  const { camera } = useThree()
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame((state, delta) => {
    const targetX = mouse.x * 5
    const targetY = mouse.y * 5

    camera.position.x += (targetX - camera.position.x) * 0.04
    camera.position.y += (targetY - camera.position.y) * 0.04
    
    camera.lookAt(0, 0, 0)
  })

  return null
}
