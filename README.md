<div align="center">
  <h2 align="center">✨ BrandFlow – Fullstack Next.js App</h2>
  <p align="center">
    The all-in-one AI-powered platform to generate, schedule, and publish brand-consistent social media content. Built with Next.js, Postgres, Prisma, Clerk, and modern AI APIs.
  </p>
  <br />
  <img src="https://img.shields.io/badge/-Next.js-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/-TailwindCSS-black?style=for-the-badge&logo=tailwind-css&logoColor=06B6D4" alt="Tailwind" />
  <img src="https://img.shields.io/badge/-Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=white" alt="Framer" />
  <img src="https://img.shields.io/badge/-Postgres-black?style=for-the-badge&logo=postgresql&logoColor=4169E1" alt="Postgres" />
  <img src="https://img.shields.io/badge/-Prisma-black?style=for-the-badge&logo=prisma&logoColor=2D3748" alt="Prisma" />
  <img src="https://img.shields.io/badge/-Clerk-black?style=for-the-badge&logo=clerk&logoColor=white" alt="Clerk" />
  <img src="https://img.shields.io/badge/-OpenAI-black?style=for-the-badge&logo=openai&logoColor=white" alt="OpenAI" />
  <img src="https://img.shields.io/badge/-Gemini-black?style=for-the-badge&logo=google&logoColor=white" alt="Gemini" />
  <img src="https://img.shields.io/badge/-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</div>

---

## 📋 Table of Contents

- [✨ Introduction](#introduction)
- [⚙️ Tech Stack](#tech-stack)
- [📂 Project Structure](#project-structure)
- [🤸 Quick Start](#quick-start)
- [📜 License](#license)

---

<a name="introduction"></a>

## ✨ Introduction

**BrandFlow** is a full-stack Next.js platform that helps brands and creators:

- Generate AI-powered social media posts (using **OpenAI** & **Gemini**).
- Manage, schedule, and publish content across platforms.
- Analyze campaigns and keep brand consistency.
- Authenticate securely with **Clerk**.

---

<a name="tech-stack"></a>

## ⚙️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + Framer Motion
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Auth:** Clerk
- **AI Generation:** OpenAI & Gemini APIs
- **Deployment:** Vercel

---

<a name="project-structure"></a>

## 📂 Project Structure

```
/app
├── (auth)/ # Auth routes (sign-in, sign-up) handled by Clerk
│ ├── sign-in/
│ └── sign-up/
│
├── (main)/ # Core application routes after login
│ ├── dashboard/
│ ├── scheduler/
│ ├── campaigns/
│ └── analytics/
│
├── layout.tsx # Global layout
└── page.tsx # Landing page (marketing site)
/actions # Server actions (CRUD, AI calls, etc.)
/lib # Utilities, helpers, configs
/prisma # Prisma schema + migrations
/components # Reusable UI components
```

<a name="quick-start"></a>

## 🤸 Quick Start

### **Prerequisites**

Make sure you have installed:

    •	Node.js (>=18)
    •	pnpm / npm / yarn
    •	PostgreSQL

### **Setup Environment**

Create a `.env` file:

```bash
DATABASE_URL="postgresql://user:password@localhost:5432/brandflow"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-clerk-key"
CLERK_SECRET_KEY="your-clerk-secret"
OPENAI_API_KEY="your-openai-key"
GEMINI_API_KEY="your-gemini-key"
```

### **Install Dependencies**

```bash
pnpm install
```

### **Generate Prisma Client & Migrate**

```bash
pnpm prisma migrate dev
```

### **Run Development Server**

```bash
pnpm dev
```

### **Access the App**

Visit http://localhost:3000 🎉

## 📜 License

MIT License – free to use, modify, and distribute with attribution.
