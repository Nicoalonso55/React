import React, {useContext} from 'react';
import { cartContext } from './CartContext';
  


function CartView() {
    const {cart, removeItem, removeCart} = useContext(cartContext);
    if (cart.length===0) return <h1>Carrtio vacío</h1>
  return (
    <div>
        
        {
            cart.map(item=> <div>
                <h2>{item.title}</h2>
                <h2>${item.price}</h2>
                <h2>Cantidad: {item.count}</h2>
                <button onClick={() => removeItem(item.id) }>Quitar</button>
                <br />
                <br />
                
            </div>)
        }
        <button onClick={() => removeCart() }>Vaciar Carrito</button>
    </div>
  )
}

export default CartView