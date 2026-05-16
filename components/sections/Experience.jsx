'use client'

import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'
import { experience } from '@/data/experience'

export default function Experience() {
  return (
    <section className="relative py-24 px-6 md:px-16 z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <SectionLabel number="03" label="Experience" />
          <h2 className="text-4xl md:text-5xl font-serif text-white">
            Where I've worked
          </h2>
        </motion.div>

        <div className="flex flex-col gap-8">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass p-8 rounded-xl relative group overflow-hidden transition-all duration-300 hover:border-neon-cyan/50"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-neon-cyan transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300 ease-out" />
              
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h3 className="text-2xl font-serif text-white">{exp.role}</h3>
                  <p className="text-neon-cyan font-mono text-sm mt-1">{exp.organization}</p>
                </div>
                <div className="mt-2 md:mt-0 px-3 py-1 bg-surface2/50 border border-border rounded-full text-white/60 font-mono text-xs uppercase tracking-wider">
                  {exp.duration}
                </div>
              </div>

              <p className="text-white/70 font-sans text-sm leading-relaxed mb-6">
                {exp.description}
              </p>

              <div className="mb-6">
                <h4 className="text-white/90 font-sans text-sm mb-2 font-medium">Key Contributions:</h4>
                <ul className="space-y-2">
                  {exp.contributions.map((item, idx) => (
                    <li key={idx} className="text-white/60 text-sm font-sans flex items-start gap-2">
                      <span className="text-neon-cyan mt-1 text-[10px]">♦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                {exp.skills.map((skill, idx) => (
                  <span key={idx} className="text-xs font-mono text-white/50 px-2 py-1 bg-surface rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
