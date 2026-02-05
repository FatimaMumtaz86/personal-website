'use client'

import { ArrowRight, Github, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 grid-background opacity-30" />
      
      {/* Gradient orb effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse delay-1000" />

      <div className="relative section-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for opportunities
          </motion.div>

          {/* Name */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="heading-1 mb-6"
          >
            Fatima Mumtaz
          </motion.h1>

          {/* Role */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl lg:text-4xl font-display font-semibold text-gradient mb-6"
          >
            AI Engineer & Full-Stack Developer
          </motion.h2>

          {/* Statement */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl lg:text-2xl text-zinc-400 font-light leading-relaxed mb-12 max-w-3xl"
          >
            I build data-driven applications and AI-powered systems, from machine learning models and analytics dashboards to full-stack web solutions. My work focuses on transforming raw data into insightful, usable, and scalable digital products.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a 
              href="#contact"
              className="group px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all duration-300 flex items-center gap-2"
            >
              Get in touch
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#projects"
              className="px-8 py-4 glass-effect hover:bg-zinc-800/50 rounded-lg font-medium transition-all duration-300"
            >
              View projects
            </a>

            <div className="flex items-center gap-3 ml-4">
              <a 
                href="https://github.com/FatimaMumtaz86" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-effect hover:bg-zinc-800/50 rounded-lg transition-all duration-300 hover:text-blue-400"
              >
                <Github size={20} />
              </a>
              <a 
                href='https://linkedin.com/in/fatima-mumtaz-3fm33' 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-effect hover:bg-zinc-800/50 rounded-lg transition-all duration-300 hover:text-blue-400"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-zinc-700 rounded-full flex justify-center p-2">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-zinc-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}
