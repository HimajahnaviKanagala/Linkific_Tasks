import type { Todo } from "../types/Todo";

export function isCompleted(todo: Todo): boolean {
  return todo.completed === true;
}
