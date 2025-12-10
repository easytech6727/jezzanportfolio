# Quick Setup Guide

Follow these steps to get your portfolio running:

## ⚡ Quick Start (5 minutes)

### 1. Install Dependencies
```powershell
npm install
```

### 2. Add Your Photos

**Profile Photo:**
- Add your photo as: `public/profile.jpg`
- Size: 400x400px minimum
- Format: JPG or PNG

**Work Photos:**
- Create folder: `public/work/`
- Add 8 photos named: `photo1.jpg` to `photo8.jpg`
- Size: 800x600px recommended
- Can be: site visits, drawings, documentation, progress photos

**CV/Resume:**
- Create folder: `public/cv/`
- Add your CV as: `Mohamed_Jezan_CV.pdf`

### 3. Run Development Server
```powershell
npm run dev
```

Open: http://localhost:3000

### 4. Customize Content (Optional)

Edit these files to update your information:
- `components/Hero.jsx` - Name, title, tagline
- `components/Contact.jsx` - Phone, email, LinkedIn
- `components/Experience.jsx` - Projects and dates
- `components/Education.jsx` - Degrees and institutions

### 5. Deploy to Vercel

See `DEPLOYMENT.md` for detailed instructions.

Quick deploy:
```powershell
npm install -g vercel
vercel login
vercel --prod
```

## 📁 Required Files Structure

```
public/
├── profile.jpg              ← Your profile photo
├── work/
│   ├── photo1.jpg          ← Project photo 1
│   ├── photo2.jpg          ← Project photo 2
│   ├── photo3.jpg          ← Project photo 3
│   ├── photo4.jpg          ← Project photo 4
│   ├── photo5.jpg          ← Project photo 5
│   ├── photo6.jpg          ← Project photo 6
│   ├── photo7.jpg          ← Project photo 7
│   └── photo8.jpg          ← Project photo 8
└── cv/
    └── Mohamed_Jezan_CV.pdf ← Your CV/Resume
```

## 🎨 Color Scheme

- **Navy**: #0A1A2F (Primary)
- **Gold**: #F6C343 (Accent)
- **White**: #FFFFFF
- **Light Gray**: #F2F4F7

## ✅ Checklist

- [ ] Dependencies installed (`npm install`)
- [ ] Profile photo added
- [ ] Work photos added (8 photos)
- [ ] CV/Resume added
- [ ] Development server running (`npm run dev`)
- [ ] Site tested on http://localhost:3000
- [ ] Contact info updated
- [ ] Ready to deploy!

## 🚀 Deploy When Ready

1. Push to GitHub
2. Import to Vercel
3. Deploy automatically
4. Share your portfolio URL!

See `DEPLOYMENT.md` for complete deployment guide.

---

Need help? Check `README.md` for full documentation.
