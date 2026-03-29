# 🚀 Styled Components & CSS-in-JS Project

## 📌 Overview

This project is part of my frontend learning journey where I explored **CSS-in-JS** using **Styled Components** in React.
I built a reusable component library with dynamic styling and implemented a **light/dark theme system**.

---

## 🎯 Learning Objectives

* Understand **CSS-in-JS concept**
* Learn **Styled Components**
* Implement **dynamic styling with props**
* Build reusable UI components
* Implement **theme switching (light/dark)**
* Compare different styling approaches

---

## 🛠️ Tech Stack

* React (Vite)
* Styled Components

---

## ⚙️ Setup & Installation

1. Clone the repository:

```bash
git clone <your-repo-link>
cd <project-folder>
```

2. Install dependencies:

```bash
npm install
```

3. Install Styled Components:

```bash
npm install styled-components
```

4. Run the app:

```bash
npm run dev
```

---

## 🧠 Key Concepts Learned

### 🔹 CSS-in-JS

CSS-in-JS allows writing CSS inside JavaScript, enabling scoped and dynamic styling.

Example:

```jsx
const Button = styled.button`
  background: blue;
  color: white;
`;
```

---

### 🔹 Styled Components

Styled Components uses tagged template literals to style components.

* Scoped styles (no conflicts)
* Reusable components
* Cleaner structure

---

### 🔹 Dynamic Styling

Used props to change styles dynamically:

```jsx
background: ${(props) =>
  props.variant === "primary"
    ? "#4f46e5"
    : "#6b7280"};
```

---

### 🔹 Theme Provider

Implemented light and dark themes using `ThemeProvider`.

```jsx
<ThemeProvider theme={dark ? darkTheme : lightTheme}>
```

---

### 🔹 Global Styles

Used `createGlobalStyle` to apply global theming:

```jsx
background: ${(props) => props.theme.bg};
color: ${(props) => props.theme.text};
```

---

## 🌙 Theming System

Created two themes:

* Light Theme
* Dark Theme

Theme switching is controlled using React state.

---

## 🧩 Components Built

* ✅ Button (with variants: primary, danger, default)
* ✅ Card
* ✅ Input field
* ✅ Modal
* ✅ Global layout wrapper

---

## ⚡ Features

* Dynamic styling using props
* Light/Dark mode toggle
* Modal popup component
* Reusable component structure
* Clean and maintainable styling

---

## ⚔️ Styling Approach Comparison

| Method            | Description                    |
| ----------------- | ------------------------------ |
| Plain CSS         | Traditional styling            |
| CSS Modules       | Scoped CSS files               |
| Tailwind CSS      | Utility-first classes          |
| Styled Components | CSS-in-JS with dynamic styling |

---

## 🎯 When to Use Styled Components

* When building scalable React applications
* When you need dynamic styling
* When you want component-based styling
* When avoiding CSS conflicts

---

## 💡 Key Takeaways

* Styled Components improve code organization
* Dynamic styling is powerful with props
* ThemeProvider simplifies global theming
* CSS-in-JS avoids style conflicts

---





