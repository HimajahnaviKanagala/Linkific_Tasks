import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import useLocalStorage from "../hooks/useLocalStorage";
function Todos() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos",
  );

  const [todos, setTodos] = useLocalStorage("todos", []);

  useEffect(() => {
    if (data.length > 0 && todos.length === 0) {
      setTodos(data);
    }
  }, [data]);

  if (loading && todos.length === 0) return <p>Loading.....</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="card">
      <h2>Todos Title</h2>
      {todos.slice(0, 10).map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </div>
  );
}
export default Todos;
