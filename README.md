# Junaid Hashir - Personal Portfolio Website

A modern, responsive, and high-performance personal portfolio website for **Junaid Hashir**, an Engineering student specializing in **Artificial Intelligence and Machine Learning (AIML)** at **AJ Institute of Engineering and Technology, Mangaluru**.

Built with **React**, **Vite**, **Tailwind CSS**, and **Lucide Icons**, featuring a premium dark theme, glassmorphic cards, smooth navigation, subtle technology-themed effects, and recruiter-ready presentation.

---

## 🌟 Key Features

- **Cyber & Futuristic Dark Theme**: Built with rich navy/black backgrounds (`#05070f`, `#0b1120`, `#0f172a`) and blue-purple-cyan gradient accents.
- **Glassmorphic UI**: Translucent glass-panel surfaces with fine borders, backdrop blurs, and soft radial glow effects.
- **100% Responsive**: Tailored fluid layouts for mobile, tablet, and desktop screens with an interactive hamburger navigation drawer.
- **Centralized Data File**: Easy customization via a single config file (`src/data/portfolioData.ts`).
- **Interactive Contact Experience**: Validated contact form that generates formatted `mailto:` links, plus a 1-click clipboard copy for email.
- **Functional Resume Download**: Pre-configured download button serving `/resume.pdf`.
- **Honest & Recruiter-Friendly Showcase**: Projects feature clear labels for sample placeholders until real repositories and live links are provided, avoiding fake claims.
- **Optimized & Accessible**: Zero broken image links (uses scalable vector tech illustrations), high contrast ratios, and semantic HTML5.

---

## 🚀 Quick Start Guide

### Prerequisites
Make sure you have **Node.js** (v18 or higher) and **npm** installed.

### 1. Installation
Navigate into the project folder and install dependencies:
```bash
cd junaid-hashir-portfolio
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open your browser and navigate to the local URL shown in your terminal (typically `http://localhost:5173`).

### 3. Build for Production
```bash
npm run build
```
This generates an optimized, minified production build in the `dist/` directory.

### 4. Preview the Production Build
```bash
npm run preview
```

---

## 📂 Project Structure

```text
junaid-hashir-portfolio/
├── public/
│   ├── favicon.svg             # Sleek branded SVG favicon
│   └── resume.pdf              # Downloadable resume template
├── src/
│   ├── components/
│   │   ├── About.tsx           # Bio, engineering focus & core traits
│   │   ├── Contact.tsx         # Contact form, direct mailto & copy buttons
│   │   ├── Education.tsx       # AJIET Mangaluru, CSE (AIML) credentials
│   │   ├── Footer.tsx          # Copyright, navigation, and socials
│   │   ├── Hero.tsx            # Hero greeting, CTAs, avatar & status pill
│   │   ├── Icons.tsx           # Scalable SVG icons (LinkedIn, GitHub)
│   │   ├── Navbar.tsx          # Glassmorphic header & mobile drawer
│   │   ├── Projects.tsx        # Projects grid with category filters & modal
│   │   ├── Skills.tsx          # 5 core skill cards with topic breakdowns
│   │   ├── TechBackground.tsx  # Ambient floating gradients & tech grid
│   │   └── WhatIDo.tsx         # 3 service cards (Web, Coding, Editing)
│   ├── data/
│   │   └── portfolioData.ts    # Centralized data source for easy updates
│   ├── App.tsx                 # Root layout assembling all components
│   ├── index.css               # Tailwind directives & glassmorphic utilities
│   ├── main.tsx                # React root mount
│   └── vite-env.d.ts           # TypeScript environment declarations
├── index.html                  # HTML entry point with meta tags & fonts
├── package.json                # Dependencies and scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Tailwind theme colors, fonts, animations
├── tsconfig.json               # TypeScript configuration
└── vite.config.ts              # Vite React configuration
```

---

## 🎨 How to Customize the Portfolio

### 1. Update Personal Information, Bio, and Links
Open [`src/data/portfolioData.ts`](./src/data/portfolioData.ts). You can update:
- Your name, titles, bio, and locations
- Your email address: `email: "junnijuniad3@gmail.com"`
- Your LinkedIn URL: `linkedIn: "https://www.linkedin.com/in/junaid-hashir-127180446"`
- Your GitHub profile URL

### 2. Add Your Photograph
1. Save your photo as `profile.jpg` inside the `public/` folder (`public/profile.jpg`).
2. Open [`src/components/Hero.tsx`](./src/components/Hero.tsx) and locate the avatar container around line 170.
3. Replace the placeholder icon with:
```tsx
<img 
  src="/profile.jpg" 
  alt="Junaid Hashir" 
  className="w-full h-full object-cover rounded-[13px]" 
/>
```

### 3. Upload Your Real Resume
1. Export your resume as a PDF.
2. Name it `resume.pdf` and place it directly inside the `public/` directory (replacing the existing template `public/resume.pdf`).
3. The "Download Resume" buttons on the Hero and Navigation bar will instantly download your real PDF.

### 4. Add Real Projects
Open [`src/data/portfolioData.ts`](./src/data/portfolioData.ts) and locate `SAMPLE_PROJECTS`. For each project you want to display:
```ts
{
  id: "project-unique-id",
  title: "Your Project Name",
  subtitle: "Machine Learning Model / Full Stack Web App",
  description: "A short 2-3 sentence description of what the project does and its results.",
  tags: ["Python", "TensorFlow", "React", "FastAPI"],
  category: "AIML", // or 'Web Development' or 'Creative'
  isPlaceholder: false, // Set to false to indicate a completed real project!
  githubUrl: "https://github.com/your-username/repo-name",
  liveUrl: "https://your-demo-url.vercel.app",
  accentColor: "from-blue-500 to-indigo-600",
}
```

### 5. Update Skills
Open [`src/data/portfolioData.ts`](./src/data/portfolioData.ts) and edit the `SKILL_CATEGORIES` array. You can add or remove topics under:
- `Artificial Intelligence & Machine Learning`
- `Website Creation`
- `Web Development`
- `Programming and Coding`
- `Sound and Video Editing`

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push this repository to your **GitHub** account.
2. Go to [vercel.com](https://vercel.com) and log in with GitHub.
3. Click **"Add New Project"** and import your repository.
4. Framework Preset: Select **Vite**.
5. Build Command: `npm run build` (detected automatically).
6. Output Directory: `dist` (detected automatically).
7. Click **Deploy**. Your portfolio will be live with an SSL certificate within seconds!

### Deploy to Netlify
1. Log in to [netlify.com](https://www.netlify.com).
2. Click **"Add new site"** &rarr; **"Import an existing project"**.
3. Select your GitHub repository.
4. Set:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **Deploy site**.

---

## 📄 License
This portfolio is created for **Junaid Hashir**. Feel free to use, adapt, and build upon it for academic and professional showcasing.
