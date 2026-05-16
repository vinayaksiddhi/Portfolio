'use client'

import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'
import ProjectCard from '../ui/ProjectCard'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6 md:px-16 z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8"
        >
          <div>
            <SectionLabel number="07" label="Selected Works" />
            <h2 className="text-4xl md:text-5xl font-serif text-white">
              Featured Projects
            </h2>
          </div>
          <p className="text-white/60 font-sans max-w-sm">
            A selection of my best work and side projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.length > 0 ? (
             projects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
             ))
          ) : (
             <div className="text-white/50 font-mono col-span-2 text-center py-12 border border-white/10 rounded-xl bg-surface/50">
               No projects found in data/projects.js.
             </div>
          )}
        </div>
      </div>
    </section>
  )
}
