import Link from "next/link";

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  return res.json();
}

export default async function Blog() {
  const posts = await getPosts();

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Blog</h1>
      {posts.slice(0, 10).map((post: any) => (
        <Link
          key={post.id}
          href={`/blog/${post.id}`}
          className="block p-4 bg-white rounded-lg shadow hover:bg-gray-50"
        >
          {post.title}
        </Link>
      ))}
    </div>
  );
}
