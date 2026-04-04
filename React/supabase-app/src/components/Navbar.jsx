import { useNavigate } from "react-router-dom";
import supabase from "../supabase/config";

function Navbar() {
  const navigate = useNavigate();

  const logout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <div className="bg-linear-to-r from-indigo-400 to-purple-400 shadow-lg px-6 py-3 flex justify-between items-center rounded">
      <h1 className="text-white text-xl font-semibold tracking-wide">
        🚀 Supabase App
      </h1>

      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate("/")}
          className="text-white hover:text-gray-200 transition"
        >
          Home
        </button>

        <button
          onClick={() => navigate("/blog")}
          className="text-white hover:text-gray-200 transition"
        >
          Blog
        </button>
        <button
          onClick={() => navigate("/todo")}
          className="text-white hover:text-gray-200 transition"
        >
          Todo
        </button>

        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-lg shadow transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
