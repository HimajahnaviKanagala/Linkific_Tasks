import { useTodoContext } from "../../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { state, todos } = useTodoContext();

  if (state.status === "loading") {
    return <p className="text-center">Loading....</p>;
  }
  if (state.status === "error") {
    return <p className="text-red-500">{state.error}</p>;
  }
  if (!todos.length) {
    return (
      <div className="text-center py-10 bg-white rounded-xl shadow-sm">
        <p className="text-gray-400 text-lg">No Todos Yet 📝</p>
        <p className="text-sm text-gray-300 mt-1">
          Add your first task to get started
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-4 space-y-3">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
