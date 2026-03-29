import { useState } from "react";

function Cart() {
  const [cart, setCart] = useState([]);

  function addItem() {
    const item = { id: Date.now(), name: "Item", qty: 1 };
    setCart([...cart, item]);
  }
  function removeItem(id) {
    setCart(cart.filter((item) => item.id !== id));
  }
  return (
    <div className="card">
      <h2>Cart</h2>
      <button onClick={addItem}>Add Item</button>
      {cart.map((item) => (
        <div key={item.id}>
          {item.name} - {item.qty}
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
export default Cart;
