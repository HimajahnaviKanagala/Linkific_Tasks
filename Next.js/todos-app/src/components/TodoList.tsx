"use client";

import { useEffect, useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState<any[]>([]);

  const fetchTodos = async () => {
    const res = await fetch("/api/todos");
    setTodos(await res.json());
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const toggle = async (id: string, completed: boolean) => {
    await fetch("/api/todos", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, completed: !completed }),
    });
    fetchTodos();
  };

  const remove = async (id: string) => {
    await fetch("/api/todos", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    fetchTodos();
  };

  if (!todos || todos.length === 0) {
    return <p className="text-gray-400 text-center">No tasks yet. Add one</p>;
  }

  return (
    <div className="space-y-3">
      {todos.map((t) => (
        <div
          className="flex items-center justify-between bg-gray-800 px-4 py-3 rounded-lg border border-gray-700 hover:border-gray-600 transition shadow-sm"
          key={t.id}
        >
          <div
            onClick={() => toggle(t.id, t.completed)}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div
              className={`w-5 h-5 flex items-center justify-center rounded border transition 
      ${
        t.completed
          ? "bg-green-500 border-green-500"
          : "border-gray-500 group-hover:border-green-400"
      }`}
            >
              {t.completed && <span className="text-white text-xs">✓</span>}
            </div>

            {/* Text */}
            <span
              className={`transition ${
                t.completed
                  ? "line-through text-gray-500"
                  : "text-gray-100 group-hover:text-green-400"
              }`}
            >
              {t.text}
            </span>
          </div>
          <button
            onClick={() => remove(t.id)}
            className="bg-gray-500 hover:bg-red-600 text-white px-4 py-3 rounded-lg transition"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
