import { createContext, useContext } from "react";
import { useTodos } from "../hooks/useTodos";

type TodoContextType = ReturnType<typeof useTodos>;

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const value = useTodos();
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const useTodoContext = () => {
  const ctx = useContext(TodoContext);
  if (!ctx) throw new Error("Must be used inside TodoProvider");
  return ctx;
};
