async function getPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPost(id);

  return (
    <div className="space-y-4 block p-4 bg-white rounded-lg shadow hover:bg-gray-50">
      <h1 className="text-2xl font-bold">Title: {post.title}</h1>
      <p className="text-gray-600">Body: {post.body}</p>
    </div>
  );
}
