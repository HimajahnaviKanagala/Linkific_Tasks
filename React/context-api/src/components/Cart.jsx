import { useCart } from "../context/CartContext";

function Cart() {
  const { items, addItem, removeItem } = useCart();

  return (
    <div className="card">
        <h3>Shopping Cart</h3>
      <button onClick={() => addItem({ id: Date.now(), name: "Item" })}>
        Add Item
      </button>

      {items.map((item) => (
        <p key={item.id}>
          {item.name}
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </p>
      ))}
    </div>
  );
}
export default Cart;
