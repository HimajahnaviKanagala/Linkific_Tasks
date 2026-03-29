# 🚀 Tailwind CSS Fundamentals Project

## 📌 Overview

This project is part of my frontend learning journey where I explored **Tailwind CSS**, a utility-first CSS framework.
I built a fully responsive React application styled entirely using Tailwind.

---

## 🎯 Learning Objectives

* Understand **utility-first CSS**
* Learn and apply **Tailwind CSS classes**
* Build **responsive layouts**
* Configure Tailwind in a React (Vite) project
* Implement **dark mode toggle**

---

## 🛠️ Tech Stack

* React (Vite)
* Tailwind CSS (latest version)
* PostCSS

---

## ⚙️ Setup & Installation

1. Clone the repository:

```bash
git clone <your-repo-link>
cd <project-folder>
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

---

## 🎨 Tailwind Configuration

Since I used the latest Tailwind version, dark mode was enabled using:

```css
@custom-variant dark (&:where(.dark, .dark *));
```

Dark mode is controlled via a custom toggle component that adds/removes the `dark` class on the `<html>` element.

---

## 🧠 Key Concepts Learned

### 🔹 Utility-First CSS

Tailwind allows styling directly in JSX using utility classes instead of writing custom CSS.

Example:

```html
<button class="px-4 py-2 bg-blue-500 text-white rounded">
```

---

### 🔹 Responsive Design

Used Tailwind breakpoints:

* `sm:` → Small screens
* `md:` → Medium screens
* `lg:` → Large screens

Example:

```html
text-sm md:text-lg lg:text-xl
```

---

### 🔹 Dark Mode

Implemented using:

* `dark:` utility classes
* Toggle component
* CSS custom variant

Example:

```html
bg-white dark:bg-gray-900
text-gray-900 dark:text-white
```

---

### 🔹 Layout Systems

* Flexbox (`flex`, `justify-between`, `items-center`)
* Grid (`grid`, `grid-cols-3`, `gap-6`)

---

### 🔹 Common Utility Classes

| Category   | Examples                         |
| ---------- | -------------------------------- |
| Spacing    | `p-4`, `m-2`, `px-6`             |
| Colors     | `bg-indigo-600`, `text-gray-700` |
| Typography | `text-xl`, `font-bold`           |
| Borders    | `rounded`, `border`              |
| Effects    | `shadow`, `hover:shadow-md`      |

---

## 🧩 Components Built

* ✅ Navbar (Responsive)
* ✅ Hero Section
* ✅ Card Grid Layout
* ✅ Pricing Table
* ✅ Contact Form
* ✅ Footer
* 🌙 Dark Mode Toggle (Bonus)

---

## 📱 Responsiveness

The UI is fully responsive across:

* Mobile 📱
* Tablet 📲
* Desktop 💻

Used Tailwind’s **mobile-first approach**.

---

## 🌙 Dark Mode

* Toggle button switches between light and dark mode
* Uses Tailwind’s `dark:` utilities
* Applied globally via `<html>` class

---

## 💡 Key Takeaways

* Tailwind speeds up UI development significantly
* Consistent design system improves UI quality
* Dark mode requires planning for both themes
* Utility classes reduce the need for custom CSS

---




