# 📊 React Recharts Analytics Dashboard

This project is a **data visualization dashboard built with React and Recharts**, demonstrating how to create interactive, responsive, and dynamic charts.

It showcases multiple chart types, real-time data updates, API integration, filtering, and advanced chart interactions.

---

## 🚀 Features

### 📈 Charts Implemented

* Line Chart → Sales & Users trends
* Bar Chart → User comparison
* Pie Chart → Revenue distribution
* Area Chart → Monthly growth
* Composed Chart → Combined data visualization

---

### ⚡ Interactive Features

* ✅ Click events on chart elements
* ✅ Brush for zooming and range selection
* ✅ Synchronized charts (`syncId`)
* ✅ Custom tooltips with rich UI
* ✅ Hoverable tooltips and legends

---

### 🔄 Dynamic Data Handling

* Fetch data from API
* Update charts on state change
* Filter data using dropdown
* Multiple datasets in one chart

---

### 📱 Responsive Design

* Fully responsive layout using CSS Grid
* Charts adapt to all screen sizes using `ResponsiveContainer`

---

## 🧱 Project Structure

```id="k39f2a"
src/
 ├── components/
 │    ├── charts/
 │    │    ├── LineChartComp.jsx
 │    │    ├── BarChartComp.jsx
 │    │    ├── PieChartComp.jsx
 │    │    ├── AreaChartComp.jsx
 │    │    ├── ComposedChartComp.jsx
 │    │
 │    ├── CustomTooltip.jsx
 │    ├── Dashboard.jsx
 │
 ├── App.jsx
 ├── main.jsx
 ├── App.css
```

---

## ⚙️ Installation

1. Clone the repository:

```id="a93k2l"
git clone <your-repo-url>
```

2. Navigate into the project:

```id="x71d9p"
cd your-project-name
```

3. Install dependencies:

```id="p41j8c"
npm install
```

4. Install Recharts:

```id="z88h2w"
npm install recharts
```

5. Run the project:

```id="f83l2a"
npm run dev
```

---

## 📊 Key Concepts Covered

### 🟦 Recharts Fundamentals

* `ResponsiveContainer`
* Chart components (LineChart, BarChart, PieChart, etc.)
* Axes, Grid, Tooltip, Legend

---

### 🟩 Data Visualization Types

* Trend analysis (Line Chart)
* Category comparison (Bar Chart)
* Proportion (Pie Chart)
* Growth visualization (Area Chart)
* Combined datasets (Composed Chart)

---

### 🟨 Advanced Features

* `syncId` → synchronize charts
* `Brush` → zoom and filter data
* Custom Tooltip → enhanced UI
* Event handling → click interactions

---

### 🟪 State Management

* `useState` → dynamic data updates
* `useEffect` → API data fetching
* Filtering logic for charts

---

## 🔄 Data Flow

```id="d7k3a1"
API → State → Filter → Chart Components → UI Update
```

---

## 🎯 Learning Outcomes

After completing this project, you will:

* Understand how to visualize data in React
* Work with multiple chart types
* Handle dynamic and real-time data
* Build interactive dashboards
* Implement responsive chart layouts

---

