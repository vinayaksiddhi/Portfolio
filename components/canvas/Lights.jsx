'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Lights() {
  const goldLightRef = useRef(null)

  useFrame((state) => {
    if (goldLightRef.current) {
      goldLightRef.current.intensity = 3 + Math.sin(state.clock.elapsedTime) * 1
    }
  })

  return (
    <group>
      <ambientLight color="#ffffff" intensity={0.08} />
      <pointLight 
        ref={goldLightRef} 
        color="#c9a96e" 
        intensity={3} 
        position={[-10, 10, 10]} 
      />
      <pointLight 
        color="#1a1a4e" 
        intensity={2} 
        position={[15, -5, 5]} 
      />
      <directionalLight 
        color="#c9a96e" 
        intensity={0.4} 
        position={[0, 20, -20]} 
      />
    </group>
  )
}
