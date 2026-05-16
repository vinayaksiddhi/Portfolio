'use client'

import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'
import { certifications } from '../../data/certifications'

export default function Certifications() {
  return (
    <section className="relative py-24 px-6 md:px-16 z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <SectionLabel number="06" label="Certifications" />
          <h2 className="text-4xl md:text-5xl font-serif text-white">
            Licenses & Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              onClick={() => {
                if (cert.link && cert.link !== '#') {
                  window.open(cert.link, '_blank', 'noopener,noreferrer');
                }
              }}
              className={`glass p-6 rounded-xl group hover:border-neon-cyan/50 transition-colors duration-300 relative overflow-hidden flex flex-col justify-between ${cert.link && cert.link !== '#' ? 'cursor-pointer' : ''}`}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-full h-40 mb-6 rounded-lg overflow-hidden relative border border-white/10 group-hover:border-neon-cyan/30 transition-colors">
                <img src={cert.image} alt={cert.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              
              <div>
                <span className="text-neon-cyan font-mono text-xs uppercase tracking-widest block mb-4">{cert.issuer}</span>
                <h3 className="text-xl font-serif text-white mb-4 group-hover:text-neon-cyan transition-colors">{cert.title}</h3>
                <p className="text-white/40 font-mono text-xs mb-6">{cert.date}</p>
              </div>
              
              {cert.link && cert.link !== "#" && (
                <div className="text-xs font-mono text-white/50 group-hover:text-neon-cyan uppercase tracking-widest flex items-center gap-2 w-fit transition-colors mt-auto">
                  View Credential <span className="text-lg">&rarr;</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
