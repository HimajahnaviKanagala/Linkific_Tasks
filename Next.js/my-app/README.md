# 🚀 Next.js Fundamentals App (App Router + TypeScript + Tailwind)

A modern **Next.js application** built using the **App Router**, demonstrating file-based routing, server & client components, dynamic routes, API routes, and optimized UI with Tailwind CSS.

---

## 🎯 Project Goal

The goal of this project is to understand and implement **Next.js fundamentals**, including routing, rendering strategies, and full-stack capabilities.

---

## ⚙️ Tech Stack

* ⚛️ Next.js (App Router)
* 🟦 TypeScript
* 🎨 Tailwind CSS
* 🌐 Fetch API (Server-side data fetching)

---

## ✨ Features

* ✅ File-based routing (App Router)
* ✅ Dynamic routes (`/blog/[id]`)
* ✅ Server Components (default)
* ✅ Client Components (`"use client"`)
* ✅ Server-side data fetching
* ✅ API routes (backend inside Next.js)
* ✅ Image optimization (`next/image`)
* ✅ Navigation with `next/link`
* ✅ SEO metadata configuration
* ✅ Responsive UI with Tailwind CSS
* ✅ Interactive Counter component

---

## 📁 Folder Structure

```bash
src/
├── app/
│   ├── layout.tsx          # Root layout (global UI)
│   ├── page.tsx           # Home page
│   ├── about/
│   │   └── page.tsx       # About page
│   ├── blog/
│   │   ├── page.tsx       # Blog list (server fetch)
│   │   └── [id]/
│   │       └── page.tsx   # Dynamic blog page
│   ├── api/
│   │   └── posts/
│   │       └── route.ts   # API route
│
├── components/
│   ├── Navbar.tsx         # Navigation bar
│   └── Counter.tsx        # Client component (useState)
```

---

## 🧠 Key Concepts Implemented

### 🔹 1. File-Based Routing

Routes are created using folders:

* `/` → `app/page.tsx`
* `/about` → `app/about/page.tsx`
* `/blog` → `app/blog/page.tsx`
* `/blog/[id]` → dynamic route

---

### 🔹 2. Dynamic Routing

```ts
app/blog/[id]/page.tsx
```

Access route parameters:

```ts
const { id } = await params;
```

---

### 🔹 3. Server Components

* Default in Next.js
* Used for data fetching
* Improves performance and SEO

---

### 🔹 4. Client Components

```ts
"use client";
```

Used for:

* State (`useState`)
* Events (`onClick`)

Example: Counter component

---

### 🔹 5. Data Fetching (Server-Side)

```ts
const res = await fetch("https://jsonplaceholder.typicode.com/posts");
```

* Runs on server
* Faster rendering
* SEO friendly

---

### 🔹 6. API Routes

```ts
app/api/posts/route.ts
```

Acts as backend inside Next.js:

```ts
export async function GET() {
  return Response.json([...]);
}
```

---

### 🔹 7. Image Optimization

```tsx
import Image from "next/image";
```

* Automatic optimization
* Lazy loading

---

### 🔹 8. Navigation

```tsx
import Link from "next/link";
```

* Client-side navigation
* No full page reload

---

### 🔹 9. SEO Metadata

```ts
export const metadata = {
  title: "Next.js App",
  description: "Learning Next.js",
};
```

---

## 🔄 Rendering Methods

* 🟢 SSG (Static Site Generation)
* 🔵 SSR (Server-Side Rendering)
* 🟡 ISR (Incremental Static Regeneration)
* 🔴 CSR (Client-Side Rendering)

---

## 🧪 Deliverables Covered

* ✔ Multiple pages
* ✔ File-based routing
* ✔ Dynamic routes `[id]`
* ✔ Server and Client components
* ✔ Data fetching examples
* ✔ API routes implemented
* ✔ Image optimization used
* ✔ SEO metadata configured

---

## ▶️ Getting Started

### 1. Create Project

```bash
npx create-next-app@latest my-app
```

Select:

* TypeScript ✅
* Tailwind CSS ✅
* App Router ✅

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Run Development Server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 🎨 UI Highlights

* Clean layout with Navbar
* Responsive design
* Blog cards UI
* Gradient backgrounds
* Interactive Counter

---

## 💡 Key Learnings

* Next.js simplifies routing and full-stack development
* Server Components improve performance
* Client Components handle interactivity
* Built-in features reduce boilerplate
* SEO is much easier compared to React

---




