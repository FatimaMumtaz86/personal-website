Premium Personal Brand Website

A high-end, production-ready personal portfolio website for Fatima Mumtaz - AI Engineer & Researcher.

Tech Stack
Frontend

Framework: Next.js 14 (App Router) - Industry-standard React framework

Language: TypeScript - Type-safe development

Styling: Tailwind CSS - Utility-first CSS framework

Animations: Framer Motion - Smooth, professional animations

Typography: Google Fonts (Inter + Space Grotesk)

Backend

Framework: FastAPI - Modern Python API framework

Database: MySQL - Reliable relational database

ORM: SQLAlchemy - Python SQL toolkit

Validation: Pydantic - Data validation

Deployment (FREE)

Frontend: Vercel

Backend: Railway / Render

Database: Railway MySQL (free tier)

Website Features

Premium dark theme with gradient accents

Responsive design (mobile + desktop)

Smooth scroll animations

Contact form with database storage

SEO optimized

Fast loading (Lighthouse 90+)

Professional typography

Modern component architecture

PERSONALIZATION GUIDE
CRITICAL: Files You MUST Edit
1. Hero Section - /frontend/components/sections/Hero.tsx

Line 39-41: Your name

<motion.h1>
  Your Name  // ← Change to: Fatima Mumtaz
</motion.h1>


Line 50-52: Your role/title

<motion.h2>
  AI Engineer & Researcher  // ← Keep or modify this
</motion.h2>


Line 60-63: Your professional statement

<motion.p>
  Building production-grade AI systems that solve real problems. 
  Specializing in computer vision, deep learning, and scalable ML infrastructure.
  // ← Edit this to reflect your focus areas
</motion.p>


Line 96-103: Social media links

href="https://github.com/yourusername"  // ← Add your GitHub
href="https://linkedin.com/in/yourusername"  // ← Add your LinkedIn

2. About Section - /frontend/components/sections/About.tsx

Line 21-41: Your professional story

<p>
  I'm an AI engineer focused on building production-ready systems...
  // ← Replace entire "About Me" text with your story
  // Talk about:
  // - Your passion for AI/ML
  // - What you're currently working on
  // - Your goals and aspirations
</p>


Line 44-56: Location and status boxes

<p className="font-semibold text-zinc-100">Pakistan</p>  
<p className="font-semibold text-zinc-100">AI/ML Engineering</p>  
<p className="font-semibold text-green-400">Open to opportunities</p>  

3. Skills Section - /frontend/components/sections/Skills.tsx

Line 8-29: Edit your skill categories

const skillCategories = [
  {
    title: 'AI & Machine Learning',
    skills: ['PyTorch', 'TensorFlow', 'Computer Vision', 'Deep Learning', 'Model Optimization', 'MLOps']
  },
  {
    title: 'Programming & Tools',
    skills: ['Python', 'TypeScript', 'C++', 'Git', 'Docker', 'Linux']
  },
  {
    title: 'Backend & Infrastructure',
    skills: ['FastAPI', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'CI/CD']
  },
  {
    title: 'Frontend & UI',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Responsive Design']
  }
]

4. Projects Section - /frontend/components/sections/Projects.tsx

Line 8-47: Replace with YOUR actual projects

const projects = [
  {
    title: 'Automated License Plate Recognition System',
    description: 'Production-grade ANPR system using computer vision and FastAPI for real-time detection and logging.',
    tags: ['PyTorch', 'Computer Vision', 'FastAPI', 'Docker'],
    github: 'https://github.com/yourusername/project',
    demo: null,
  },
  // Add more projects...
]


Steps to add projects:

Copy a project object

Change title, description, tags

Add GitHub link

Add live demo URL or null

Repeat for 3-6 best projects

5. Experience Section - /frontend/components/sections/Experience.tsx

Line 7-39: Add your internships/experience

const experiences = [
  {
    title: 'AI Research Intern',
    company: 'Tech Company Name',
    period: 'Jun 2024 - Aug 2024',
    description: [
      'Developed computer vision models',
      'Optimized inference pipeline',
      'Collaborated with senior engineers'
    ],
  },
]

6. Education Section - /frontend/components/sections/Education.tsx

Line 8-18: Your education details

const education = [
  {
    degree: 'Bachelor of Science in Artificial Intelligence',
    institution: 'Bahria University Karachi',
    period: '2023 - 2027',
    details: [
      'CGPA: [Your CGPA]/4.0',
      'Focus: Artificial Intelligence, Machine Learning, Computer Vision',
      'Relevant Coursework: Deep Learning, Computer Vision, NLP, Data Structures',
    ],
  },
]


Achievements (optional):

const achievements = [
  {
    title: 'Dean\'s List',
    description: 'Academic excellence recognition',
  },
]

7. Contact Section - /frontend/components/sections/Contact.tsx

Line 89-96: Your email

<a 
  href="mailto:fatima.mumtaz@example.com"
  className="text-zinc-300 hover:text-blue-400 transition-colors"
>
  fatima.mumtaz@example.com
</a>


Line 105: Location

<p className="text-zinc-300">Karachi, Pakistan</p>

8. Header - /frontend/components/Header.tsx

Line 26-28: Your initials/logo

<a href="#" className="font-display text-xl font-bold">
  FM  // Fatima Mumtaz
</a>

9. Footer - /frontend/components/Footer.tsx

Line 7-12: Your social media links

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/yourusername' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/yourusername' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/yourusername' },
  { name: 'Email', icon: Mail, href: 'mailto:your.email@example.com' },
]


Line 21: Your name in footer

© {new Date().getFullYear()} Fatima Mumtaz. Built with Next.js & FastAPI.

10. Metadata (SEO) - /frontend/app/layout.tsx

Line 17-26: Update for SEO

export const metadata: Metadata = {
  title: 'Fatima Mumtaz | AI Engineer & Researcher',
  description: 'AI Engineer specializing in Computer Vision, Deep Learning, and Production ML Systems',
  keywords: ['AI Engineer', 'Machine Learning', 'Computer Vision', 'Deep Learning', 'Software Engineer'],
  authors: [{ name: 'Fatima Mumtaz' }],
  openGraph: {
    title: 'Fatima Mumtaz | AI Engineer',
    description: 'AI Engineer specializing in Computer Vision and ML Systems',
    type: 'website',
  },
}

Database Setup
Create MySQL Database
CREATE DATABASE portfolio_db;
USE portfolio_db;

SHOW TABLES;
DESC contacts;

Backend Configuration

Create .env file in /backend/ folder:

cp .env.example .env


Edit .env with your credentials:

DATABASE_URL=mysql+mysqlconnector://root:YOUR_PASSWORD@localhost:3306/portfolio_db
FRONTEND_URL=http://localhost:3000

Local Development
Frontend Setup
cd frontend
npm install
npm run dev
# Open http://localhost:3000

Backend Setup
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python main.py
# Backend: http://localhost:8000
# API docs: http://localhost:8000/docs

Deployment Guide
Frontend Deployment (Vercel - FREE)

Push code to GitHub

Go to https://vercel.com

Sign up with GitHub

Click "New Project"

Import repository

Set root directory to frontend

Click "Deploy"

Get URL like: https://your-site.vercel.app

Backend Deployment (Railway - FREE)

Go to https://railway.app

Sign up with GitHub

Click "New Project → Deploy from GitHub repo"

Select repository

Add environment variables:

DATABASE_URL=mysql://...
FRONTEND_URL=https://your-vercel-app.vercel.app


Railway deploys automatically

URL like: https://your-app.up.railway.app

Connect Frontend to Backend

Update /frontend/components/sections/Contact.tsx:

const response = await fetch('https://your-railway-app.up.railway.app/api/contact', {


Push changes → Vercel redeploys automatically.

Quick Checklist

Edit Hero, About, Skills, Projects, Experience, Education, Contact, Header, Footer

Update SEO metadata

Set up MySQL database and backend .env

Test locally

Deploy frontend & backend

Update API URL in frontend

Common Issues

Database connection error: Check .env and MySQL status

Contact form not working: Check backend port, CORS, browser console

Styles not loading: rm -rf .next && npm run dev

Build errors: rm -rf node_modules package-lock.json && npm install && npm run build

Resources

Next.js Documentation

Tailwind CSS

FastAPI Documentation

Vercel Deployment

Railway Deployment

Tips for Success

Edit all files before deploying

Test locally first

Add real projects

Use professional email

Keep portfolio updated

Fill out SEO metadata

Test mobile responsiveness

Optimize for fast loading

Customization Ideas

Change color scheme in tailwind.config.js

Add photo in Hero section

Add blog section

Add testimonials or certifications

Add languages spoken

Support

Check this README

Check browser console for errors

Check backend logs

Search error message online

Ask on Stack Overflow

Built by Fatima Mumtaz
Last updated: February 2026
