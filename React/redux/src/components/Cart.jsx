import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../features/cart/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const { items, total } = useSelector((state) => state.cart);

  return (
    <div className="card">
      <h2>Cart</h2>
      <button
        onClick={() => dispatch(addToCart({ id: Date.now(), price: 100 }))}
      >
        Add Item
      </button>
      <p>Total: ₹{total}</p>

      {items.map((item) => (
        <p key={item.id}>
          ₹{item.price}
          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </p>
      ))}
    </div>
  );
}
export default Cart;
