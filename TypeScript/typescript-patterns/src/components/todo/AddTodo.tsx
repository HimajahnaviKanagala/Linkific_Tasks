import { useState } from "react";
import { useTodoContext } from "../../context/TodoContext";

const AddTodo = () => {
  const [text, setText] = useState<string>("");
  const { addTodo } = useTodoContext();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!text.trim()) return;
        addTodo(text);
        setText("");
      }}
      className="flex items-center gap-3 bg-white shadow-md rounded-xl p-3"
    >
      <input
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setText(e.target.value)
        }
        className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 active:scale-95 transition text-white px-5 py-2 rounded-lg font-medium shadow"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
