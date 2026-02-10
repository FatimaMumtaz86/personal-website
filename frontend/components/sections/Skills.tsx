'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    title: 'AI & Machine Learning',
    skills: ['PyTorch', 'TensorFlow', 'Computer Vision', 'Deep Learning', 'Model Optimization', 'MLOps', 'Data Analysis', 'Visualization', 'Pandas', 'Matplotlib', 'Seaborn','Data Science']
  },
  {
    title: 'Programming & Tools',
    skills: ['Python', 'TypeScript', 'C++', 'Git', 'Docker'
    ]
  },
  {
    title: 'Backend & Infrastructure',
    skills: ['FastAPI', 'Node.js', 'PostgreSQL', 'CI/CD']
  },
  {
    title: 'Frontend & UI',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Responsive Design']
  }
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="section-container bg-zinc-900/30">
      <div ref={ref}>
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="heading-2 mb-16 text-center"
        >
          Technical Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass-effect rounded-xl p-6 card-hover"
            >
              <h3 className="heading-3 mb-6 text-xl">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-zinc-800/50 hover:bg-zinc-700/50 rounded-lg text-sm text-zinc-300 hover:text-zinc-100 transition-all duration-300 border border-zinc-700/50"
                  >
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
