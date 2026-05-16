'use client'

import { Canvas } from '@react-three/fiber'
import Particles from './Particles'
import FloatingGeo from './FloatingGeo'
import Lights from './Lights'
import CameraRig from './CameraRig'

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ fov: 60, position: [0, 0, 30] }}
        gl={{ antialias: true, alpha: false }}
        dpr={[1, 2]}
      >
        <color attach="background" args={['#060608']} />
        <fogExp2 attach="fog" args={['#060608', 0.018]} />
        
        <Lights />
        <Particles />
        <FloatingGeo />
        <CameraRig />
      </Canvas>
    </div>
  )
}
