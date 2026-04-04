import { useEffect, useState } from "react";
import supabase from "../supabase/config";

function Todo() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [user, setUser] = useState(null);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });
  }, []);

  const fetchTodos = async () => {
    if (!user) return;

    const { data } = await supabase
      .from("todos")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, [user]);

  const addOrUpdateTodo = async () => {
    if (!text) return;

    if (editingId) {
      await supabase.from("todos").update({ text }).eq("id", editingId);
      setEditingId(null);
    } else {
      await supabase.from("todos").insert([{ text, user_id: user.id }]);
    }
    setText("");
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await supabase.from("todos").delete().eq("id", id);
    fetchTodos();
  };

  const startEdit = (todo) => {
    setText(todo.text);
    setEditingId(todo.id);
  };

  return (
    <div className="min h-screen bg-linear-to-br from-green-100 to-blue-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-xl">
        <h2 className="text-xl font-bold mb-4 text-center text-gray-700">
          My Todos
        </h2>
        <div className="flex gap-2 mb-4">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border p-2 flex-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Add a todo...."
          />
          <button
            onClick={addOrUpdateTodo}
            className="bg-green-500 hover:bg-green-600 text-white px-4 rounded-lg transition"
          >
            {editingId ? "Update" : "Add"}
          </button>
        </div>
        <div className="space-y-3">
          {todos.map((t) => (
            <div
              key={t.id}
              className="flex justify-between items-center bg-gray-50 p-3 rounded shadow-sm hover:shadow-md transition"
            >
              <span className="text-gray-800">{t.text}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => startEdit(t)}
                  className="text-white bg-blue-500 hover:bg-blue-700 px-4 rounded-lg transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTodo(t.id)}
                  className="text-white bg-red-500 hover:bg-red-700 px-4 rounded-lg transition"
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
