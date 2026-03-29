import { useState } from "react";

function ThemeToggle() {
  const [dark, setDark] = useState(false);
  return (
    <div
      className="card"
      style={{
        backgroundColor: dark ? "#222" : "white",
        color: dark ? "white" : "black",
      }}
    >
      <h2>{dark ? "Dark Mode" : "Light Mode"}</h2>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
    </div>
  );
}
export default ThemeToggle;
