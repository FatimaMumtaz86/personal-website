# 🔥 QUICK START GUIDE - Fatima Mumtaz

## 📍 WHERE TO EDIT YOUR INFO

### YOUR NAME (3 places)
1. `/frontend/components/sections/Hero.tsx` - Line 39
2. `/frontend/components/Footer.tsx` - Line 21  
3. `/frontend/app/layout.tsx` - Lines 17, 21, 23

### YOUR EMAIL (2 places)
1. `/frontend/components/sections/Contact.tsx` - Lines 89, 92
2. `/frontend/components/Footer.tsx` - Line 11

### YOUR SOCIAL MEDIA (2 places)
1. `/frontend/components/sections/Hero.tsx` - Lines 96, 103
2. `/frontend/components/Footer.tsx` - Lines 7-11

### YOUR STORY
1. `/frontend/components/sections/About.tsx` - Lines 21-41

### YOUR SKILLS
1. `/frontend/components/sections/Skills.tsx` - Lines 8-29

### YOUR PROJECTS  
1. `/frontend/components/sections/Projects.tsx` - Lines 8-47

### YOUR EXPERIENCE
1. `/frontend/components/sections/Experience.tsx` - Lines 7-39

### YOUR EDUCATION
1. `/frontend/components/sections/Education.tsx` - Lines 8-18

---

## ⚡ SUPER QUICK COMMANDS

### Run Everything Locally
```bash
# Terminal 1 - Frontend
cd frontend
npm install
npm run dev

# Terminal 2 - Backend  
cd backend
pip install -r requirements.txt
python main.py
```

### Deploy to Vercel (Frontend)
```bash
git init
git add .
git commit -m "Initial commit"
git push

# Then go to vercel.com → New Project → Import from GitHub
```

### Deploy to Railway (Backend)
```bash
# Go to railway.app → New Project → Deploy from GitHub
# Add these environment variables in Railway dashboard:
# DATABASE_URL (Railway provides this)
# FRONTEND_URL=https://your-vercel-app.vercel.app
```

---

## 🎯 MOST IMPORTANT FILES

1. **Hero.tsx** - First thing visitors see
2. **About.tsx** - Your story  
3. **Projects.tsx** - Your work
4. **Contact.tsx** - How to reach you
5. **layout.tsx** - SEO/metadata

Edit these 5 files first!

---

## 🆘 EMERGENCY TROUBLESHOOTING

### Frontend won't start
```bash
cd frontend
rm -rf node_modules .next
npm install
npm run dev
```

### Backend error
```bash
cd backend
# Check .env file has correct DATABASE_URL
python main.py
```

### Database error
```bash
mysql -u root -p
CREATE DATABASE portfolio_db;
# Update .env with correct password
```

---

## 📞 NEED HELP?

1. Read the main README.md
2. Check PERSONALIZATION_CHECKLIST.md
3. Google the error message
4. Check browser console (F12)
5. Check backend logs in terminal

---

**You got this Fatima! 🚀**
