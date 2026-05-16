'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import MagneticButton from '../ui/MagneticButton'

export default function Hero() {
  const [startAnim, setStartAnim] = useState(false)

  useEffect(() => {
    const onPreloaderDone = () => setStartAnim(true)
    window.addEventListener('preloaderDone', onPreloaderDone)
    return () => window.removeEventListener('preloaderDone', onPreloaderDone)
  }, [])

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2, delayChildren: 0.2 } }
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-16 z-10 pointer-events-none">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center gap-8 pointer-events-auto text-center">
        <motion.div 
          className="flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate={startAnim ? "show" : "hidden"}
        >
          <motion.div 
            className="inline-flex items-center gap-3 px-4 py-2 border border-neon-cyan/30 rounded-full mb-8 w-fit bg-surface/50 backdrop-blur-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={startAnim ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.2 }}
          >
            <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
            <span className="text-sm font-mono text-white/80 uppercase tracking-widest">Available for internships</span>
          </motion.div>

          <h1 className="font-serif leading-[0.9] flex flex-col uppercase items-center">
            <div className="overflow-hidden">
              <motion.span 
                className="block text-white text-[clamp(4rem,10vw,9rem)]"
                initial={{ y: "100%" }}
                animate={startAnim ? { y: 0 } : { y: "100%" }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                Siddhi
              </motion.span>
            </div>
            <div className="overflow-hidden -mt-2 md:-mt-6">
              <motion.span 
                className="block text-neon-cyan italic text-[clamp(4rem,10vw,9rem)]"
                initial={{ y: "100%" }}
                animate={startAnim ? { y: 0 } : { y: "100%" }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                Vinayak
              </motion.span>
            </div>
          </h1>

          <motion.div 
            className="mt-8 max-w-xl text-white/70 text-lg font-sans leading-relaxed text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={startAnim ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          >
            EEE student · UI/UX designer · builder.
            <br />
            Crafting digital experiences at the intersection of engineering and creative intuition.
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex flex-col items-center gap-12 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={startAnim ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <MagneticButton 
              className="bg-neon-cyan/10 border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/20"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View my work &rarr;
            </MagneticButton>
            <MagneticButton
              className="bg-white/5 border-white/20 text-white/80 hover:bg-white/10 hover:border-white/40"
              onClick={() => window.open('https://github.com/vinayaksiddhi', '_blank', 'noopener,noreferrer')}
            >
              GitHub ↗
            </MagneticButton>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-sm font-mono text-white/50 pointer-events-auto"
        initial={{ opacity: 0 }}
        animate={startAnim ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <span className="uppercase tracking-widest text-xs">Scroll</span>
        <div className="relative w-[1px] h-16 bg-white/10 overflow-hidden">
          <motion.div 
            className="absolute inset-0 w-full bg-neon-cyan"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  )
}
