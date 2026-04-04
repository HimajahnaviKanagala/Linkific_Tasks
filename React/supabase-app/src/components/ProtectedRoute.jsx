import { useEffect, useState } from "react";
import supabase from "../supabase/config";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading....</p>;
  return user ? children : <Navigate to="/login" />;
}
export default ProtectedRoute;
