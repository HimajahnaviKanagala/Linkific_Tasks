import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../supabase/config";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const login = async () => {
    if (!email || !password) {
      alert("Please fill all fields!");
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) alert(error.message);
    else {
      setEmail("");
      setPassword("");
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-100 to-indigo-200">
      <div className="bg-white p-8 shadow-xl rounded-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">
          Welcome Back 👋
        </h2>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className=" w-full mb-3 border p-3 rounded-lg focus:otline-none focus:ring-blue-400"
        />
        <input
          placeholder="Password"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-3 border p-3 rounded-lg focus:otline-none focus:ring-blue-400"
        />
        <button
          onClick={login}
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-600 text-white py-3 w-full rounded-lg transition shadow"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
        <p className="text-sm text-center text-gray-500 mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Login;
