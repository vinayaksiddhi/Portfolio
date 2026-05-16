'use client'

import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'
import { skills } from '@/data/skills'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function Skills() {
  return (
    <section className="relative py-24 px-6 md:px-16 z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionLabel number="02" label="Skills" />
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-16">
            What I work with
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.05, borderColor: "var(--color-gold)" }}
              className="p-6 border border-border bg-surface rounded-sm flex flex-col gap-4 transition-colors duration-300"
            >
              <span className="text-3xl">{skill.icon}</span>
              <div>
                <h3 className="text-white font-sans text-lg mb-1">{skill.name}</h3>
                <p className="text-gold-dim text-xs font-mono uppercase tracking-wider">{skill.level}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
