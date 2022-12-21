import React, {useContext} from 'react';
import { cartContext } from './CartContext';
import {createOrder} from "../firestore/firestor";
import CartForm from './CartForm';

  


export function CartView() {
    const {cart, removeItem, removeCart, priceInCart} = useContext(cartContext);
    

    if (cart.length===0) return <h1>Carrtio vacío</h1>

    async function handleCheckout(evt, data) {
      const order = {
        buyer: data,
        items: cart,
        total: priceInCart(),
        date: new Date(),
      }
      const  orderId = await createOrder(order);
      console.log(orderId)
      alert("Gracias por su compra. Codigo de Compra: "+orderId);
      removeCart();
    }
    
 
  return (
    <div >
        
        {
            cart.map(item=> <div key ={item.id} >
                <h2>{item.title}</h2>
                <h2>${item.price}</h2>
                <h2>Cantidad: {item.count}</h2>
                <button onClick={() => removeItem(item.id) }>Quitar</button>
                <br />
                <br />
                
            </div>)
        }
        <h3>Total: {priceInCart()} </h3> 
        
        <button onClick={() => removeCart() }>Vaciar Carrito</button>
      
        <CartForm onSubmit= {handleCheckout}/>
       
    </div>
  )
}



export default CartView