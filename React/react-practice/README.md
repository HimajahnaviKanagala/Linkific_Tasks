# React Basics Practice ⚛️

This project is built to learn and practice the fundamentals of React, including components, JSX, props, list rendering, and component composition.

---

## 🚀 Technologies Used

* React
* Vite
* JavaScript (ES6+)
* CSS

---

## 📚 Concepts Covered

This project demonstrates the following core concepts of React:

### 1. Functional Components

* Creating reusable UI components using functions
* Importing and exporting components

### 2. JSX (JavaScript XML)

* Writing HTML inside JavaScript
* Using JavaScript expressions with `{}`

Example:

```jsx
<h1>Hello {name}</h1>
```

---

### 3. Props

* Passing data from parent to child components
* Props destructuring

Example:

```jsx
function UserCard({ name, age }) {
  return <h2>{name}</h2>
}
```

---

### 4. Props.children (Component Composition)

* Wrapping components inside reusable layouts

Example:

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>
}
```

Usage:

```jsx
<Card>
  <h2>Hello</h2>
</Card>
```

---

### 5. Conditional Rendering

* Display UI based on conditions

Example:

```jsx
{isLoggedIn ? <p>Welcome</p> : <p>Please Login</p>}
```

---

### 6. Rendering Lists

* Using `map()` to render dynamic lists
* Using unique `key` for each item

Example:

```jsx
products.map(product => (
  <ProductCard key={product.id} name={product.name} />
))
```

---

### 7. Component Composition

* Breaking UI into smaller reusable components
* Creating component hierarchy

---

## 📁 Project Structure

```
src
 ├── components
 │     ├── Navbar.jsx
 │     ├── Button.jsx
 │     ├── Card.jsx
 │     ├── UserCard.jsx
 │     ├── ProductCard.jsx
 │     ├── ProductList.jsx
 │     ├── BlogPost.jsx
 │     └── BlogList.jsx
 │
 ├── data
 │     ├── products.js
 │     └── posts.js
 │
 ├── styles.css
 ├── App.jsx
 └── main.jsx
```

---

## ✨ Features

* Reusable components (Button, Card)
* User card with props
* Product list rendered dynamically
* Blog list rendered using array data
* Conditional rendering example
* Clean and simple UI styling

---

## ▶️ Getting Started

Follow these steps to run the project locally:

```bash
npm install
npm run dev
```

Then open:

```
http://localhost:5173
```

---

## 🎯 Learning Outcome

By building this project, I learned:

* How React works using a component-based architecture
* How to use JSX to create UI
* How to pass and use props
* How to render lists dynamically
* How to use props.children for composition
* How to structure a React project properly

---
