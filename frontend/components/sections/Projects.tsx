'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
{
    title: 'IBM-Data-Analyst-Capstone-Project',
    description: 'End-to-end data analysis and visualization project using real-world datasets. Involved data cleaning, exploratory data analysis, and creating actionable insights with Python and SQL.',
    tags: ['Python','IBM Cognos analytics', 'SQL', 'Pandas', 'Matplotlib', 'Seaborn', 'Excel'],
    github: 'https://github.com/FatimaMumtaz86/ibm-data-analyst-capstone-project',
    demo: null,
},
{
    title: 'Fake/Real News Detection',
    description: 'Machine learning-based news classification system to detect fake and real news. Preprocessing pipeline with NLP techniques and model training achieving high accuracy on benchmark datasets.',
    tags: ['Python', 'NLP', 'Scikit-learn', 'TensorFlow', 'Text Classification'],
    github: 'https://github.com/FatimaMumtaz86/fake-news-detection',
    demo: null,
 },
//   {
//     title: 'ML Model Serving Infrastructure',
//     description: 'Scalable microservices architecture for serving ML models at scale. Handles 10k+ requests/min with automatic scaling and monitoring.',
//     tags: ['FastAPI', 'Redis', 'Docker', 'Kubernetes'],
//     github: 'https://github.com/yourusername/ml-serving',
//     demo: 'https://demo.example.com',
//   },
//   {
//     title: 'Vision Transformer Fine-tuning Framework',
//     description: 'Modular framework for fine-tuning Vision Transformers on custom datasets. Includes data augmentation pipelines and experiment tracking.',
//     tags: ['PyTorch', 'Transformers', 'MLflow', 'DVC'],
//     github: 'https://github.com/yourusername/vit-framework',
//     demo: null,
//   },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="section-container">
      <div ref={ref}>
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="heading-2 mb-16 text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect rounded-xl p-6 card-hover group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="heading-3 text-xl flex-1 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
                      aria-label="Live demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-zinc-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400"
                  >
                    {tag}
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
