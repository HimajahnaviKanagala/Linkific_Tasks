# 🚀 Advanced TypeScript Todo App (React + Vite + Tailwind)

A fully typed and scalable Todo application built with **React, TypeScript, and Tailwind CSS**, showcasing advanced TypeScript patterns, reusable architecture, and real-world best practices.

---

## 🎯 Project Goal

The goal of this project is to **master advanced TypeScript concepts** and apply them in a real-world React application, focusing on type safety, scalability, and maintainability.

---

## ✨ Features

* ✅ Full CRUD functionality (Add, Edit, Delete, Toggle)
* 🎯 Advanced TypeScript usage (no `any`)
* ⚛️ Typed React components and hooks
* 🔁 Global state management using Context API
* 🌐 Typed async API handling
* 🔍 Filter todos (All / Active / Completed)
* ✏️ Inline editing feature
* 🎨 Modern UI with Tailwind CSS
* ⚡ Optimized rendering using `useMemo`

---

## 🧠 Advanced TypeScript Concepts Used

### 🔹 Utility Types

* `Partial<T>` – used for updating todos
* `Readonly<T>` – ensures immutability where needed
* `Pick<T, K>` and `Omit<T, K>` – for selective typing
* `Record<K, T>` – structured object typing

---

### 🔹 Advanced Generics

* Generic hook:

  ```ts
  useFetch<T>()
  ```
* Type-safe API handling
* Reusable typed logic

---

### 🔹 Discriminated Unions

Used for handling async state:

```ts
type TodoState =
  | { status: "loading" }
  | { status: "success"; todos: Todo[] }
  | { status: "error"; error: string };
```

---

### 🔹 Type Guards

```ts
function isCompleted(todo: Todo): boolean {
  return todo.completed === true;
}
```

---

### 🔹 Context API with Type Safety

* Fully typed context
* Safe access using custom hook
* Prevents undefined usage

---

### 🔹 Strict Typing Practices

* No use of `any`
* Used `unknown` where applicable
* Type-safe props and state
* `import type` for type-only imports

---

## ⚙️ Installation & Setup

### 1. Create Project

```bash
npm create vite@latest
```

Choose:

```
React + TypeScript
```

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

---

## 🌐 API Handling

A mock API is used with full TypeScript support:

```ts
export const fetchTodos = async (): Promise<Todo[]> => { ... }
```

* ✔ Typed responses
* ✔ Async handling with generics
* ✔ Error handling

---

## 🧪 Deliverables Covered

* ✔ Advanced TypeScript examples
* ✔ Utility types implemented
* ✔ Generic hooks
* ✔ Fully typed Context API
* ✔ Type guards implemented
* ✔ Complex type scenarios handled
* ✔ No `any` usage

---

## 💡 Key Learnings

* TypeScript improves code reliability and maintainability
* Advanced types help handle complex real-world scenarios
* Generics make code reusable and scalable
* Strong typing prevents runtime errors
* Clean architecture improves project structure

---




