'use client'

import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'

export default function About() {
  const details = [
    { label: "Location", value: "Bengaluru, Karnataka" },
    { label: "Degree", value: "B.Tech EEE · BMSIT&M · 2025–2029" },
    { label: "Languages", value: "English · Hindi · Spanish" },
    { label: "Certification", value: "AI Workshop · 2025" },
    { label: "Open to", value: "Internships · Collabs" }
  ]

  return (
    <section className="relative py-24 px-6 md:px-16 z-10 border-t border-glass-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-8 justify-between">
        
        <motion.div 
          className="md:w-1/2 flex flex-col"
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SectionLabel number="01" label="About" />
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">
            Building foundations,<br />one line at a time
          </h2>
          <p className="text-white/70 text-lg leading-relaxed max-w-lg">
            As an Electrical and Electronics Engineering student with a deep passion for the web, 
            I bridge the gap between logical systems and creative design. I specialize in building 
            immersive, high-performance interfaces that don't just function—they leave an impression.
          </p>
        </motion.div>

        <motion.div 
          className="md:w-1/3 flex flex-col justify-center gap-6"
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {details.map((d, i) => (
            <motion.div 
              key={i}
              className="flex flex-col pl-4 border-l border-gold/30"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <span className="text-xs font-mono text-gold mb-1 uppercase tracking-wider">{d.label}</span>
              <span className="text-white/90 font-sans">{d.value}</span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
