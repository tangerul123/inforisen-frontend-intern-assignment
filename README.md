# Next.js landing page SMM panel

A modern and fully responsive SMM Panel landing page developed as part of the Frontend Developer Intern technical assignment for Inforisen.

The project was implemented based on the provided Figma design with a focus on accurate layout, spacing, typography, colors, responsiveness, reusable components, and smooth micro-interactions.

## Live Demo

[View Live Demo](https://smm-panel-landing-rouge.vercel.app/)

## GitHub Repository

[View Source Code](https://github.com/tangerul123/inforisen-frontend-intern-assignment)

---

## Project Overview

This project is a single-page SMM Panel landing page designed to present social media marketing services in a modern and engaging way.

The implementation focuses on recreating the provided Figma design while maintaining clean, reusable, and maintainable React/Next.js components.

---

## Features

- Pixel-accurate implementation of the provided Figma design
- Fully responsive design
- Desktop, laptop, tablet, and mobile support
- Responsive navigation bar
- Mobile navigation menu
- Hero section with call-to-action buttons
- Social media statistics section
- Social media services section
- Platform/service navigation tabs
- Step-by-step working process section
- Multiple payment methods section
- Social media growth section
- Advantages/features section
- FAQ accordion
- CTA banner section
- Responsive footer
- Smooth animations and micro-interactions
- Reusable React components
- Organized project structure
- Optimized local assets
- Production-ready Next.js build

---

## Tech Stack

- Next.js
- React
- JavaScript
- CSS
- Tailwind css
- HTML
- Vercel
- Motion
- icos

---

## Project Structure

```text
inforisen-frontend-intern-assignment/
│
├── app/
│   ├── layout.js
│   ├── page.js
│   ├── globals.css
│   └── favicon.ico
│
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── MobileMenu.jsx
│   │   └── Footer.jsx
│   │
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── StatsBar.jsx
│   │   ├── Services.jsx
│   │   ├── WorkingProcess.jsx
│   │   ├── PaymentMethods.jsx
│   │   ├── GrowthTimeline.jsx
│   │   ├── Advantages.jsx
│   │   ├── Faq.jsx
│   │   └── CtaBanner.jsx
│   │
│   └── ui/
│       ├── Button.jsx
│       ├── Container.jsx
│       ├── SectionHeading.jsx
│       ├── Counter.jsx
│       ├── ServiceTab.jsx
│       ├── StepCard.jsx
│       ├── AdvantageCard.jsx
│       ├── FaqItem.jsx
│       └── Reveal.jsx
│
├── data/
│   ├── navigation.js
│   ├── stats.js
│   ├── services.js
│   ├── steps.js
│   ├── payments.js
│   ├── growth.js
│   ├── advantages.js
│   ├── faqs.js
│   └── footer.js
│
├── hooks/
│   ├── useCountUp.js
│   └── useScrollHeader.js
│
├── lib/
│   └── motion.js
│
├── public/
│   ├── images/
│   ├── icons/
│   └── logo.svg
│
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
└── README.md

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- Node.js 18 or later
- npm

You can verify your Node.js and npm versions using:

```bash
node -v
npm -v

1. Clone the repository

git clone https://github.com/tangerul123/inforisen-frontend-intern-assignment.git

2. Navigate to the project directory

cd inforisen-frontend-intern-assignment

3. Install dependencies

npm install

Run the Development Server

Start the local development server: npm run dev

Production Build

Create an optimized production build: npm run build