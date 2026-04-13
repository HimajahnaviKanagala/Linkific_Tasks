import ProductList from "../components/ProductList";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl text-gray-800 font-bold mb-6 text-center">
        Optimized Product App
      </h1>
      <div className=" bg-white rounded-3xl shadow-xl p-6 max-w-2xl mx-auto">
        <ProductList />
      </div>
    </div>
  );
}
export default Home;
