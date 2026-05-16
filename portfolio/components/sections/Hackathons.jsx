'use client'

import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'
import { hackathons } from '../../data/hackathons'

export default function Hackathons() {
  return (
    <section className="relative py-24 px-6 md:px-16 z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <SectionLabel number="04" label="Hackathons" />
          <h2 className="text-4xl md:text-5xl font-serif text-white">
            Hackathons & Competitions
          </h2>
        </motion.div>

        <div className="flex flex-col gap-8">
          {hackathons.map((hack, i) => (
            <motion.div
              key={hack.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              onClick={() => {
                if (hack.link && hack.link !== '#') {
                  window.open(hack.link, '_blank', 'noopener,noreferrer');
                }
              }}
              className={`glass p-8 rounded-xl group hover:border-neon-cyan/50 transition-colors duration-300 relative overflow-hidden flex flex-col justify-between ${hack.link && hack.link !== '#' ? 'cursor-pointer' : ''}`}
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-neon-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                  <h3 className="text-2xl font-serif text-white group-hover:text-neon-cyan transition-colors">{hack.name}</h3>
                  <span className="text-white/40 font-mono text-xs border border-white/10 px-3 py-1 rounded-full">{hack.date}</span>
                </div>
                
                <div className="mb-4">
                  <span className="text-neon-purple font-mono text-xs uppercase tracking-widest block mb-1">Project</span>
                  <h4 className="text-lg font-sans text-white/90">{hack.project}</h4>
                </div>
                
                <p className="text-white/60 font-sans text-sm leading-relaxed max-w-3xl mb-6">
                  {hack.description}
                </p>
              </div>

              {hack.link && hack.link !== "#" && (
                <div className="text-xs font-mono text-white/50 group-hover:text-neon-cyan uppercase tracking-widest flex items-center gap-2 w-fit transition-colors mt-4">
                  View Project <span className="text-lg">&rarr;</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
