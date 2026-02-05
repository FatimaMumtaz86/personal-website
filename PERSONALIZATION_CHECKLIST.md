# ✅ PERSONALIZATION CHECKLIST FOR FATIMA MUMTAZ

## 🎯 MUST DO BEFORE DEPLOYMENT

### 1. Hero Section (`/frontend/components/sections/Hero.tsx`)
- [ ] Line 39-41: Change "Your Name" to "Fatima Mumtaz"
- [ ] Line 50-52: Update role/title if needed
- [ ] Line 60-63: Write your professional statement
- [ ] Line 96: Add your GitHub URL
- [ ] Line 103: Add your LinkedIn URL

### 2. About Section (`/frontend/components/sections/About.tsx`)
- [ ] Line 21-41: Replace with YOUR story
- [ ] Line 44-56: Verify location (already correct: Pakistan)

### 3. Skills Section (`/frontend/components/sections/Skills.tsx`)
- [ ] Line 8-29: Update with YOUR actual skills
- [ ] Remove skills you don't have
- [ ] Add skills you're learning

### 4. Projects Section (`/frontend/components/sections/Projects.tsx`)
- [ ] Line 8-47: Replace ALL projects with YOUR projects
- [ ] Add project titles, descriptions, tech stack
- [ ] Add GitHub links
- [ ] Add demo links (if available)

### 5. Experience Section (`/frontend/components/sections/Experience.tsx`)
- [ ] Line 7-39: Add YOUR internships/experience
- [ ] If no experience yet: Add projects or remove section

### 6. Education Section (`/frontend/components/sections/Education.tsx`)
- [ ] Line 8-18: Add your CGPA (already has Bahria University)
- [ ] Line 21-36: Add YOUR achievements or remove this part

### 7. Contact Section (`/frontend/components/sections/Contact.tsx`)
- [ ] Line 89-96: Change to YOUR real email
- [ ] Line 105: Verify location (already correct)

### 8. Header (`/frontend/components/Header.tsx`)
- [ ] Line 26-28: Change "YN" to "FM" (your initials)

### 9. Footer (`/frontend/components/Footer.tsx`)
- [ ] Line 7-12: Add ALL your social media links
- [ ] Line 21: Change "Your Name" to "Fatima Mumtaz"

### 10. SEO Metadata (`/frontend/app/layout.tsx`)
- [ ] Line 17: Change title to "Fatima Mumtaz | AI Engineer"
- [ ] Line 18: Update description
- [ ] Line 20: Add relevant keywords
- [ ] Line 21: Change author name
- [ ] Line 23-24: Update OpenGraph data

---

## 🗄️ DATABASE SETUP

### MySQL Database
- [ ] Create database: `CREATE DATABASE portfolio_db;`
- [ ] Note your MySQL username (usually: root)
- [ ] Note your MySQL password

### Backend Configuration
- [ ] Copy `.env.example` to `.env` in `/backend/` folder
- [ ] Update DATABASE_URL with your MySQL credentials
- [ ] Update FRONTEND_URL (keep localhost:3000 for now)

---

## 🧪 TESTING CHECKLIST

### Local Testing
- [ ] Frontend runs: `cd frontend && npm run dev`
- [ ] Backend runs: `cd backend && python main.py`
- [ ] Visit: http://localhost:3000
- [ ] All sections load properly
- [ ] All links work (GitHub, LinkedIn, etc.)
- [ ] Contact form submits successfully
- [ ] Check database: messages appear in MySQL
- [ ] Mobile responsive (test on phone or dev tools)

---

## 🚀 DEPLOYMENT CHECKLIST

### Before Deploying
- [ ] All personalization done
- [ ] All links tested
- [ ] Contact form works locally
- [ ] No placeholder text remaining
- [ ] Real email added
- [ ] Real social media links added
- [ ] Projects are YOUR actual projects

### Frontend (Vercel)
- [ ] Push code to GitHub
- [ ] Create Vercel account
- [ ] Deploy from GitHub
- [ ] Get deployment URL: `https://?????.vercel.app`
- [ ] Test deployed site

### Backend (Railway)
- [ ] Create Railway account
- [ ] Deploy from GitHub
- [ ] Add environment variables
- [ ] Get deployment URL: `https://?????.up.railway.app`
- [ ] Test API: `https://?????.up.railway.app/docs`

### Final Connection
- [ ] Update API URL in Contact.tsx (line 24)
- [ ] Change from localhost to Railway URL
- [ ] Redeploy frontend (auto on git push)
- [ ] Test contact form on live site

---

## 🎨 OPTIONAL ENHANCEMENTS

Later, you can add:
- [ ] Your photo in Hero section
- [ ] Blog section
- [ ] Certificates section
- [ ] Testimonials
- [ ] Resume download button
- [ ] Project images/screenshots
- [ ] Analytics (Google Analytics)
- [ ] Custom domain

---

## 📝 NOTES

- Save this file for reference
- Don't rush - take time to personalize properly
- Test everything locally before deploying
- Keep your GitHub repo private if projects are sensitive
- Update regularly with new projects and experience

---

**Created for: Fatima Mumtaz**
**Date: February 2026**
**Status: Ready to personalize** ✨
