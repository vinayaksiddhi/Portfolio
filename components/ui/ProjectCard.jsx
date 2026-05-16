'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export default function ProjectCard({ project }) {
  const [flipped, setFlipped] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 })

  const handleMouseMove = (e) => {
    if (flipped) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientY - rect.top - rect.height / 2) / 15
    const y = -(e.clientX - rect.left - rect.width / 2) / 15
    setTilt({ x, y })
    
    setGlare({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      opacity: 0.15
    })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setGlare({ x: 50, y: 50, opacity: 0 })
  }

  const statusColors = {
    "Completed": "text-green-400 border-green-400/30 bg-green-400/10",
    "In Progress": "text-neon-cyan border-neon-cyan/30 bg-neon-cyan/10",
    "Ongoing": "text-neon-purple border-neon-purple/30 bg-neon-purple/10",
  }

  const statusStyle = statusColors[project.status] || "text-white/60 border-white/20 bg-white/5"

  return (
    <div 
      className="relative w-full h-[400px] cursor-pointer group"
      style={{ perspective: "1000px" }}
      onClick={() => setFlipped(!flipped)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="w-full h-full relative"
        style={{ 
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: flipped ? "transform 0.6s cubic-bezier(0.16,1,0.3,1)" : "transform 0.1s ease"
        }}
      >
        {/* Front Face */}
        <div 
          className="absolute inset-0 glass rounded-xl p-8 flex flex-col justify-between overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Glare effect */}
          <div 
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
            style={{ 
              background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(0, 243, 255, 0.3) 0%, transparent 60%)`,
              opacity: glare.opacity
            }} 
          />
          
          <div className="relative z-20">
            <div className="flex justify-between items-start">
              <span className="font-mono text-gold text-sm">{project.id}</span>
              <span className={cn("text-[10px] font-mono uppercase px-2 py-1 rounded-full border", statusStyle)}>
                {project.status}
              </span>
            </div>
            <h3 className="font-serif text-3xl text-white mt-4 mb-4 group-hover:text-neon-cyan transition-colors">{project.name}</h3>
            <p className="text-white/70 font-sans text-sm">{project.shortDesc}</p>
          </div>
          
          <div className="relative z-20">
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t, i) => (
                <span key={i} className="px-3 py-1 bg-surface2/80 text-white/80 text-xs font-mono rounded-full border border-border">
                  {t}
                </span>
              ))}
            </div>
            <div className="text-neon-cyan font-mono text-xs uppercase tracking-widest opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all flex items-center justify-end">
              Click to flip &rarr;
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div 
          className="absolute inset-0 glass rounded-xl border-neon-cyan/30 p-8 flex flex-col justify-between"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div>
            <h3 className="font-serif text-2xl text-neon-cyan mb-4">{project.name}</h3>
            <p className="text-white/80 font-sans text-sm leading-relaxed mb-6">
              {project.fullDesc}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span key={i} className="px-2 py-1 bg-bg/50 text-white/60 text-[10px] font-mono uppercase tracking-wider border border-border rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-4">
            <span className="text-white/50 font-mono text-xs uppercase tracking-widest hover:text-white transition-colors">
              &larr; Flip back
            </span>
            <div className="flex gap-4">
              <button onClick={(e) => { e.stopPropagation(); window.open(project.github, '_blank', 'noopener,noreferrer'); }} className="text-white font-mono text-sm underline decoration-neon-cyan/30 hover:decoration-neon-cyan underline-offset-4 z-20 relative transition-colors cursor-pointer">GitHub</button>
              <button onClick={(e) => { e.stopPropagation(); window.open(project.live, '_blank', 'noopener,noreferrer'); }} className="text-white font-mono text-sm underline decoration-neon-cyan/30 hover:decoration-neon-cyan underline-offset-4 z-20 relative transition-colors cursor-pointer">Live</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
