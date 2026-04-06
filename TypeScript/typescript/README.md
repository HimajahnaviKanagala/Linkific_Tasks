# 📝 TypeScript Todo App (React + Vite + Tailwind)

A modern Todo application built using **React, TypeScript, and Tailwind CSS**.
This project demonstrates strong TypeScript fundamentals, typed React components, and clean UI design.

---

## 🚀 Features

* ✅ Fully typed React application using TypeScript
* 🧩 Modular component-based architecture
* 🎯 Strict type safety (no `any` usage)
* ⚛️ Custom hooks with TypeScript
* 🌐 Typed API simulation
* 🎨 Modern UI with Tailwind CSS
* 🔁 State management using Context API
* 🔍 Filter todos (All / Active / Completed)
* ✔️ Toggle and delete todos
* 📱 Responsive and clean design

---

## 🧠 TypeScript Concepts Used

* Interfaces and type aliases
* Typed props for all components
* Union types (`"all" | "active" | "completed"`)
* Generics (API responses)
* Typed React hooks (`useState`, `useEffect`, `useContext`)
* Custom hooks with inferred return types
* `import type` for type-only imports

---

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   ├── todo/
│   │   ├── AddTodo.tsx
│   │   ├── TodoItem.tsx
│   │   ├── TodoList.tsx
│   │   ├── TodoFilter.tsx
│  
│  
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── Card.tsx
├── context/
│   └── TodoContext.tsx
├── hooks/
│   └── useTodos.ts
├── services/
│   └── todoService.ts
├── types/
│   └── Todo.ts
├── App.tsx
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd ts-todo-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```
---

## 📦 API Simulation

The app uses a mock API:

```ts
export const fetchTodos = async (): Promise<Todo[]> => { ... }
```

✔ Fully typed response
✔ No `any` used

---

## 🧪 Deliverables Covered

* ✔ React app fully typed with TypeScript
* ✔ 10+ typed components
* ✔ Interfaces for all props
* ✔ Typed state and hooks
* ✔ Typed API responses
* ✔ Minimal / no `any` usage

---

## 💡 Why TypeScript?

TypeScript improves development by:

* Catching errors at compile time
* Providing better autocomplete and IntelliSense
* Making code more readable and maintainable
* Enforcing type safety across components and APIs
* Improving scalability for large applications

---



