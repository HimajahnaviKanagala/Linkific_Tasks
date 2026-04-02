import {
  addDoc,
  collection,
  onSnapshot,
  serverTimestamp,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/config";

function Blog() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🔄 Fetch posts
  useEffect(() => {
    return onSnapshot(collection(db, "posts"), (snap) => {
      setPosts(
        snap.docs.map((d) => ({
          id: d.id,
          ...d.data(),
        })),
      );
    });
  }, []);

  // ☁️ Upload to Cloudinary
  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "bk1ptrua");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dqektqwlm/image/upload",
      {
        method: "POST",
        body: formData,
      },
    );

    const data = await res.json();
    return data.secure_url;
  };

  // ➕ Create Post
  const createPost = async () => {
    if (!title || !file) {
      alert("Please add title and image");
      return;
    }

    try {
      setLoading(true);

      const imageUrl = await uploadImage(file);

      await addDoc(collection(db, "posts"), {
        title,
        image: imageUrl,
        createdAt: serverTimestamp(),
      });

      setTitle("");
      setFile(null);
    } catch (error) {
      console.error(error);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  // ❌ Delete Post
  const deletePost = async (id) => {
    if (confirm("Are you sure you want to delete this post?")) {
      await deleteDoc(doc(db, "posts", id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Create Post */}
        <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
          <h2 className="text-xl font-bold mb-4">📝 Create Post</h2>

          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title..."
            className="w-full border p-3 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <div className="flex items-center justify-between mt-3">
            <label className="block mb-3">
              <span className="sr-only">Choose file</span>

              <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                className="hidden"
                id="fileUpload"
              />

              <label
                htmlFor="fileUpload"
                className="cursor-pointer bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
              >
                📁 Choose Image
              </label>

              {file && (
                <p className="text-sm text-gray-500 mt-2">
                  Selected: {file.name}
                </p>
              )}
            </label>

            <button
              onClick={createPost}
              disabled={loading}
              className="bg-green-500 text-white px-8 py-2 rounded-lg hover:bg-green-600 transition disabled:bg-gray-400"
            >
              {loading ? "Uploading..." : "Publish"}
            </button>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((p) => (
            <div
              key={p.id}
              className="relative bg-white rounded-2xl shadow-md overflow-hidden group"
            >
              {/* Image */}
              <img
                src={p.image}
                alt="post"
                className="w-full h-90 object-cover group-hover:scale-105 transition duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-4">
                <h2 className="text-white text-lg font-semibold mb-2">
                  {p.title}
                </h2>

                <button
                  onClick={() => deletePost(p.id)}
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 w-fit"
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
