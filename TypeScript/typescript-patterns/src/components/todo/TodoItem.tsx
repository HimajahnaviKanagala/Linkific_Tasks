import { useState } from "react";
import { useTodoContext } from "../../context/TodoContext";
import type { Todo } from "../../types/Todo";

interface Props {
  todo: Todo;
}

const TodoItem = ({ todo }: Props) => {
  const { toggleTodo, deleteTodo, editTodo } = useTodoContext();

  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleSave = () => {
    if (!newText.trim()) return;
    editTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between bg-white shadow-sm border rounded-xl px-4 py-3 hover:shadow-md transition group">
      <div
        className="flex items-center gap-3 flex-1"
        onClick={() => !isEditing && toggleTodo(todo.id)}
      >
        <div
          className={`w-5 h-5 flex items-center justify-center rounded-full border-2 transition ${
            todo.completed ? "bg-green-500 border-green-500" : "border-gray-300"
          }`}
        >
          {todo.completed && <span className="text-white text-xs">✓</span>}
        </div>

        {isEditing ? (
          <input
            className="border px-2 py-1 rounded w-full text-sm"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            autoFocus
          />
        ) : (
          <span
            className={`text-sm md:text-base ${
              todo.completed ? "line-through text-gray-400" : "text-gray-700"
            }`}
          >
            {todo.text}
          </span>
        )}
      </div>

      <div className="flex gap-2 ml-3">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white px-2 py-1 rounded text-sm"
            >
              Save
            </button>

            <button
              onClick={() => {
                setIsEditing(false);
                setNewText(todo.text);
              }}
              className="bg-gray-300 px-2 py-1 rounded text-sm"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsEditing(true);
              }}
              className="bg-blue-500 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm"
            >
              Edit
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteTodo(todo.id);
              }}
              className="bg-red-500 hover:bg-red-700 text-white px-5 py-2 rounded-lg text-sm"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
