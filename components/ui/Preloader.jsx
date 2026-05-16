'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useSpring, useMotionValue } from 'framer-motion'

export default function Preloader() {
  const [text, setText] = useState('')
  const fullText = 'SIDDHI VINAYAK'
  const [isDone, setIsDone] = useState(false)
  const progressValue = useMotionValue(0)
  const scaleX = useSpring(progressValue, { stiffness: 100, damping: 20 })

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, i + 1))
      progressValue.set((i + 1) / fullText.length)
      i++
      if (i === fullText.length) {
        clearInterval(timer)
        setTimeout(() => {
          setIsDone(true)
          setTimeout(() => {
            window.dispatchEvent(new CustomEvent('preloaderDone'))
          }, 600)
        }, 800)
      }
    }, 80)
    return () => clearInterval(timer)
  }, [progressValue])

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 bg-bg z-[200] flex flex-col items-center justify-center"
        >
          <div className="flex items-center">
            <h1 className="text-white font-mono text-xl tracking-widest">{text}</h1>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-2 h-5 bg-gold ml-1"
            />
          </div>
          <div className="absolute bottom-1/4 w-48 h-px bg-white/10">
            <motion.div
              style={{ scaleX }}
              className="h-full bg-gold origin-left"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
