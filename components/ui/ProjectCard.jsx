'use client'

import { useState } from 'react'
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
    <div className="flex flex-col gap-3">
      {/* Flip Card */}
      <div
        className="relative w-full h-[360px] group"
        style={{ perspective: "1000px" }}
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
            className="absolute inset-0 glass rounded-xl p-8 flex flex-col justify-between overflow-hidden cursor-pointer"
            style={{ backfaceVisibility: "hidden" }}
            onClick={() => setFlipped(true)}
          >
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
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-surface2/80 text-white/80 text-xs font-mono rounded-full border border-border">
                    {t}
                  </span>
                ))}
              </div>
              <div className="text-neon-cyan font-mono text-xs uppercase tracking-widest opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all flex items-center justify-end">
                Click for details &rarr;
              </div>
            </div>
          </div>

          {/* Back Face */}
          <div
            className="absolute inset-0 glass rounded-xl border-neon-cyan/30 p-8 flex flex-col justify-between cursor-pointer"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            onClick={() => setFlipped(false)}
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
            <span className="text-white/40 font-mono text-xs uppercase tracking-widest">
              &larr; Click anywhere to flip back
            </span>
          </div>
        </div>
      </div>

      {/* Links always visible below the card — never inside the flip */}
      <div className="flex gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-neon-cyan/40 text-white/70 hover:text-neon-cyan font-mono text-xs uppercase tracking-widest transition-all duration-200"
        >
          <span>⌥</span> GitHub Repo
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-neon-cyan/40 text-white/70 hover:text-neon-cyan font-mono text-xs uppercase tracking-widest transition-all duration-200"
        >
          <span>↗</span> Deployed Link
        </a>
      </div>
    </div>
  )
}
