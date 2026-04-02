# 🚀 React Firebase Full Stack App

A modern full-stack web application built with **React, Firebase, Firestore, and Cloudinary**.
This project includes **Authentication, Real-time Chat, Todo Management, and Blog System with Image Uploads**.

---

## 📌 Features

### 🔐 Authentication

* Email & Password login/signup
* Google Sign-In
* Persistent login using Firebase Auth
* Protected routes

---

### 💬 Chat Module (Real-Time)

* Send and receive messages instantly
* Real-time updates using Firestore `onSnapshot`
* Simple and responsive UI

---

### ✅ Todo Module

* Add todos
* Delete todos
* Real-time updates
* Clean UI with Tailwind CSS

---

### 📝 Blog Module

* Create blog posts with title + image
* Upload images using Cloudinary
* Store blog data in Firestore
* Real-time post updates
* Delete posts
* Responsive grid layout with modern UI

---

## 🧠 Tech Stack

* **Frontend:** React (Vite)
* **Styling:** Tailwind CSS
* **Backend:** Firebase

  * Authentication
  * Firestore Database
* **Image Storage:** Cloudinary

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Firebase Setup

1. Go to Firebase Console

2. Create a new project

3. Enable:

   * Authentication (Email/Password + Google)
   * Firestore Database

4. Copy Firebase config and create:

```
src/firebase/config.js
```

```js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
```

---

### 4️⃣ Cloudinary Setup (For Image Uploads)

1. Create account on Cloudinary

2. Get:

   * Cloud Name
   * Upload Preset (set to unsigned)

3. Replace in Blog component:

```js
"https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload"
```

```js
formData.append("upload_preset", "YOUR_UPLOAD_PRESET");
```

---

### 5️⃣ Run the App

```bash
npm run dev
```

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── Navbar.jsx
│
├── pages/
│   ├── Dashboard.jsx
│   ├── Chat.jsx
│   ├── Todo.jsx
│   ├── Blog.jsx
│   ├── Login.jsx
│   ├── Signup.jsx
│
├── firebase/
│   └── config.js
│
├── App.jsx
└── main.jsx
```

---

## 🔥 Key Concepts Used

* Firebase Authentication
* Firestore CRUD operations
* Real-time updates with `onSnapshot`
* File upload using Cloudinary API
* React Hooks (useState, useEffect)
* Tailwind CSS for UI design

---




