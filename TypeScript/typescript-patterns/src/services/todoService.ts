import type { Todo } from "../types/Todo";

export const fetchTodos = async (): Promise<Todo[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, text: "Learn Advanced TS", completed: false },
        { id: 2, text: "Build Scalable App", completed: true },
      ]);
    }, 800);
  });
};
