import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/config";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = () => createUserWithEmailAndPassword(auth, email, password);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>
        <input
          className="border w-full p-2 mb-3 rounded"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border w-full p-2 mb-3 rounded"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-green-500 w-full text-white py-2 rounded hover:bg-green-600"
          onClick={signup}
        >
          Signup
        </button>
      </div>
    </div>
  );
}
export default Signup;
