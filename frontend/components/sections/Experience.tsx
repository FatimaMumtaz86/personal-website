'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase } from 'lucide-react'

const experiences = [
  {
    title: 'Data Visualization Intern',
    company: 'Excelerate',
    period: 'April 2025 - May 2025',
    description: [
    "Worked on data visualization and dashboard creation projects","Assisted in transforming raw datasets into meaningful visual insights","Gained hands-on experience with analytical tools and reporting workflows"  
    ],
  },
  // {
  //   title: 'Machine Learning Intern',
  //   company: 'Startup Name',
  //   period: 'Jan 2024 - May 2024',
  //   description: [
  //     'Built automated data processing pipelines handling 100k+ images daily',
  //     'Implemented MLOps practices including model versioning and experiment tracking',
  //     'Contributed to open-source ML tools used by 500+ developers'
  //   ],
  // },
  // {
  //   title: 'Research Assistant',
  //   company: 'University Research Lab',
  //   period: 'Sep 2023 - Dec 2023',
  //   description: [
  //     'Conducted research on Vision Transformers for medical image analysis',
  //     'Published findings in university conference proceedings',
  //     'Mentored junior students on deep learning fundamentals'
  //   ],
  // },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="section-container bg-zinc-900/30">
      <div ref={ref}>
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="heading-2 mb-16 text-center"
        >
          Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect rounded-xl p-6 card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20 shrink-0">
                  <Briefcase className="text-blue-400" size={20} />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="heading-3 text-xl">{exp.title}</h3>
                    <span className="text-sm text-zinc-500">{exp.period}</span>
                  </div>
                  
                  <p className="text-blue-400 font-medium mb-4">{exp.company}</p>
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-zinc-400 flex items-start gap-2">
                        <span className="text-blue-400 mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
