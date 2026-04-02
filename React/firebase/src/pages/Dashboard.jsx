import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Dashboard() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "💬 Chat",
      desc: "Real-time messaging system",
      color: "bg-blue-500",
      path: "/chat",
    },
    {
      title: "✅ Todo",
      desc: "Manage your daily tasks",
      color: "bg-green-500",
      path: "/todo",
    },
    {
      title: "📝 Blog",
      desc: "Create and share posts",
      color: "bg-purple-500",
      path: "/blog",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() => navigate(card.path)}
              className="cursor-pointer bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center text-white rounded-full mb-4 ${card.color}`}
              >
                {card.title.split(" ")[0]}
              </div>

              <h2 className="text-xl font-semibold">{card.title}</h2>
              <p className="text-gray-500 mt-2">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
