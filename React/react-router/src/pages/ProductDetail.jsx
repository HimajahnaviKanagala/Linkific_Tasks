import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);
  if (!product) return <p>Loading....</p>;
  return (
    <div className="card">
      <h2>Product Details</h2>
      <p>
        <strong>ID:</strong> {id}
      </p>
      <p>
        <strong>Title:</strong> {product.title}
      </p>
      <p>
        <strong>Description:</strong> {product.description}{" "}
      </p>
      <p>
        <strong>Category:</strong> {product.category}
      </p>
      <p>
        <strong>Price:</strong> {product.price}
      </p>
    </div>
  );
}
export default ProductDetail;
