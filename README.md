# Mohamed Jezan - Quantity Surveyor Portfolio

A professional one-page portfolio website built with **Next.js 14** and **Tailwind CSS** showcasing Mohamed Jezan's expertise as a Quantity Surveyor with 2.5 years of experience.

## 🌟 Features

- ✅ Modern, responsive design optimized for all devices
- ✅ Smooth scrolling navigation
- ✅ Professional construction-themed color palette (Navy, Gold, White)
- ✅ Interactive photo gallery with lightbox
- ✅ Contact form with mailto functionality
- ✅ Optimized for Dubai job market
- ✅ SEO-friendly structure

## 📋 Sections

1. **Hero** - Profile photo, introduction, and call-to-action buttons
2. **About** - Professional summary and core competencies
3. **Experience** - Work history at Nazeeha Construction with project details
4. **Responsibilities** - Key QS duties and professional activities
5. **Skills** - Technical skills grid with icons
6. **Work Photos** - Project photo gallery with lightbox modal
7. **Education** - Academic qualifications and certifications
8. **Contact** - Contact information and message form

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or higher
- npm or yarn package manager

### Installation

1. **Clone or download this project**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your profile photo**
   - Place your profile photo in `/public/profile.jpg`
   - Recommended size: 400x400px minimum
   - Format: JPG or PNG

4. **Add work photos**
   - Create folder: `/public/work/`
   - Add your project photos as:
     - `photo1.jpg`, `photo2.jpg`, etc. (up to photo8.jpg)
   - Recommended size: 800x600px
   - Photos can be: site visits, drawings, measurements, progress photos

5. **Add your CV**
   - Create folder: `/public/cv/`
   - Place your CV as: `Mohamed_Jezan_CV.pdf`

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
jezzanportfolio/
├── app/
│   ├── layout.jsx          # Root layout with metadata
│   ├── page.jsx            # Main page component
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.jsx          # Fixed navigation bar
│   ├── Hero.jsx            # Hero section with profile
│   ├── About.jsx           # About section
│   ├── Experience.jsx      # Work experience
│   ├── Responsibilities.jsx # QS responsibilities
│   ├── Skills.jsx          # Skills grid
│   ├── WorkPhotos.jsx      # Photo gallery
│   ├── Education.jsx       # Education section
│   ├── Contact.jsx         # Contact form
│   └── Footer.jsx          # Footer component
├── public/
│   ├── profile.jpg         # Your profile photo
│   ├── work/               # Project photos folder
│   │   ├── photo1.jpg
│   │   └── ...
│   └── cv/                 # CV folder
│       └── Mohamed_Jezan_CV.pdf
├── package.json
├── tailwind.config.js
└── next.config.js
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  navy: '#0A1A2F',    // Primary dark blue
  gold: '#F6C343',    // Accent gold
  lightgray: '#F2F4F7' // Light background
}
```

### Content

All text content can be edited directly in the component files:
- Personal info: `components/Hero.jsx`
- Experience: `components/Experience.jsx`
- Skills: `components/Skills.jsx`
- Education: `components/Education.jsx`
- Contact details: `components/Contact.jsx`

## 🌐 Deploy to Vercel

### Method 1: Deploy with Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

   Follow the prompts:
   - Set up and deploy: Yes
   - Which scope: Your account
   - Link to existing project: No
   - Project name: jezan-portfolio (or your choice)
   - Directory: ./ (press Enter)
   - Override settings: No

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### Method 2: Deploy via Vercel Dashboard

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

### Method 3: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_GITHUB_REPO_URL)

## 📱 Mobile Optimization

The website is fully responsive with breakpoints for:
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

## 🔧 Technologies Used

- **Next.js 14** - React framework with App Router
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Next/Image** - Optimized image component

## 📄 License

This project is free to use for personal portfolio purposes.

## 📞 Contact

**Mohamed Jezan**
- Email: mohamedjezan648@gmail.com
- Phone: +94 722 471 104
- LinkedIn: [mohamed-jezan](https://www.linkedin.com/in/mohamed-jezan-9b6857395)

---

Built with ❤️ for Dubai opportunities
