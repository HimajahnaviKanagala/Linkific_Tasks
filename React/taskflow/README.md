# 🚀 QuizFlow Pro

QuizFlow Pro is a modern, interactive, and gamified quiz application built using React.  
It includes a timer-based quiz system & level mechanics, streak tracking, and a fully responsive dark mode UI.

---

## ✨ Features

### 🎯 Core Quiz System
- Category-based quizzes (HTML, CSS, JavaScript)
- Timer per question (10 seconds)
- Instant answer validation
- Score tracking system
- Progress bar indicator

---

### 🎮 Gamification System
- XP (Experience Points) system
- Level progression system
- Streak tracking for consecutive correct answers
- Bonus XP for streak performance

---

### 🌙 Theme System
- Light / Dark mode toggle
- Global theme applied to entire page
- Persistent theme using localStorage
- Smooth transitions between themes

---

### 📊 Result System
- Final score display
- XP earned summary
- Level achieved
- Best streak tracking

---

## 🛠️ Tech Stack

- React (Hooks: useState, useEffect)
- Vanilla CSS (Design System with CSS variables)
- JavaScript (ES6+)
- LocalStorage (Theme persistence)

---

## 📁 Project Structure

App.js → Main quiz logic and UI  
styles.css → Complete design system (light + dark mode)  
README.md → Project documentation  

---

## ⚙️ How It Works

### 1. Select Category
User chooses a quiz category:
- HTML
- CSS
- JavaScript

### 2. Answer Questions
Each question includes:
- Multiple choice options
- Countdown timer
- Instant feedback (correct/wrong)

### 3. Scoring System
- Correct answer → +Score

### 4. Results Screen
Displays:
- Total score
- XP earned
- Level achieved
- Best streak

---

## 🌙 Dark Mode System

Dark mode is controlled globally using:

```js
document.documentElement.classList.toggle("dark");