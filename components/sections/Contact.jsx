'use client'

import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'

export default function Contact() {
  return (
    <section className="relative py-24 px-6 md:px-16 z-10 border-t border-glass-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <SectionLabel number="09" label="Contact" />
          <h2 className="text-4xl md:text-5xl font-serif text-white">
            Let's connect
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 mb-32">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-8 rounded-xl flex-1 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-serif text-white mb-8">Contact Info</h3>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col">
                <span className="text-white/40 text-xs font-mono uppercase tracking-widest mb-1">Email</span>
                <a href="mailto:siddhiv171@gmail.com" className="text-white text-lg font-sans hover:text-neon-cyan transition-colors">siddhiv171@gmail.com</a>
              </div>
              <div className="flex flex-col">
                <span className="text-white/40 text-xs font-mono uppercase tracking-widest mb-1">Phone</span>
                <a href="tel:+918809646485" className="text-white text-lg font-sans hover:text-neon-cyan transition-colors">+91 8809646485</a>
              </div>
              <div className="flex flex-col">
                <span className="text-white/40 text-xs font-mono uppercase tracking-widest mb-1">Location</span>
                <span className="text-white text-lg font-sans">Bengaluru, India</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass p-8 rounded-xl flex-1 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-serif text-white mb-8">Social Profiles</h3>
            <div className="flex flex-col gap-6">
              <a href="https://www.linkedin.com/in/siddhi-vinayak-86784a386/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white hover:text-neon-cyan transition-colors font-mono text-lg group">
                <span className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-sm text-neon-cyan border border-transparent group-hover:border-neon-cyan/30 transition-colors">in</span>
                LinkedIn
              </a>
              <a href="https://github.com/vinayaksiddhi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white hover:text-neon-cyan transition-colors font-mono text-lg group">
                <span className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-sm text-neon-cyan border border-transparent group-hover:border-neon-cyan/30 transition-colors">gh</span>
                GitHub
              </a>
              <a href="https://www.instagram.com/siddhi.vinayakk/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white hover:text-neon-cyan transition-colors font-mono text-lg group">
                <span className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-sm text-neon-cyan border border-transparent group-hover:border-neon-cyan/30 transition-colors">ig</span>
                Instagram
              </a>
            </div>
          </motion.div>

        </div>

        <div className="relative pt-8 border-t border-glass-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-white/50 uppercase tracking-widest">
          <p>&copy; 2026 Siddhi Vinayak</p>
          <p>Bengaluru, India</p>
        </div>
      </div>
    </section>
  )
}
