import { useEffect, useState } from "react";

function ToggleTheme() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;

    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed top-4 right-4 px-4 py-2 rounded-lg shadow 
                 bg-gray-800 text-white 
                 dark:bg-white dark:text-black 
                 transition"
    >
      {dark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}

export default ToggleTheme;
