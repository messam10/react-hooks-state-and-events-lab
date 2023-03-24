import React, { useState } from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState(false);

  const btn = () => setCart((cart) => !cart);

  return (
    <li className={cart ? "in-cart" : "add"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={btn} >{cart ? "Remove From" : "Add to"} Cart</button>
    </li>
  );
}

export default Item;
