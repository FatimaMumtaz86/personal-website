'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="heading-2 mb-8 text-center">About Me</h2>
        
        <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
          <p>
            I’m an AI engineer with hands-on experience in data science, machine learning, and full-stack development. My core strength lies in building systems where data, models, and applications come together  not just analysis, but end-to-end implementation.
          </p>
          
          <p>
           I work extensively with data analysis, visualization, and ML-based solutions, designing dashboards that communicate insights clearly and building backend services that power intelligent applications. Alongside this, I develop modern web interfaces using React and Next.js, ensuring that complex systems remain intuitive and accessible to users.
          </p>
          
          <p>
            I’m particularly interested in practical AI, solutions that are understandable, maintainable, and actually useful. Whether it’s a data analytics dashboard, a machine learning pipeline, or a full-stack application, I focus on clarity, structure, and real-world usability.
          </p>

          <div className="pt-6 flex flex-wrap gap-4">
            <div className="px-6 py-3 glass-effect rounded-lg">
              <p className="text-sm text-zinc-500 mb-1">Location</p>
              <p className="font-semibold text-zinc-100">Pakistan</p>
            </div>
            <div className="px-6 py-3 glass-effect rounded-lg">
              <p className="text-sm text-zinc-500 mb-1">Focus</p>
              <p className="font-semibold text-zinc-100">AI/ML Engineering</p>
            </div>
            <div className="px-6 py-3 glass-effect rounded-lg">
              <p className="text-sm text-zinc-500 mb-1">Status</p>
              <p className="font-semibold text-green-400">Open to opportunities</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
