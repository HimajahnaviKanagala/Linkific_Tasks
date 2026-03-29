# 🚀 Redux Toolkit React App

This project is a **React application using Redux Toolkit** to demonstrate modern global state management. It includes multiple features like Todo management, User API fetching, and a Shopping Cart.

---

## 📌 Features

* ✅ Global state management using Redux Toolkit
* ✅ Todo management (Add & Remove)
* ✅ Fetch users from API using asyncThunk
* ✅ Shopping cart with total calculation
* ✅ Multiple slices working together
* ✅ Redux DevTools integration

---

## 🧠 Concepts Covered

* What is Redux and why use it
* Redux Toolkit basics
* Store configuration (`configureStore`)
* Creating slices (`createSlice`)
* Dispatching actions (`useDispatch`)
* Reading state (`useSelector`)
* Async operations (`createAsyncThunk`)
* Unidirectional data flow
* Global vs local state

---

## 🧱 Project Structure

```
src/
 ├── app/
 │    └── store.js
 │
 ├── features/
 │    ├── todo/
 │    │    └── todoSlice.js
 │    │
 │    ├── user/
 │    │    └── userSlice.js
 │    │
 │    └── cart/
 │         └── cartSlice.js
 │
 ├── components/
 │    ├── Todo.jsx
 │    ├── Users.jsx
 │    └── Cart.jsx
 │
 ├── App.jsx
 └── main.jsx
```

---

## ⚙️ Installation

1. Clone the repository:

```
git clone <your-repo-url>
```

2. Navigate into the project:

```
cd your-project-name
```

3. Install dependencies:

```
npm install
```

4. Start the development server:

```
npm run dev
```

---

## 📦 Dependencies

* React
* Redux Toolkit
* React-Redux

Install manually if needed:

```
npm install @reduxjs/toolkit react-redux
```

---

## 🔄 Redux Flow

```
Component → dispatch(action) → reducer → store → UI update
```

---

## 🌍 API Used

* https://jsonplaceholder.typicode.com/users

Used for demonstrating async data fetching with Redux Toolkit.

---

## 🛠️ Redux Slices

### 1. Todo Slice

* Add todo
* Remove todo

### 2. User Slice

* Fetch users from API
* Handle loading, success, and error states

### 3. Cart Slice

* Add item to cart
* Remove item
* Calculate total price

---

## 🧪 Redux DevTools

* Inspect actions
* Track state changes
* Debug easily
* Time-travel debugging

---

## 🎯 Learning Outcome

After completing this project, you will be able to:

* Manage global state using Redux Toolkit
* Structure scalable React applications
* Handle async operations in Redux
* Connect Redux with React efficiently
* Debug applications using DevTools

---






