import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "../features/todo/todoSlice";

function Todo() {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <h2>Todos</h2>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          dispatch(addTodo(text));
          setText("");
        }}
      >
        Add
      </button>
      {todos.map((todo) => (
        <p key={todo.id}>
          {todo.text}
          <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
        </p>
      ))}
    </div>
  );
}
export default Todo;
