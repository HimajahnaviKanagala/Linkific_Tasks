# 🚀 React Context API & Advanced State Patterns App

This project is a **React application using Context API** to manage global state efficiently. It demonstrates multiple contexts, custom hooks, and advanced patterns like compound components.

---

## 📌 Features

* ✅ Global state management using Context API
* ✅ Authentication system (Login/Logout)
* ✅ Theme toggle (Light/Dark mode)
* ✅ Shopping cart functionality
* ✅ Multiple contexts working together
* ✅ Custom hooks for clean code
* ✅ Compound components pattern (Tabs)

---

## 🧠 Concepts Covered

* What is Context API
* Context vs prop drilling
* Context vs Redux
* `createContext`, `Provider`, `useContext`
* Custom context hooks
* Multiple & nested providers
* Context composition
* Performance considerations
* Compound components pattern

---

## 🧱 Project Structure

```id="7q3d91"
src/
 ├── context/
 │    ├── AuthContext.jsx
 │    ├── ThemeContext.jsx
 │    ├── CartContext.jsx
 │
 ├── components/
 │    ├── Navbar.jsx
 │    ├── Login.jsx
 │    ├── ThemeToggle.jsx
 │    ├── Cart.jsx
 │    └── Tabs.jsx
 │
 ├── App.jsx
 └── main.jsx
```

---

## ⚙️ Installation

1. Clone the repository:

```id="k41d93"
git clone <your-repo-url>
```

2. Navigate into the project:

```id="t19d72"
cd your-project-name
```

3. Install dependencies:

```id="m82f91"
npm install
```

4. Start the development server:

```id="p20d83"
npm run dev
```

---

## 🔄 Context API Flow

```id="x84d71"
Component → useContext → Context Provider → Global State → UI update
```

---

## 🛠️ Contexts Implemented

### 🔐 Auth Context

* Manage user login/logout
* Store user data globally

---

### 🌙 Theme Context

* Toggle between light and dark mode
* Apply global styles

---

### 🛒 Cart Context

* Add/remove items
* Manage cart state globally

---

## 🔌 Custom Hooks

Each context includes a custom hook:

* `useAuth()`
* `useTheme()`
* `useCart()`

👉 Ensures cleaner and reusable code.

---

## 🧩 Compound Components Pattern

Implemented a **Tabs component** using Context:

* Shared internal state
* Flexible component structure
* Clean API design

---

## ⚖️ Context API vs Redux

| Feature     | Context API        | Redux      |
| ----------- | ------------------ | ---------- |
| Setup       | Simple             | Structured |
| Best for    | Small/medium apps  | Large apps |
| Performance | Can re-render more | Optimized  |
| DevTools    | ❌                  | ✅          |

---

## 🎯 Learning Outcome

After completing this project, you will:

* Understand global state management with Context API
* Avoid prop drilling
* Build scalable React applications
* Use custom hooks effectively
* Implement advanced React patterns
* Know when to use Context vs Redux

---



