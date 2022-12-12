import React from "react";
import ItemCount from "./itemCount";
import { useContext } from "react";
import { cartContext } from "./CartContext";


function ItemDetail({ product }) {
  const {addToCart}= useContext(cartContext);
  function onAddToCart(count) {
    alert(`${count} items agregados`);
    addToCart(product, count);
  }
  return (
    <div>
      <div>
        <img src={product.imgurl} alt="" />
      </div>
      <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h4>{product.price}</h4>
        <ItemCount onAddToCart={onAddToCart} stock={product.stock} />
      </div>
    </div>
  );
}

export default ItemDetail;
