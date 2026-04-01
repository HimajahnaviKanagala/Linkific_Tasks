import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");

    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded);
      } catch {
        setUser({ email: "demo@gmail.com" });
      }
    }

    setLoading(false);
  }, []);

  const login = (email, password) => {
    if (email && password) {
      const fakeToken = "demo-token";

      localStorage.setItem("token", fakeToken);
      setUser({ email });
    }
  };

  const loginWithGoogle = (token) => {
    localStorage.setItem("token", token);
    const decoded = jwtDecode(token);
    setUser(decoded);
  };

  const logout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, loginWithGoogle, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
