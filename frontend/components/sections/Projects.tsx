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

{
  title: 'COVID-19 Data Analysis Dashboard',
  description: 'Interactive Power BI dashboard for analyzing global COVID-19 trends. Combines Python-based data preprocessing with Power BI visualizations to explore confirmed cases, deaths, recoveries, and active cases across countries and WHO regions.',
  tags: ['Power BI', 'Python', 'Pandas', 'DAX', 'Data Visualization'],
  github: 'https://github.com/FatimaMumtaz86/covid-19-powerbi-dashboard',
  demo:null,
},
{
  title: 'Face Clustering using PCA & Unsupervised Learning',
  description: 'End-to-end face clustering pipeline using the LFW dataset. Combines PCA-based feature extraction with K-Means, Hierarchical Clustering, DBSCAN, and SOM. Includes clustering evaluation metrics and Explainable AI (LIME, SHAP) for interpretability.',
  tags: [
    'Machine Learning',
    'Computer Vision',
    'Unsupervised Learning',
    'PCA',
    'Clustering',
    'Explainable AI'
  ],
  github: 'https://github.com/FatimaMumtaz86/face-clustering-pca',
  demo: null,
}
,
{
  title: 'Gross Profit Analysis Dashboard',
  description: 'Interactive Power BI dashboard for analyzing Plant Co.’s gross profit performance. Provides YTD vs PYTD comparisons, regional insights, product category analysis, monthly trends, and profitability segmentation to support data-driven decision-making.',
  tags: ['Power BI', 'DAX', 'Power Query', 'Financial Analysis', 'Data Visualization'],
  github: 'https://github.com/FatimaMumtaz86/gross-profit-powerbi-dashboard',
  demo:null,
}
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
