import { useState, useMemo, useEffect } from "react";
import type { Todo, Filter, TodoState } from "../types/Todo";
import { fetchTodos } from "../services/todoService";
import { useFetch } from "./useFetch";

export const useTodos = () => {
  const { data, loading, error } = useFetch(fetchTodos);

  const [todos, setTodos] = useState<Todo[]>([]);

  const [filter, setFilter] = useState<Filter>("all");

  useEffect(() => {
    if (data) setTodos(data);
  }, [data]);

  const state: TodoState = loading
    ? { status: "loading" }
    : error
      ? { status: "error", error }
      : { status: "success", todos };

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const editTodo = (id: number, newText: string): void => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, text: newText } : t)),
    );
  };

  const filteredTodos = useMemo(() => {
    return todos.filter((t) => {
      if (filter === "active") return !t.completed;
      if (filter === "completed") return t.completed;
      return true;
    });
  }, [todos, filter]);

  return {
    state,
    todos: filteredTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    setFilter,
    filter,
  };
};
