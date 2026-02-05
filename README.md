# 🚀 Premium Personal Brand Website

A high-end, production-ready personal portfolio website for Fatima Mumtaz - AI Engineer & Researcher.

## 📋 Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router) - Industry-standard React framework
- **Language**: TypeScript - Type-safe development
- **Styling**: Tailwind CSS - Utility-first CSS framework
- **Animations**: Framer Motion - Smooth, professional animations
- **Typography**: Google Fonts (Inter + Space Grotesk)

### Backend
- **Framework**: FastAPI - Modern Python API framework
- **Database**: MySQL - Reliable relational database
- **ORM**: SQLAlchemy - Python SQL toolkit
- **Validation**: Pydantic - Data validation

### Deployment (FREE)
- **Frontend**: Vercel
- **Backend**: Railway / Render
- **Database**: Railway MySQL (free tier)

---

## 🎨 Website Features

✅ Premium dark theme with gradient accents
✅ Responsive design (mobile + desktop)
✅ Smooth scroll animations
✅ Contact form with database storage
✅ SEO optimized
✅ Fast loading (Lighthouse 90+)
✅ Professional typography
✅ Modern component architecture

---

## 📝 PERSONALIZATION GUIDE

### 🔴 CRITICAL: Files You MUST Edit

#### 1. **Hero Section** - `/frontend/components/sections/Hero.tsx`

**Line 39-41**: Your name
```typescript
<motion.h1>
  Your Name  // ← Change to: Fatima Mumtaz
</motion.h1>
```

**Line 50-52**: Your role/title
```typescript
<motion.h2>
  AI Engineer & Researcher  // ← Keep or modify this
</motion.h2>
```

**Line 60-63**: Your professional statement
```typescript
<motion.p>
  Building production-grade AI systems that solve real problems. 
  Specializing in computer vision, deep learning, and scalable ML infrastructure.
  // ← Edit this to reflect your focus areas
</motion.p>
```

**Line 96-103**: Social media links
```typescript
href="https://github.com/yourusername"  // ← Add your GitHub
href="https://linkedin.com/in/yourusername"  // ← Add your LinkedIn
```

---

#### 2. **About Section** - `/frontend/components/sections/About.tsx`

**Line 21-41**: Your professional story
```typescript
<p>
  I'm an AI engineer focused on building production-ready systems...
  // ← Replace entire "About Me" text with your story
  // Talk about:
  // - Your passion for AI/ML
  // - What you're currently working on
  // - Your goals and aspirations
</p>
```

**Line 44-56**: Location and status boxes
```typescript
<p className="font-semibold text-zinc-100">Pakistan</p>  // ← Already correct
<p className="font-semibold text-zinc-100">AI/ML Engineering</p>  // ← Your focus
<p className="font-semibold text-green-400">Open to opportunities</p>  // ← Your status
```

---

#### 3. **Skills Section** - `/frontend/components/sections/Skills.tsx`

**Line 8-29**: Edit your skill categories
```typescript
const skillCategories = [
  {
    title: 'AI & Machine Learning',
    skills: ['PyTorch', 'TensorFlow', 'Computer Vision', 'Deep Learning', 'Model Optimization', 'MLOps']
    // ← Add/remove skills based on what you actually know
  },
  {
    title: 'Programming & Tools',
    skills: ['Python', 'TypeScript', 'C++', 'Git', 'Docker', 'Linux']
    // ← Add languages and tools you use
  },
  {
    title: 'Backend & Infrastructure',
    skills: ['FastAPI', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'CI/CD']
    // ← Backend technologies you've worked with
  },
  {
    title: 'Frontend & UI',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Responsive Design']
    // ← Frontend skills if you have any
  }
]
```

---

#### 4. **Projects Section** - `/frontend/components/sections/Projects.tsx`

**Line 8-47**: Replace with YOUR actual projects
```typescript
const projects = [
  {
    title: 'Automated License Plate Recognition System',  // ← Your project name
    description: 'Production-grade ANPR system...',  // ← Your project description
    tags: ['PyTorch', 'Computer Vision', 'FastAPI', 'Docker'],  // ← Technologies used
    github: 'https://github.com/yourusername/project',  // ← Your GitHub repo
    demo: null,  // ← Demo link if you have one (or null)
  },
  // Add more projects...
]
```

**HOW TO ADD YOUR PROJECTS:**
1. Copy one project object
2. Change title, description, tags
3. Add your GitHub link
4. If you have a live demo, add the URL, otherwise use `null`
5. Add as many projects as you want (recommended: 3-6 best projects)

---

#### 5. **Experience Section** - `/frontend/components/sections/Experience.tsx`

**Line 7-39**: Add your internships/experience
```typescript
const experiences = [
  {
    title: 'AI Research Intern',  // ← Your role
    company: 'Tech Company Name',  // ← Company name
    period: 'Jun 2024 - Aug 2024',  // ← Duration
    description: [
      'Developed computer vision models...',  // ← What you did
      'Optimized inference pipeline...',  // ← Your achievements
      'Collaborated with senior engineers...'  // ← Your responsibilities
    ],
  },
  // If you don't have experience yet, you can:
  // - Add university projects as "Academic Projects"
  // - Add freelance work
  // - Add volunteer work
  // - Or remove this section entirely from /frontend/app/page.tsx
]
```

---

#### 6. **Education Section** - `/frontend/components/sections/Education.tsx`

**Line 8-18**: Your education details
```typescript
const education = [
  {
    degree: 'Bachelor of Science in Artificial Intelligence',  // ← Already correct
    institution: 'Bahria University Karachi',  // ← Already correct
    period: '2023 - 2027',  // ← Already correct
    details: [
      'CGPA: [Your CGPA]/4.0',  // ← Add your CGPA
      'Focus: Artificial Intelligence, Machine Learning, Computer Vision',  // ← Your focus areas
      'Relevant Coursework: Deep Learning, Computer Vision, NLP, Data Structures',  // ← Your courses
    ],
  },
]
```

**Line 21-36**: Your achievements (OPTIONAL)
```typescript
const achievements = [
  {
    title: 'Dean\'s List',  // ← Your achievement
    description: 'Academic excellence recognition',  // ← Description
  },
  // Add your actual achievements here
  // If you don't have achievements yet, you can remove this entire section
  // by deleting lines 82-102 in this file
]
```

---

#### 7. **Contact Section** - `/frontend/components/sections/Contact.tsx`

**Line 89-96**: Your email
```typescript
<a 
  href="mailto:fatima.mumtaz@example.com"  // ← Change to your REAL email
  className="text-zinc-300 hover:text-blue-400 transition-colors"
>
  fatima.mumtaz@example.com  // ← Same email here
</a>
```

**Line 105**: Location (already correct)
```typescript
<p className="text-zinc-300">Karachi, Pakistan</p>  // ← Already correct
```

---

#### 8. **Header** - `/frontend/components/Header.tsx`

**Line 26-28**: Your initials/logo
```typescript
<a href="#" className="font-display text-xl font-bold">
  YN  // ← Change to: FM (Fatima Mumtaz)
</a>
```

---

#### 9. **Footer** - `/frontend/components/Footer.tsx`

**Line 7-12**: Your social media links
```typescript
const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/yourusername' },  // ← Your GitHub
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/yourusername' },  // ← Your LinkedIn
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/yourusername' },  // ← Your Twitter (optional)
  { name: 'Email', icon: Mail, href: 'mailto:your.email@example.com' },  // ← Your email
]
```

**Line 21**: Your name in footer
```typescript
© {new Date().getFullYear()} Your Name. Built with Next.js & FastAPI.
// ← Change to: Fatima Mumtaz
```

---

#### 10. **Metadata (SEO)** - `/frontend/app/layout.tsx`

**Line 17-26**: Update for SEO
```typescript
export const metadata: Metadata = {
  title: 'Your Name | AI Engineer & Researcher',  // ← Fatima Mumtaz | AI Engineer
  description: 'AI Engineer specializing in Computer Vision, Deep Learning, and Production ML Systems',
  // ← Your actual skills and focus
  keywords: ['AI Engineer', 'Machine Learning', 'Computer Vision', 'Deep Learning', 'Software Engineer'],
  authors: [{ name: 'Your Name' }],  // ← Fatima Mumtaz
  openGraph: {
    title: 'Your Name | AI Engineer',  // ← Fatima Mumtaz | AI Engineer
    description: 'AI Engineer specializing in Computer Vision and ML Systems',
    type: 'website',
  },
}
```

---

## 🗄️ Database Setup

### Create MySQL Database

```sql
CREATE DATABASE portfolio_db;
USE portfolio_db;

-- Table will be auto-created by SQLAlchemy, but you can verify:
SHOW TABLES;
DESC contacts;
```

### Backend Configuration

1. **Create `.env` file** in `/backend/` folder:
```bash
cp .env.example .env
```

2. **Edit `.env`** with your database credentials:
```env
DATABASE_URL=mysql+mysqlconnector://root:YOUR_PASSWORD@localhost:3306/portfolio_db
FRONTEND_URL=http://localhost:3000
```

---

## 🚀 Local Development

### Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Backend Setup

```bash
cd backend

# Create virtual environment (recommended)
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run backend server
python main.py

# Backend runs on http://localhost:8000
# API docs: http://localhost:8000/docs
```

---

## 📦 Deployment Guide

### Frontend Deployment (Vercel - FREE)

1. Push your code to GitHub
2. Go to https://vercel.com
3. Sign up with GitHub
4. Click "New Project"
5. Import your repository
6. Set root directory to `frontend`
7. Click "Deploy"
8. Done! You'll get a URL like: `https://your-site.vercel.app`

### Backend Deployment (Railway - FREE)

1. Go to https://railway.app
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Click "Add variables" and add:
   ```
   DATABASE_URL=mysql://...  (Railway will provide this)
   FRONTEND_URL=https://your-vercel-app.vercel.app
   ```
6. Railway will auto-detect FastAPI and deploy
7. You'll get a URL like: `https://your-app.up.railway.app`

### Connect Frontend to Backend

After deployment, update this line in `/frontend/components/sections/Contact.tsx`:

**Line 24**:
```typescript
const response = await fetch('http://localhost:8000/api/contact', {
  // ← Change to: 'https://your-railway-app.up.railway.app/api/contact'
```

Redeploy frontend to Vercel (it will auto-deploy on git push).

---

## 🎯 Quick Checklist

- [ ] Edit Hero section with your name (Fatima Mumtaz)
- [ ] Update About section with your story
- [ ] Add your actual skills in Skills section
- [ ] Replace projects with YOUR projects
- [ ] Add your experience/internships (or remove if none yet)
- [ ] Update education with your CGPA
- [ ] Add your real email in Contact section
- [ ] Update all social media links (GitHub, LinkedIn)
- [ ] Change initials in Header to FM
- [ ] Update Footer with your name
- [ ] Fix SEO metadata in layout.tsx
- [ ] Create MySQL database
- [ ] Set up backend .env file
- [ ] Test locally (frontend + backend)
- [ ] Deploy to Vercel + Railway
- [ ] Update API URL in Contact.tsx after backend deployment

---

## 🆘 Common Issues

### Issue: Database connection error
**Solution**: Check your DATABASE_URL in `.env` file. Make sure MySQL is running.

### Issue: Contact form not working
**Solution**: 
1. Check if backend is running on port 8000
2. Check CORS settings in backend/main.py
3. Check network tab in browser dev tools

### Issue: Styles not loading
**Solution**: 
```bash
cd frontend
rm -rf .next
npm run dev
```

### Issue: Build errors
**Solution**: 
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Vercel Deployment](https://vercel.com/docs)
- [Railway Deployment](https://docs.railway.app/)

---

## 💡 Tips for Success

1. **Start with personalization**: Edit all the files mentioned above before deploying
2. **Test locally first**: Make sure everything works on localhost
3. **Add real projects**: Don't deploy with placeholder projects
4. **Professional email**: Use a professional email address
5. **Keep it updated**: Regularly update your projects and experience
6. **SEO matters**: Fill out all metadata properly
7. **Mobile first**: Test on mobile devices
8. **Fast loading**: Optimize images and code

---

## 🎨 Customization Ideas

Want to make it more personal? Try:
- Change color scheme in `tailwind.config.js`
- Add your photo in Hero section
- Add a blog section
- Add testimonials from professors/colleagues
- Add certifications section
- Add languages you speak

---

## 📞 Support

If you face any issues:
1. Check this README thoroughly
2. Check browser console for errors
3. Check backend logs
4. Google the error message
5. Ask on Stack Overflow

---

**Built by Fatima Mumtaz** 🚀

*Last updated: February 2026*
