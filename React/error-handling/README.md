# 🚀 React Error Handling & CORS Demo App

A modern React application demonstrating **robust error handling, CORS understanding, retry logic, and user-friendly UI patterns**.

---

## 📌 Features

* ✅ API data fetching with retry logic
* ✅ Comprehensive error handling (API + UI + global)
* ✅ React Error Boundary for crash protection
* ✅ Toast notifications for user feedback
* ✅ Loading states with spinner
* ✅ Retry mechanism for failed requests
* ✅ 404 Not Found page
* ✅ Clean UI with Tailwind CSS
* ✅ Debugging-friendly structure

---

## 🧠 Concepts Covered

### 🔹 CORS (Cross-Origin Resource Sharing)

* Same-Origin Policy
* Cross-origin requests
* Backend CORS configuration
* Development proxy usage

### 🔹 Error Handling

* try-catch for async operations
* Component-level error states
* Global error handling with Error Boundary
* API error response handling

### 🔹 Debugging

* Browser DevTools (Console, Network)
* React DevTools
* Logging and debugging techniques

---

## ⚙️ Tech Stack

* React (Hooks)
* React Router
* Tailwind CSS
* react-toastify

---

## 📁 Folder Structure

```
src/
│
├── api/
│   └── api.js
│
├── components/
│   ├── ErrorBoundary.js
│   ├── Loader.js
│   ├── PostList.js
│   └── RetryButton.js
│
├── pages/
│   ├── Home.js
│   └── NotFound.js
│
├── utils/
│   ├── fetchWithRetry.js
│   └── toastConfig.js
│
├── App.js
├── main.jsx
└── index.css
```

---

## 🔄 API Handling Strategy

* API calls are wrapped in `try-catch`
* Retry logic implemented using a custom utility
* HTTP errors handled explicitly
* Network errors handled gracefully

```js
if (!res.ok) {
  throw new Error(`Server Error: ${res.status}`);
}
```

---

## 🔁 Retry Logic

Implemented using a reusable function:

```js
export const fetchWithRetry = async (fn, retries = 3) => {
  try {
    return await fn();
  } catch (error) {
    if (retries <= 0) throw error;
    return fetchWithRetry(fn, retries - 1);
  }
};
```

---

## 🧱 Error Boundary

* Catches rendering errors
* Prevents full app crash
* Displays fallback UI

```js
<ErrorBoundary>
  <App />
</ErrorBoundary>
```

---

## 🔔 Toast Notifications

* Success, error, and info notifications
* Non-blocking UI feedback
* Prevent duplicate toasts using `toastId`

---

## 🌐 CORS Configuration

### What is CORS?

CORS is a browser security feature that restricts cross-origin HTTP requests.

### Backend Example:

```js
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
```

### Development Proxy:

```json
"proxy": "http://localhost:5000"
```

### Current Setup:

* Uses public API (`jsonplaceholder.typicode.com`)
* CORS already enabled on server

---

## ⏳ Loading States

* Spinner displayed while fetching data
* Improves user experience
* Prevents blank UI

---

## ❌ Error Handling Types Covered

* 404 Not Found
* 500 Server Errors
* Network errors (offline)
* API failures
* Validation errors (basic handling)

---

## 🔁 Retry Mechanism

* Retry button shown on failure
* Automatic retry logic included
* Improves reliability

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

---

## 🎯 Learning Outcomes

* Deep understanding of CORS
* Real-world error handling patterns
* Debugging React applications
* Building resilient UI

---




