# ⚡ Optimized React Product App

## 📌 Overview

This project is a **performance-optimized React application** that demonstrates modern optimization techniques such as memoization, code splitting, virtualization, and image optimization.

The app displays a list of products with search functionality while ensuring **high performance and efficient rendering**.

---

## 🚀 Features

* 🔍 Search functionality with debounce
* ⚡ Virtual scrolling using react-window
* 🧠 Memoization using React.memo, useMemo, useCallback
* 📦 Code splitting with React.lazy & Suspense
* 🖼️ Optimized images (WebP + lazy loading)
* 🎨 Modern UI using Tailwind CSS
* 📊 Lighthouse Performance Score: **92 (Desktop)**

---

## 🛠️ Tech Stack

* React (Vite)
* Tailwind CSS
* react-window (virtualization)
* JavaScript (ES6+)

---

## 📁 Folder Structure

```
src/
│
├── components/
│   ├── ProductList.jsx
│   ├── ProductItem.jsx
│   ├── SearchBar.jsx
│
├── hooks/
│   └── useDebounce.js
│
├── pages/
│   └── Home.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## ⚡ Performance Optimizations

### 1. React.memo

Prevents unnecessary re-rendering of components like `ProductItem` and `SearchBar`.

---

### 2. useMemo

Used to optimize expensive filtering operations:

```
Filtering product list based on search input
```

---

### 3. useCallback

Prevents recreation of functions on every render:

```
handleSearch function is memoized
```

---

### 4. Virtualization (react-window)

Only visible items are rendered, reducing DOM size and improving performance.

---

### 5. Code Splitting

Implemented using React.lazy and Suspense to reduce initial bundle size.

---

### 6. Debouncing

Search input is debounced to avoid unnecessary filtering on every keystroke.

---

### 7. Image Optimization

* WebP format used
* Lazy loading enabled

---

## 🧪 Performance Testing

### 🔍 React DevTools Profiler

Used to:

* Identify unnecessary re-renders
* Measure component render time

---

### 📊 Lighthouse Score

| Metric         | Score |
| -------------- | ----- |
| Performance    | 92   |
| Accessibility  | 88   |
| Best Practices | 100   |

---

## ▶️ How to Run the Project

### 1. Install dependencies

```
npm install
```

### 2. Run development server

```
npm run dev
```

### 3. Build for production

```
npm run build
```

### 4. Preview production build

```
npm run preview
```

---

## 📸 Lighthouse Testing

1. Open Chrome DevTools
2. Go to **Lighthouse tab**
3. Click **Analyze page load**

---

## 🎯 Key Learnings

* Understanding React rendering behavior
* Optimizing performance using memoization
* Implementing virtualization for large lists
* Using code splitting to reduce bundle size
* Measuring performance using Profiler and Lighthouse

---

