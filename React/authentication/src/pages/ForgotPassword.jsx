import { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = () => {
    if (!email) {
      setMessage("Please enter your email!");
      return;
    }
    setMessage("Reset link sent! check your email 📩");
    setEmail("");
  };

  return (
    <div className="auth-container">
      <h2>Forgot Password</h2>
      <input
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleReset}>Send Reset Link</button>
      {message && <p className="success-msg">{message}</p>}
    </div>
  );
}
export default ForgotPassword;
