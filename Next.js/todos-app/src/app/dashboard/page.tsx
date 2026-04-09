import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="bg-gray-900 p-6 rounded-xl shadow border border-gray-800">
        <TodoForm />
      </div>
      <div className="bg-gray-900 p-6 rounded-xl shadow border border-gray-800">
        <TodoList />
      </div>
    </div>
  );
}
