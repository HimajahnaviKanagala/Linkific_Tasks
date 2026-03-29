# React Hooks - useEffect & Custom Hooks ⚛️

This project demonstrates how to use React hooks like `useEffect` and how to create custom hooks for reusable logic. It includes real-world examples such as data fetching, timers, event listeners, and local storage persistence.

---

## 🚀 Technologies Used

* React
* Vite
* JavaScript (ES6+)
* CSS

---

## 📚 Concepts Covered

### 1. useEffect Hook

The `useEffect` hook is used to handle side effects in React such as API calls, timers, and event listeners.

Example:

```jsx
useEffect(() => {
  console.log("Component mounted")
}, [])
```

---

### 2. Dependency Array

Controls when the effect runs:

* `[]` → runs once on mount
* `[value]` → runs when value changes
* no array → runs on every render

---

### 3. Cleanup Functions

Used to prevent memory leaks by cleaning up side effects.

Example:

```jsx
useEffect(() => {
  const interval = setInterval(() => {
    console.log("Running...")
  }, 1000)

  return () => clearInterval(interval)
}, [])
```

---

### 4. Data Fetching

Fetching data from APIs using `fetch` and displaying it in components.

* Loading state
* Error handling
* Displaying dynamic data

---

### 5. Custom Hooks

Custom hooks allow you to reuse logic across components.

---

## 🧩 Custom Hooks Created

### useFetch

A reusable hook to fetch data from APIs.

Features:

* Fetch data from a given URL
* Loading and error state handling

---

### useLocalStorage

A custom hook to store and persist data in localStorage.

Features:

* Saves data even after page refresh
* Syncs state with localStorage automatically

---

## 🧩 Components Built

* Users → Fetch and display user data from API
* Todos → Fetch todos and persist using localStorage
* Timer → Interval-based timer with cleanup
* WindowSize → Tracks window resize using event listener

---

## ✨ Features

* API data fetching using custom hook
* Persistent data using localStorage
* Timer with start/stop functionality
* Event listener with cleanup
* Clean and reusable code structure
* Styled UI with reusable button styles

---

## 📁 Project Structure

```
src
 ├── components
 │     ├── Users.jsx
 │     ├── Todos.jsx
 │     ├── Timer.jsx
 │     ├── WindowSize.jsx
 │
 ├── hooks
 │     ├── useFetch.js
 │     └── useLocalStorage.js
 │
 ├── styles.css
 ├── App.jsx
 └── main.jsx
```

---

## ▶️ Getting Started

Run the project locally:

```bash
npm install
npm run dev
```

Open in browser:

```
http://localhost:5173
```

---

## 🎯 Learning Outcome

By building this project, I learned:

* How to use `useEffect` for side effects
* How dependency arrays control execution
* How to clean up effects to avoid memory leaks
* How to fetch and display API data
* How to create and use custom hooks
* How to persist state using localStorage

---


