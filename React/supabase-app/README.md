# 🚀 Supabase React App (Auth + Todo + Blog)

## 📌 Overview

This project is a full-stack React application integrated with Supabase. It includes authentication, database operations using PostgreSQL, real-time features, and file handling.

---

## ✨ Features

### 🔐 Authentication

* Email & Password Login
* User session management
* Protected routes

---

### ✅ Todo Module

* Add todos
* View todos (user-specific)
* Delete todos
* Data stored in PostgreSQL
* Secured using Row Level Security (RLS)

---

### 📝 Blog Module

* Create blog posts
* Upload images (Supabase Storage)
* Display posts
* Delete posts
* Real-time updates

---

### 🔒 Security (RLS)

* Each record is linked with `user_id`
* Users can only access their own data
* Implemented using Supabase Row Level Security policies

---

## 🛠️ Tech Stack

* Frontend: React + Tailwind CSS
* Backend: Supabase
* Database: PostgreSQL
* Auth: Supabase Authentication
* Storage: Supabase Storage 

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone <your-repo-link>
cd project-folder
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Setup Environment Variables

Create `.env` file in root:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

---

### 4️⃣ Run the App

```bash
npm run dev
```

---

## 🧱 Database Setup (Supabase)

### Tables:

#### 📌 todos

* id (uuid)
* text (text)
* user_id (uuid)
* created_at (timestamp)

#### 📌 posts

* id (uuid)
* title (text)
* image (text)
* user_id (uuid)
* created_at (timestamp)

---

## 🔐 RLS Policies

```sql
CREATE POLICY "Users can manage their todos"
ON todos
FOR ALL
USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their posts"
ON posts
FOR ALL
USING (auth.uid() = user_id);
```

---

## 📸 Storage Setup

* Create a bucket named `posts`
* Enable public access (for images)

---

## 🎯 Learning Outcomes

* Supabase integration in React
* Authentication (email + magic link)
* PostgreSQL CRUD operations
* Row Level Security (RLS)
* Real-time data handling
* File upload handling

---


