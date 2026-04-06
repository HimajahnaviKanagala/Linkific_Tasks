import AddTodo from "./components/todo/AddTodo";
import TodoFilter from "./components/todo/TodoFilter";
import TodoList from "./components/todo/TodoList";
import { TodoProvider } from "./context/TodoContext";

const App = () => {
  return (
    <TodoProvider>
      <div className="max-w-xl mx-auto mt-10 space-y-4">
        <h1 className="text-2xl font-bold">TS Todo App</h1>
        <AddTodo />
        <TodoFilter />
        <TodoList />
      </div>
    </TodoProvider>
  );
};
export default App;
