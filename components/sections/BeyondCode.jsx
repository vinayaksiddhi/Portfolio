'use client'

import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'
import { beyondData } from '../../data/beyond'

export default function BeyondCode() {
  return (
    <section className="relative py-24 px-6 md:px-16 z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <SectionLabel number="08" label="Beyond Code" />
          <h2 className="text-4xl md:text-5xl font-serif text-white">
            Apart from Study
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-xl relative overflow-hidden flex flex-col justify-center"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-neon-cyan/10 blur-[50px] rounded-full pointer-events-none" />
            <h3 className="text-xl font-serif text-neon-cyan mb-4">About Me</h3>
            <p className="text-white/70 font-sans leading-relaxed text-lg italic">
              "{beyondData.about}"
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass p-8 rounded-xl relative overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-neon-purple/10 blur-[50px] rounded-full pointer-events-none" />
            <h3 className="text-xl font-serif text-neon-purple mb-6">Hobbies & Interests</h3>
            <div className="flex flex-wrap gap-3">
              {beyondData.hobbies.map((hobby, i) => (
                <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/80 font-mono text-sm hover:border-neon-purple/50 hover:text-neon-purple transition-colors cursor-default">
                  {hobby}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass p-8 rounded-xl lg:col-span-2 border-l-4 border-l-neon-cyan group hover:bg-white/5 transition-colors"
          >
            <h3 className="text-xl font-serif text-white mb-2 group-hover:text-neon-cyan transition-colors">Learning Journey</h3>
            <p className="text-white/60 font-sans mb-6">
              {beyondData.journey}
            </p>
            
            <div className="inline-block p-4 rounded-lg bg-black/40 border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-purple to-neon-cyan" />
              <span className="text-neon-cyan font-mono text-xs uppercase tracking-widest block mb-2">Currently Exploring</span>
              <p className="text-white/80 font-serif text-lg">
                {beyondData.exploring}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
