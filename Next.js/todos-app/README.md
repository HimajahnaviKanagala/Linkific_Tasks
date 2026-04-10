# 📌Todo App (Next.js + NextAuth + Supabase)

A full-stack multi-user Todo application built using Next.js 14 App Router, NextAuth authentication, and Supabase database with Row Level Security (RLS).

---

## 🚀 Features

- GitHub Authentication (NextAuth)
- Manual Login (Credentials + Supabase users)
- User-specific todos
- Create / Read / Update / Delete todos
- Supabase PostgreSQL database
- Row Level Security (RLS)
- Next.js 14 App Router
- Tailwind CSS SaaS-style UI

---

## 🧰 Tech Stack

- Next.js 14
- TypeScript
- NextAuth.js
- Supabase
- Tailwind CSS
- React Hooks

---

## 📁 Project Structure

app/
 ├── api/
 │    └── todos/
 │         └── route.ts
 ├── login/
 │    └── page.tsx
 ├── dashboard/
 │    └── page.tsx
 ├── layout.tsx
 ├── page.tsx

components/
 ├── Navbar.tsx
 ├── TodoItem.tsx
 ├── Login.tsx

hooks/
 ├── useTodos.ts
 ├── useFetch.ts

lib/
 ├── auth.ts
 ├── supabase.ts

types/
 ├── Todo.ts

---

## ⚙️ Installation

### 1. Install dependencies

npm install

---

### 2. Setup environment variables

Create `.env.local`

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret

GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key

---

### 3. Create Supabase table

create table todos (
  id uuid primary key default uuid_generate_v4(),
  text text,
  completed boolean default false,
  user_id uuid,
  created_at timestamp default now()
);

---

### 4. Enable RLS

alter table todos enable row level security;

---

### 5. Create policy

create policy "Users can manage their todos"
on todos
for all
using (true)
with check (true);

---

## 🔐 Authentication Flow

GitHub Login:
- Uses GitHub OAuth
- Returns session with user.id

Credentials Login:
- Checks Supabase users table
- Creates user if not exists
- Returns session with user.id

---

## 📡 API Routes

GET    → Fetch user todos  
POST   → Create todo  
PUT    → Update todo  
DELETE → Delete todo  

---

## 🧠 Key Learnings

- Next.js App Router
- Authentication (NextAuth)
- Supabase integration
- Row Level Security (RLS)
- Server + Client components
- API routes
- Custom hooks

---

## 🎨 UI Features

- SaaS-style dark UI
- Responsive layout
- Sidebar navigation
- Clean dashboard design

---

## ▶️ Run Project

npm run dev

Open:
http://localhost:3000

---

