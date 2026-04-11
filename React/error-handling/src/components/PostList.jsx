import { useEffect, useRef, useState } from "react";
import { showError, showInfo, showSuccess } from "../utils/toastConfig";
import { fetchWithRetry } from "../utils/fetchWithRetry";
import { fetchPosts } from "../api/api";
import Loader from "./Loader";
import RetryButton from "./RetryButton";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const hasFecthed = useRef(false);

  const loadData = async () => {
    setLoading(true);
    setError(null);

    showInfo("Fetching posts...");

    try {
      const data = await fetchWithRetry(fetchPosts);
      setPosts(data.slice(0, 9));
      showSuccess("Posts loaded successfully!");
    } catch (error) {
      setError(error.message);
      showError(error.message || "Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (hasFecthed.current) return;
    hasFecthed.current = true;
    loadData();
  }, []);

  if (loading) return <Loader />;

  if (error) {
    return (
      <div className="text-center">
        <p className="text-red-500 font-semibold">Error: {error}</p>
        <RetryButton onRetry={loadData} />
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-100 py-2 px-2">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <ul className="space-y-4">
            {posts.map((post) => (
              <li
                key={post.id}
                className="p-4 border rounded-xl hover:shadow-md hover:border-blue-400 transition duration-200"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full font-bold">
                    {post.id}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{post.title}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-center text-sm text-gray-400 mt-6">
          Showing top {posts.length} posts
        </p>
      </div>
    </div>
  );
}
export default PostList;
