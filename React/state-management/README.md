# React State & Event Handling ⚛️

This project demonstrates how to use state and handle user interactions in React using the `useState` hook. It includes multiple interactive components such as a counter, todo list, form handling, shopping cart, and theme toggle.

---

## 🚀 Technologies Used

* React
* Vite
* JavaScript (ES6+)
* CSS

---

## 📚 Concepts Covered

### 1. State in React

State is used to store and manage dynamic data in a component. When state changes, the UI updates automatically.

---

### 2. useState Hook

The `useState` hook is used to create and update state variables.

Example:

```jsx id="v4e3cz"
const [count, setCount] = useState(0)
```

---

### 3. Event Handling

React handles user interactions using events like:

* onClick
* onChange
* onSubmit

Example:

```jsx id="9c0ph2"
<button onClick={() => setCount(count + 1)}>Increment</button>
```

---

### 4. Controlled Components (Forms)

Form inputs are controlled using state.

Example:

```jsx id="y9plpd"
<input 
  value={name} 
  onChange={(e) => setName(e.target.value)} 
/>
```

---

### 5. Conditional Rendering

Used to display UI based on conditions.

Example:

```jsx id="0fa3mw"
{dark ? "Dark Mode" : "Light Mode"}
```

---

### 6. State with Arrays

Used to manage lists like todos or cart items.

* Add items → spread operator
* Remove items → filter()
* Update items → map()

Example:

```jsx id="j4mf6v"
setTodos([...todos, newTodo])
```

---

### 7. State with Objects

Used for structured data and updating properties immutably.

---

## 🧩 Components Built

* Counter (increment, decrement, reset)
* Theme Toggle (light/dark mode)
* Form (input handling and submission)
* Todo List (add, delete, toggle complete)
* Shopping Cart (add/remove items)

---

## ✨ Features

* Interactive UI using state
* Dynamic updates without page reload
* Form handling with validation basics
* List rendering with real-time updates
* Light/Dark theme toggle
* Clean and reusable components

---

## 📁 Project Structure

```id="fij2fc"
src
 ├── components
 │     ├── Counter.jsx
 │     ├── ThemeToggle.jsx
 │     ├── Form.jsx
 │     ├── Todo.jsx
 │     └── Cart.jsx
 │
 ├── styles.css
 ├── App.jsx
 └── main.jsx
```

---

## ▶️ Getting Started

Run the project locally:

```bash id="lhl48p"
npm install
npm run dev
```

Open in browser:

```id="jqb0g9"
http://localhost:5173
```

---

## 🎯 Learning Outcome

By building this project, I learned:

* How to manage state using `useState`
* How to handle events in React
* How to build interactive components
* How to work with arrays and objects in state
* How to handle forms using controlled components
* How React re-renders UI when state changes

---


