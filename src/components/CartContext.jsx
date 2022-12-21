import { createContext, useState } from "react";

export const cartContext = createContext();

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product, count) {
    let itemAlreadyInCart = cart.findIndex(
      (itemInCart) => itemInCart.id === product.id
    );
    let newCart = [...cart];
    if (itemAlreadyInCart !== -1) {
      newCart[itemAlreadyInCart].count += count;
      setCart(newCart);
    } else {
      product.count = count;
      newCart.push(product);
      setCart(newCart);
    }
  }

  function itemsInCart() {
    let total = 0;
    cart.forEach((itemInCart) => (total = total + itemInCart.count));
    return total;
  }

  function removeItem(itemId){
    const newCart = cart.filter((item)=> item.id !==itemId);
    setCart(newCart);


  }

  function removeCart(){
    const newCart = [];
    setCart(newCart);
  }

  function priceInCart(){
    let total= 0;
    cart.forEach((producto) => (total= total + (producto.price*producto.count)))
    return total;
  }

  return (
    <cartContext.Provider value={{ cart, addToCart, itemsInCart, removeItem, removeCart, priceInCart }}>
      {children}
    </cartContext.Provider>
  );
}
