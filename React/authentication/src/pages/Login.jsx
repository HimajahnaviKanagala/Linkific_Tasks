import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { Link } from "react-router-dom";

function Login() {
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const getStrength = (password) => {
    if (password.length < 6) return "Weak";
    if (password.length < 10) return "Medium";
    return "Strong";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = "demo-token";
    if (remember) {
      localStorage.setItem("token", token);
    } else {
      sessionStorage.setItem("token", token);
    }
    login(email, password);
    navigate("/");
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className={`strength ${getStrength(password).toLowerCase()}`}>
          Strength: {getStrength(password)}
        </p>
        <p className="forgot-link">
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>
        <div className="remember-me">
          <input
            type="checkbox"
            id="remember"
            onChange={(e) => setRemember(e.target.checked)}
          />
          <label htmlFor="remember">Remember Me</label>
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="oauth">
        <p>Or login with Google</p>
        <GoogleLogin
          onSuccess={(res) => {
            loginWithGoogle(res.credential);
            navigate("/");
          }}
          onError={() => console.log("Error")}
        />
      </div>
    </div>
  );
}
export default Login;
