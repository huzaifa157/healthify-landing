# Healthify - Healthy Meals Landing Page

> A complete, production-grade frontend implementation of the **Healthify** Healthy Meals landing page, built with **React Native for Web**, **Tailwind CSS**, and modern web standards.

[![React Native for Web](https://img.shields.io/badge/React%20Native%20for%20Web-0.19.13-blue)](https://necolas.github.io/react-native-web/)
[![NativeWind](https://img.shields.io/badge/NativeWind-4.2.7-06B6D4)](https://www.nativewind.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6)](https://www.typescriptlang.org/)
[![Live Demo](https://img.shields.io/badge/Vercel-Live%20Demo-brightgreen)](https://healthify-landing.vercel.app/)

> 🔗 **Live Demo URL:** [https://healthify-landing.vercel.app/](https://healthify-landing.vercel.app/)  
> 📦 **GitHub Repository:** [https://github.com/huzaifa157/healthify-landing](https://github.com/huzaifa157/healthify-landing)

---

## 🥗 Project Overview

Healthify is a premium healthy food subscription service based in Dubai, UAE. This landing page recreates the exact UI design and interactive experience required by the Frontend Development Assessment, featuring:

- **Exact Navigation Links**: `Home`, `About Us`, `Our Services`, `Advantages`, `Growth Plans`, `Blog`, `Contact Us`.
- **Exact Trust Statistics**: `1M+` Meals Delivered, `30K+` Happy Customers, `4.8/5` Customer Satisfaction, `550+` Corporate Clients.
- **Hero Section**: With floating achievement badges (*"Good Food Brighter You"*, *"Nourishing Lives Daily"*, *"Nutritious Food Everyday"*).
- **About Section**: Highlighting Dubai culinary preparation, quality badges, and layered meal visual.
- **Meal Plans & Services**: 4 interactive cards (*Ready-to-eat*, *Customized*, *Weight Management*, *High Protein*).
- **Advantages Grid**: 4 feature benefit cards (*Premium Quality*, *Health Focused*, *Convenient Delivery*, *Flexible Plans*).
- **Pricing Plans**: 3 weekly subscription tiers (*Essential AED 299*, *Balanced AED 499 [Most Popular]*, *Performance AED 699*) + 4th highlight photo card (*"Invest in a Healthier You"*).
- **How It Works**: 3-step numbered flow.
- **Customer Testimonials**: 5-star customer reviews from UAE clients (*Dubai, Abu Dhabi, Sharjah*).
- **Interactive FAQ Accordion**: Expandable/collapsible answers to common questions.
- **High-Converting CTA Banner**: Lush dark-green banner leading to plans.
- **Comprehensive Footer**: Dubai contact details, social links, full navigation, and floating WhatsApp support widget.

---

## 🛠️ Technology Stack

- **Core**: React 18, React Native for Web (`react-native-web`)
- **Styling**: NativeWind (`nativewind` v4.2) + Tailwind CSS (with bespoke Healthify color tokens)
- **Icons**: Lucide Icons (`lucide-react`)
- **Build Tool**: Vite (blazing fast HMR and optimized production bundles)
- **Language**: TypeScript (strict type checking & modular components)
- **Deployment**: Vercel (pre-configured with `vercel.json`)

---

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js (v18+) and npm installed:
```bash
node -v
npm -v
```

### Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/huzaifa157/healthify-landing.git
cd healthify-landing
npm install
```

### Running Locally
Start the development server:
```bash
npm run dev
```
Open your browser at `http://localhost:5173` to explore the website.

### Building for Production
Create an optimized production build:
```bash
npm run build
```
This generates the static web build in the `dist/` directory.

### Previewing the Production Build
```bash
npm run preview
```

---

## 🌐 Vercel Deployment

This project is pre-configured for automated zero-configuration deployment to **Vercel**:

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete Healthy Meals landing page implementation"
   git push origin main
   ```
2. Go to [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New Project"**.
3. Import the `healthify-landing` repository.
4. Keep the default settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Your site will be live on Vercel in seconds!

---

## 📱 Responsive Breakpoints Tested

- **Desktop (1280px - 1440px+)**: Full multi-column grid, floating badges, fixed navigation.
- **Tablet (768px - 1024px)**: 2-column balanced layouts, adjusted font scaling.
- **Mobile (320px - 480px)**: 1-column stacked cards, mobile drawer menu, zero horizontal overflow.

---

## 📋 Assessment Checklist Status

- [x] Full page implemented (all 12 sections + WhatsApp button)
- [x] Responsive layout on desktop, tablet, and mobile
- [x] No required assets missing or broken
- [x] Interactive FAQ accordion with expand/collapse states
- [x] Clean component structure and React Native Web implementation
- [x] GitHub repository with clean commits and README
- [x] Vercel configuration ready for deployment

---

## 📄 License
This project was built for the Frontend Development Assessment. All photography assets are royalty-free from Unsplash.
