'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Award } from 'lucide-react'

const education = [
  {
    degree: 'Bachelor of Science in Artificial Intelligence',
    institution: 'Bahria University Karachi',
    period: '2023 - 2027',
    details: [
      'CGPA: 3.3/4.0',
      'Focus: Artificial Intelligence, Machine Learning, Computer Vision',
      'Relevant Coursework: Deep Learning, Computer Vision, Software Engineering , NLP, Data Structures',
    ],
  },
]

const achievements = [
  {
    title: 'PR team member in SperComp\'24',
    description: 'Acative PR team member in Supercomp\'24 at BUCIS'
  },
  {
    title: 'Marketing team member in Teknofest\'26',
    description: 'Active marketing team member in Teknofest\'26 at Bahria University'
  },
  {
    title: 'Probattle\'26 Participant',
    description: 'Participated in ML module at Probattle\'26',
  },

  {
    title: 'Procom\'25 Participant',
    description: 'Participation in Debug or Die at Procom\'25',
  },

  {
    title: 'Procom\'24 Participant',
    description: 'Participation in Pseudo wars at Procom\'24',
  },
  //   {
  //   title: 'MUN ',
  //   description: 'Participated in ML module at Probattle\'26',
  // },
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="section-container">
      <div ref={ref}>
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="heading-2 mb-16 text-center"
        >
          Education
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Education */}
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect rounded-xl p-6 card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20 shrink-0">
                  <GraduationCap className="text-blue-400" size={20} />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="heading-3 text-xl">{edu.degree}</h3>
                    <span className="text-sm text-zinc-500">{edu.period}</span>
                  </div>
                  
                  <p className="text-blue-400 font-medium mb-4">{edu.institution}</p>
                  
                  <ul className="space-y-2">
                    {edu.details.map((item, i) => (
                      <li key={i} className="text-zinc-400 flex items-start gap-2">
                        <span className="text-blue-400 mt-1.5">&bull;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="heading-3 text-2xl mb-6 text-center">Achievements</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.title}
                  className="glass-effect rounded-xl p-6 text-center card-hover"
                >
                  <div className="inline-flex p-3 bg-blue-500/10 rounded-lg border border-blue-500/20 mb-4">
                    <Award className="text-blue-400" size={24} />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{achievement.title}</h4>
                  <p className="text-sm text-zinc-400">{achievement.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
