import products from "../data/products";
import Card from "./Card";
import ProductCard from "./ProductCard";

function ProductList() {
  return (
    <>
     <Card>
         <h2>Products</h2>
      {products.length>0 ?(
        products.map(product=>(
            <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            />
        ))
      ):(
        <p>No Products available</p>
      )}
     </Card>
    </>
  );
}
export default ProductList;
