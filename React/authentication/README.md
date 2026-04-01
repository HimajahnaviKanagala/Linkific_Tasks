# 🔐 React Authentication System (JWT + OAuth)

## 📌 Project Overview

This project is a complete authentication system built using React. It demonstrates modern authentication techniques including JWT-based login, Google OAuth integration, protected routes, and global state management using Context API.

---

## 🎯 Features

### 🔑 Authentication UI

* Login page
* Register page (UI)
* Forgot Password page (with success message)
* Protected Dashboard
* Logout functionality in Navbar

---

### 🔐 Authentication Logic

* Simulated JWT authentication
* Google OAuth login integration
* Persistent authentication (localStorage & sessionStorage)
* Auto login on refresh

---

### 🧠 Global State Management

* AuthContext for managing user state
* Custom `useAuth` hook
* Loading state during authentication check

---

### 🔒 Protected Routes

* PrivateRoute component
* Redirects unauthorized users to login page

---

### 🌐 API Integration

* Axios instance with interceptors
* Authorization header automatically attached
* Fetching data from API (Dashboard)

---

### ⚡ Advanced Features

* Remember Me functionality
* Password strength indicator
* Forgot password success message
* Auto logout (simulated)
* Google OAuth authentication

---

## 🛠️ Tech Stack

* React
* React Router DOM
* Context API
* Axios
* JWT Decode
* Google OAuth (`@react-oauth/google`)

---

## 📁 Folder Structure

```
src/
├── api/
│   └── axios.js
├── context/
│   └── AuthContext.jsx
├── hooks/
│   └── useAuth.js
├── components/
│   ├── Navbar.jsx
│   └── PrivateRoute.jsx
├── pages/
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── ForgotPassword.jsx
│   └── Dashboard.jsx
├── App.jsx
├── main.jsx
└── App.css
```

---

## 🚀 Installation & Setup

### 1. Clone the repository

```
git clone <your-repo-link>
cd your-project
```

### 2. Install dependencies

```
npm install
```

### 3. Install required packages

```
npm install react-router-dom axios jwt-decode @react-oauth/google
```

---

## 🔑 Google OAuth Setup

1. Go to Google Cloud Console
2. Create a new project
3. Enable Google Identity Services
4. Create OAuth Client ID (Web Application)
5. Add authorized origin:

```
http://localhost:5173
```

6. Copy Client ID and add in `main.jsx`

---

## ▶️ Run the Project

```
npm run dev
```

---

## 🔄 Authentication Flow

1. User logs in (Email/Password or Google OAuth)
2. Token is stored in localStorage/sessionStorage
3. AuthContext updates global user state
4. Protected routes check authentication
5. User is redirected if not authenticated

---

## 📊 Dashboard Features

* Displays logged-in user info
* Fetches data from API using Axios
* Shows dynamic content with loading state

---

## 🧠 Key Concepts Learned

* Authentication vs Authorization
* JWT token handling
* OAuth 2.0 login flow
* Context API for global state
* Protected routing in React
* Axios interceptors
* Handling async operations
* UI/UX improvements in auth systems

---






