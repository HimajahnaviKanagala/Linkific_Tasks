import { useEffect, useState } from "react";
import supabase from "../supabase/config";

function Blog() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });
  }, []);

  const fetchPosts = async () => {
    if (!user) return;

    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (!error) setPosts(data || []);
  };

  // ✅ Correct place for useEffect
  useEffect(() => {
    fetchPosts();
  }, [user]);

  const uploadImage = async () => {
    if (!file) return null;

    const fileName = `${Date.now()}-${file.name}`;

    const { error } = await supabase.storage
      .from("Posts") // ⚠️ make sure bucket name is lowercase 'posts'
      .upload(fileName, file);

    if (error) {
      console.error("Upload error:", error.message);
      return null;
    }

    const { data } = supabase.storage.from("Posts").getPublicUrl(fileName);

    return data.publicUrl;
  };

  const createPost = async () => {
    if (!title || !file || !user) return;

    const imageUrl = await uploadImage();

    if (!imageUrl) return;

    await supabase
      .from("posts")
      .insert([{ title, image: imageUrl, user_id: user.id }]);

    setTitle("");
    setFile(null);
    fetchPosts();
  };

  const deletePost = async (id) => {
    await supabase.from("posts").delete().eq("id", id);
    fetchPosts();
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-100 to-blue-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">My Blog</h2>

        <div className="bg-white p-5 rounded-2xl shadow mb-6">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 w-full mb-3 rounded-lg focus:ring-2 focus:ring-blue-400"
            placeholder="Post Title..."
          />

          <div className="flex justify-between items-center">
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />

            <button
              onClick={createPost}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg"
            >
              Publish
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {posts.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition"
            >
              <img
                src={p.image}
                className="w-full h-80 object-cover rounded-t-2xl"
              />

              <div className="p-4 flex justify-between items-center">
                <h3 className="font-semibold text-gray-700">{p.title}</h3>

                <button
                  onClick={() => deletePost(p.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
