import { useTodoContext } from "../../context/TodoContext";
import type { Todo } from "../../types/Todo";

const TodoItem = ({ todo }: { todo: Todo }) => {
  const { toggleTodo, deleteTodo } = useTodoContext();

  return (
    <div className="flex items-center justify-between bg-white shadow-sm border rounded-xl px-4 py-3 hover:shadow-md transition group">
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => toggleTodo(todo.id)}
      >
        <div
          className={`w-5 h-5 flex items-center justify-center rounded-full border-2 transition ${
            todo.completed ? "bg-green-500 border-green-500" : "border-gray-300"
          }`}
        >
          {todo.completed && <span className="text-white text-xs">✓</span>}
        </div>

        <span
          className={`text-sm md:text-base transition ${
            todo.completed ? "line-through text-gray-400" : "text-gray-700"
          }`}
        >
          {todo.text}
        </span>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          deleteTodo(todo.id);
        }}
        className="bg-red-400 hover:bg-red-600 text-white px-2 py-1 rounded"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
