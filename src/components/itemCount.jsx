import React, { useState } from "react";

function ItemCount({ stock, onAddToCart }) {
  const [count, setCount] = useState(1);

  function add() {
    if (count < stock) setCount(count + 1);
  }

  function sub() {
    if (count > 1) setCount(count - 1);
  }

  return (
    <div>
      <div>
        <button onClick={sub}>-</button>
        {count}
        <button onClick={add}>+</button>
      </div>
      <div>
        <button onClick={() => onAddToCart(count)}>Agregar al Carrito</button>
      </div>
    </div>
  );
}

export default ItemCount;
