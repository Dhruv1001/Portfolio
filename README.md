# Web3 Portfolio — Next.js 14

A dark, futuristic portfolio website for a Web3 & Frontend Developer. Built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the dev server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css        # Global styles & CSS variables
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main page (assembles all sections)
│
├── components/
│   ├── Cursor.tsx          # Custom cursor + trailing ring
│   ├── ParticleCanvas.tsx  # Animated particle background
│   ├── Nav.tsx             # Sticky navigation
│   ├── Hero.tsx            # Hero section with stats counter
│   ├── About.tsx           # About + blockchain expertise card
│   ├── Skills.tsx          # 6 animated skill cards
│   ├── Projects.tsx        # 4 featured project cards
│   ├── Contact.tsx         # Contact form + social links
│   └── Footer.tsx          # Footer
│ 
├── public/                 # Static assets (add your images here)
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🎨 Customization

### Change your name / branding
Edit `components/Nav.tsx` → update `DEV.EXE`  
Edit `app/layout.tsx` → update `metadata.title` and `metadata.description`  
Edit `components/Footer.tsx` → update footer text

### Update your stats
Edit `components/Hero.tsx` → `stats` array (count, label)

### Update your projects
Edit `components/Projects.tsx` → `projects` array  
Each project has: `title`, `chain`, `desc`, `status`, `tags`, `liveUrl`, `githubUrl`

### Update your skills
Edit `components/Skills.tsx` → `skills` array

### Update contact info
Edit `components/Contact.tsx` → `socials` array  
Replace `href` values with real URLs and update `value` text

### Swap blockchain expertise
Edit `components/About.tsx` → `chains` array

---

## 🌐 Deployment

### Deploy to Vercel (recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Upload the `.next` folder or connect your repo to Netlify
```

---

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 | React framework with App Router |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Canvas API | Particle background animation |
| CSS Variables | Theming & dark futuristic palette |
| Google Fonts | Orbitron + JetBrains Mono + Space Grotesk |

---

## 🎨 Color Palette

| Variable | Value | Use |
|----------|-------|-----|
| `--cyan` | `#00f5ff` | Primary accent, glow |
| `--blue` | `#0066ff` | Secondary accent |
| `--purple` | `#7b2fff` | Tertiary accent |
| `--dark` | `#020b18` | Page background |
| `--text` | `#c8e6f5` | Body text |
| `--muted` | `#5a8aaa` | Secondary text |
| `--border` | `rgba(0,245,255,0.15)` | Borders |
