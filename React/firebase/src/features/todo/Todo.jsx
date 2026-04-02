import {
  addDoc,
  collection,
  deleteDoc,
  onSnapshot,
  doc,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/config";

function Todo() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  // 🔄 Real-time fetch
  useEffect(() => {
    return onSnapshot(collection(db, "todos"), (snap) => {
      setTodos(snap.docs.map((d) => ({ ...d.data(), id: d.id })));
    });
  }, []);

  // ➕ Add Todo
  const addTodo = async () => {
    if (!text.trim()) return;
    await addDoc(collection(db, "todos"), {
      text,
      completed: false,
    });
    setText("");
  };

  // ❌ Delete Todo
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  // ✏️ Update Todo
  const updateTodo = async (id) => {
    if (!editText.trim()) return;
    await updateDoc(doc(db, "todos", id), {
      text: editText,
    });
    setEditId(null);
    setEditText("");
  };

  // ✅ Toggle Complete
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-xl bg-white p-6 rounded-2xl shadow-lg">
        {/* Title */}
        <h2 className="text-2xl font-bold mb-4 text-center">✅ Todo App</h2>

        {/* Add Todo */}
        <div className="flex gap-2 mb-4">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={addTodo}
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
          >
            Add
          </button>
        </div>

        {/* Todo List */}
        <div className="space-y-3">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex justify-between items-center bg-gray-50 p-3 rounded-xl shadow-sm"
            >
              {/* Left */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleComplete(todo)}
                />

                {editId === todo.id ? (
                  <input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="border px-2 py-1 rounded"
                  />
                ) : (
                  <span
                    className={`${
                      todo.completed ? "line-through text-gray-400" : ""
                    }`}
                  >
                    {todo.text}
                  </span>
                )}
              </div>

              {/* Right Buttons */}
              <div className="flex gap-2">
                {editId === todo.id ? (
                  <button
                    onClick={() => updateTodo(todo.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setEditId(todo.id);
                      setEditText(todo.text);
                    }}
                    className="bg-yellow-400 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                )}

                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Todo;
