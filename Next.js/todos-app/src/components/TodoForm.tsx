"use client";

import { useState } from "react";

export default function TodoForm() {
  const [text, setText] = useState("");

  const addTodo = async () => {
    if (!text.trim()) return;

    await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({ text }),
    });

    setText("");
    location.reload();
  };
  return (
    <div className="flex gap-3">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task...."
        className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-blue-500"
      />
      <button
        onClick={addTodo}
        className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg font-medium"
      >
        Add
      </button>
    </div>
  );
}
