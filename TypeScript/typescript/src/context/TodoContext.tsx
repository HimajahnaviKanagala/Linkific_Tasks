import { createContext, useContext } from "react";
import { useTodos } from "../hooks/useTodos";

type TodoContextType = ReturnType<typeof useTodos>;

const TodoContext = createContext<TodoContextType | null>(null);

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const todo = useTodos();
  return <TodoContext.Provider value={todo}>{children}</TodoContext.Provider>;
};

export const useTodoContext = () => {
  const ctx = useContext(TodoContext);
  if (!ctx) throw new Error("Must be used inside provider");
  return ctx;
};
