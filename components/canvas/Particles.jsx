'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useMediaQuery } from '@/hooks/useMediaQuery'

export default function Particles() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const goldCount = isMobile ? 800 : 2500
  const whiteCount = isMobile ? 100 : 200

  const goldPositions = useMemo(() => {
    const pos = new Float32Array(goldCount * 3)
    for (let i = 0; i < goldCount * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 100
    }
    return pos
  }, [goldCount])

  const whitePositions = useMemo(() => {
    const pos = new Float32Array(whiteCount * 3)
    for (let i = 0; i < whiteCount * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 100
    }
    return pos
  }, [whiteCount])

  const goldGroup = useRef(null)
  const whiteGroup = useRef(null)

  useFrame((state, delta) => {
    if (goldGroup.current) {
      goldGroup.current.rotation.y += delta * 0.02
      goldGroup.current.rotation.x += delta * 0.01
    }
    if (whiteGroup.current) {
      whiteGroup.current.rotation.y -= delta * 0.015
      whiteGroup.current.rotation.z += delta * 0.01
    }
  })

  return (
    <group>
      <points ref={goldGroup}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={goldPositions.length / 3}
            array={goldPositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial color="#c9a96e" size={0.12} transparent opacity={0.6} />
      </points>

      <points ref={whiteGroup}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={whitePositions.length / 3}
            array={whitePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial color="#f0ece4" size={0.22} transparent opacity={0.8} />
      </points>
    </group>
  )
}
