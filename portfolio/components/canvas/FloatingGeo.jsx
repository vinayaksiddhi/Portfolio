'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function UfoMesh({ position, rotationSpeed, floatSpeed, floatOffset }) {
  const meshRef = useRef(null)

  useFrame((state, delta) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x += rotationSpeed.x * delta
    meshRef.current.rotation.y += rotationSpeed.y * delta
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * floatSpeed + floatOffset) * 2
  })

  return (
    <group ref={meshRef} position={position}>
      {/* Dome */}
      <mesh position={[0, 0.3, 0]}>
        <sphereGeometry args={[1, 8, 8, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshBasicMaterial color="#00f3ff" wireframe transparent opacity={0.8} />
      </mesh>
      {/* Saucer */}
      <mesh>
        <cylinderGeometry args={[2.5, 2.5, 0.2, 16]} />
        <meshBasicMaterial color="#b829ea" wireframe transparent opacity={0.7} />
      </mesh>
      {/* Ring / Bottom */}
      <mesh position={[0, -0.2, 0]}>
        <cylinderGeometry args={[1.2, 0.5, 0.4, 8]} />
        <meshBasicMaterial color="#00f3ff" wireframe transparent opacity={0.6} />
      </mesh>
    </group>
  )
}

function SatelliteMesh({ position, rotationSpeed, floatSpeed, floatOffset }) {
  const meshRef = useRef(null)

  useFrame((state, delta) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x += rotationSpeed.x * delta
    meshRef.current.rotation.y += rotationSpeed.y * delta
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * floatSpeed + floatOffset) * 1.5
  })

  return (
    <group ref={meshRef} position={position}>
      {/* Body */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 2, 8]} />
        <meshBasicMaterial color="#00f3ff" wireframe transparent opacity={0.8} />
      </mesh>
      {/* Solar Panel 1 */}
      <mesh position={[-2, 0, 0]}>
        <boxGeometry args={[3, 0.1, 1]} />
        <meshBasicMaterial color="#b829ea" wireframe transparent opacity={0.7} />
      </mesh>
      {/* Solar Panel 2 */}
      <mesh position={[2, 0, 0]}>
        <boxGeometry args={[3, 0.1, 1]} />
        <meshBasicMaterial color="#b829ea" wireframe transparent opacity={0.7} />
      </mesh>
      {/* Antenna */}
      <mesh position={[0, 1.5, 0]}>
        <coneGeometry args={[0.3, 1, 4]} />
        <meshBasicMaterial color="#00f3ff" wireframe transparent opacity={0.6} />
      </mesh>
    </group>
  )
}

export default function FloatingGeo() {
  const data = useMemo(() => [
    { type: 'ufo', pos: [-15, 10, -10], rot: { x: 0.2, y: 0.5 }, speed: 0.5, offset: 0 },
    { type: 'sat', pos: [15, -5, -15], rot: { x: -0.1, y: 0.2 }, speed: 0.4, offset: 1 },
    { type: 'ufo', pos: [0, -15, -20], rot: { x: 0.3, y: -0.1 }, speed: 0.6, offset: 2 },
    { type: 'sat', pos: [-20, -10, -5], rot: { x: 0.1, y: 0.3 }, speed: 0.5, offset: 3 },
    { type: 'ufo', pos: [20, 15, -10], rot: { x: -0.2, y: -0.2 }, speed: 0.4, offset: 4 },
    { type: 'sat', pos: [5, 20, -25], rot: { x: 0.2, y: -0.3 }, speed: 0.7, offset: 5 },
  ], [])

  return (
    <group>
      {data.map((d, i) => {
        if (d.type === 'ufo') {
          return <UfoMesh key={i} position={d.pos} rotationSpeed={d.rot} floatSpeed={d.speed} floatOffset={d.offset} />
        } else {
          return <SatelliteMesh key={i} position={d.pos} rotationSpeed={d.rot} floatSpeed={d.speed} floatOffset={d.offset} />
        }
      })}
    </group>
  )
}
