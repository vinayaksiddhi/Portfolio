'use client'

import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'
import { achievements } from '@/data/achievements'

export default function Achievements() {
  return (
    <section className="relative py-24 px-6 md:px-16 z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <SectionLabel number="05" label="Achievements" />
          <h2 className="text-4xl md:text-5xl font-serif text-white">
            Milestones
          </h2>
        </motion.div>

        {achievements && achievements.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((ach, i) => (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass p-8 rounded-xl group hover:border-neon-purple/50 transition-colors duration-300 flex flex-col justify-between relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-neon-purple font-mono text-xs uppercase tracking-widest">{ach.recognition}</span>
                    <span className="text-white/40 font-mono text-xs">{ach.date}</span>
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-neon-purple transition-colors">{ach.title}</h3>
                  <p className="text-white/60 font-sans text-sm leading-relaxed mb-6">
                    {ach.description}
                  </p>
                </div>
                
                {ach.link !== "#" && (
                  <a 
                    href={ach.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-white/50 hover:text-neon-purple uppercase tracking-widest flex items-center gap-2 w-fit transition-colors"
                  >
                    View Certificate <span className="text-lg">&rarr;</span>
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center py-20 px-8 glass rounded-2xl border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/5 via-transparent to-neon-cyan/5 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            <p className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-white/80 text-center tracking-wide leading-relaxed relative z-10">
              "Achievements are under construction — <br className="hidden md:block" /> <span className="text-neon-purple font-medium">currently turning effort into results.</span>"
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
