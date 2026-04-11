import PostList from "../components/PostList";

function Home() {
  return (
    <div className="min h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">Posts Dashboard</h1>
      <PostList />
    </div>
  );
}
export default Home;
