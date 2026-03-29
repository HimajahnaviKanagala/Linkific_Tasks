import { useState } from "react";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  function addTodo() {
    if (task.trim() === "") return;
    setTodos([...todos, { text: task, done: false }]);
    setTask("");
  }
  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  }
  return (
    <div className="card">
      <h2>Todo List</h2>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter Task"
      /><br></br><br></br>
      <button onClick={addTodo}>Add</button>

      {todos.map((todo) => (
        <div key={todo.id}>
          <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
            {todo.text}
          </span>
          <button onClick={() => toggleTodo(todo.id)}>✔</button>
          <button onClick={() => deleteTodo(todo.id)}>❌</button>
        </div>
      ))}
    </div>
  );
}
export default Todos;
