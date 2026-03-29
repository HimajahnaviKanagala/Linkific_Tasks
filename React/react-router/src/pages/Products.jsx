import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error while fetching the data!");
        setLoading(false);
      });
  }, []);
  if (loading) return <p>Loading....</p>;
  if (error) return <p>{error}</p>;
  return (
    <div className="card">
      <h1>Products</h1>
      {products.map((product) => (
        <p key={product.id}>
          <Link to={`/products/${product.id}`}>{product.title}</Link>
        </p>
      ))}
    </div>
  );
}
export default Products;
