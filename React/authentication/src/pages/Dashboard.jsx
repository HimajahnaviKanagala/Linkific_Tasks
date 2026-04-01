import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "../api/axios";

export default function Dashboard() {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/posts?_limit=5")
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <p>Welcome {user?.email || user?.name}</p>

      <h2>Latest Posts</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="card">
            <h3> Title: {post.title}</h3>
            <p>Body: {post.body}</p>
          </div>
        ))
      )}
    </div>
  );
}
