import { useTodoContext } from "../../context/TodoContext";

const TodoFilter = () => {
  const { setFilter, filter } = useTodoContext();

  const baseStyle = "px-4 py-1.5 rounded-lg text-sm font-medium transition";

  return (
    <div className="flex justify-center gap-3 bg-white p-2 rounded-xl shadow-sm">
      <button
        onClick={() => setFilter("all")}
        className={`${baseStyle} ${
          filter === "all"
            ? "bg-blue-500 text-white shadow"
            : "text-gray-500 hover:bg-gray-100"
        }`}
      >
        All
      </button>

      <button
        onClick={() => setFilter("active")}
        className={`${baseStyle} ${
          filter === "active"
            ? "bg-blue-500 text-white shadow"
            : "text-gray-500 hover:bg-gray-100"
        }`}
      >
        Active
      </button>

      <button
        onClick={() => setFilter("completed")}
        className={`${baseStyle} ${
          filter === "completed"
            ? "bg-blue-500 text-white shadow"
            : "text-gray-500 hover:bg-gray-100"
        }`}
      >
        Done
      </button>
    </div>
  );
};

export default TodoFilter;
