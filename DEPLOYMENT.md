# DEPLOYMENT GUIDE - Vercel

This guide will walk you through deploying your portfolio to Vercel (recommended hosting platform for Next.js).

## 🌟 Why Vercel?

- ✅ **Free tier** with generous limits
- ✅ **Automatic HTTPS** and SSL certificates
- ✅ **Lightning-fast CDN** globally
- ✅ **Zero configuration** for Next.js
- ✅ **Automatic deployments** from GitHub
- ✅ **Custom domain support**

---

## 📋 Pre-Deployment Checklist

Before deploying, ensure you have:

- [ ] Added your profile photo to `/public/profile.jpg`
- [ ] Added work photos to `/public/work/photo1.jpg` through `photo8.jpg`
- [ ] Added your CV to `/public/cv/Mohamed_Jezan_CV.pdf`
- [ ] Tested the site locally with `npm run dev`
- [ ] Updated contact information in `components/Contact.jsx`
- [ ] Verified all links and content

---

## 🚀 Method 1: Deploy via GitHub (Recommended)

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and login
2. Click the **+** icon → **New repository**
3. Repository name: `jezan-portfolio` (or any name you prefer)
4. Choose **Public** or **Private**
5. Click **Create repository**

### Step 2: Push Your Code to GitHub

Open PowerShell in your project folder and run:

```powershell
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - Mohamed Jezan Portfolio"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/jezan-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 3: Deploy to Vercel

1. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click **Sign Up** or **Login**
   - Choose **Continue with GitHub**

2. **Import Project**
   - Click **Add New...** → **Project**
   - Click **Import** next to your repository
   - If you don't see it, click **Adjust GitHub App Permissions**

3. **Configure Project**
   - **Project Name**: `jezan-portfolio` (or customize)
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `.next` (auto-filled)
   - Click **Deploy**

4. **Wait for Deployment**
   - Vercel will build and deploy your site (1-2 minutes)
   - You'll get a live URL like: `jezan-portfolio.vercel.app`

5. **View Your Site**
   - Click the preview or visit the URL
   - Your portfolio is now live! 🎉

### Step 4: Automatic Updates

Now whenever you push changes to GitHub:

```powershell
git add .
git commit -m "Update content"
git push
```

Vercel will automatically rebuild and redeploy your site!

---

## 🚀 Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI

```powershell
npm install -g vercel
```

### Step 2: Login to Vercel

```powershell
vercel login
```

Follow the prompts to authenticate.

### Step 3: Deploy

```powershell
# First deployment (preview)
vercel

# Production deployment
vercel --prod
```

Answer the prompts:
- **Set up and deploy**: Yes
- **Which scope**: (Choose your account)
- **Link to existing project**: No
- **What's your project's name**: jezan-portfolio
- **In which directory is your code located**: ./ (just press Enter)
- **Want to override the settings**: No

Your site is now live!

---

## 🌐 Method 3: Drag & Drop Deploy

### Step 1: Build Your Project

```powershell
npm run build
```

### Step 2: Deploy

1. Go to [vercel.com](https://vercel.com)
2. Login and go to dashboard
3. Click **Add New...** → **Project**
4. Drag and drop the `.next` folder

**Note**: This method doesn't support automatic updates.

---

## 🎨 Custom Domain Setup

### Add Your Own Domain

1. **Purchase a domain** (from Namecheap, GoDaddy, etc.)

2. **In Vercel Dashboard**:
   - Go to your project
   - Click **Settings** → **Domains**
   - Click **Add**
   - Enter your domain: `mohamedjezan.com`
   - Click **Add**

3. **Configure DNS**:
   Vercel will show DNS records to add. In your domain provider:
   
   **Option A - CNAME (Recommended)**:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

   **Option B - A Record**:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

4. **Wait for DNS propagation** (5 minutes - 48 hours)

5. **SSL Certificate** is automatically configured!

---

## 📊 Post-Deployment Tips

### Monitor Your Site

- **Analytics**: Enable in Vercel Dashboard → Analytics
- **Speed Insights**: Check performance metrics
- **Logs**: View deployment and runtime logs

### SEO Optimization

After deployment, submit your site to:
- [Google Search Console](https://search.google.com/search-console)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)

### Share Your Portfolio

Your live URL can be shared:
- On LinkedIn profile
- In email signatures  
- On your CV/resume
- In job applications

---

## 🔧 Troubleshooting

### Build Fails

**Error: "Module not found"**
```powershell
# Clear node_modules and reinstall
rm -r node_modules
npm install
```

**Error: "Image optimization error"**
- Ensure images exist in `/public/` folder
- Check image paths are correct
- Verify image formats (JPG, PNG, WebP)

### Site Not Updating

```powershell
# Force redeploy
vercel --force

# Or clear cache and redeploy
vercel --prod --force
```

### Custom Domain Not Working

- Wait 24-48 hours for DNS propagation
- Verify DNS records in domain provider
- Check Vercel domain status
- Try clearing browser cache

---

## 📈 Performance Optimization

After deployment, run these checks:

1. **Lighthouse Score**
   - Open DevTools → Lighthouse
   - Run audit
   - Aim for 90+ in all categories

2. **Image Optimization**
   - Compress images before upload
   - Use WebP format when possible
   - Keep images under 500KB

3. **Load Speed**
   - Test on [PageSpeed Insights](https://pagespeed.web.dev/)
   - Target: <3 seconds load time

---

## 💡 Next Steps

1. ✅ Deploy your site to Vercel
2. ✅ Test all sections and links
3. ✅ Add your custom domain (optional)
4. ✅ Share on LinkedIn and resume
5. ✅ Monitor analytics and applications
6. ✅ Keep content updated

---

## 🆘 Need Help?

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Documentation**: [nextjs.org/docs](https://nextjs.org/docs)
- **GitHub Issues**: Create an issue in your repository

---

**Good luck with your job search in Dubai! 🚀**

Your portfolio is now live and ready to impress potential employers.
