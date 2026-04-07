export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
export type Filter = "all" | "active" | "completed";

export type TodoState =
  | { status: "loading" }
  | { status: "success"; todos: Todo[] }
  | { status: "error"; error: string };

// utility type usage
export type UpdateTodo = Partial<Todo>;
