import React from "react";
import Item from "./Item";
import getItems, {itemCategory} from "../firestore/firestor";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { async } from "@firebase/util";

function ItemListContainer() {
  /*const loader = <h3>Cargando...</h3>*/
  const [products, setProducts] = useState(null);
  const { id } = useParams();
  async function getItemsAsync() {
    if (!id) {
      let respuesta = await getItems();
      setProducts(respuesta);
    } else {
      let respuesta = await itemCategory(id);
      setProducts(respuesta);
    }
  }

  useEffect (() =>{
    getItemsAsync();
  },[id])
  

  return <> {products ? <div className="catalogo">
      
  {products.map((products) => {
    return (
      <Item
        key={products.id}
        id={products.id}
        imgurl={products.imgurl}
        title={products.title}
        price={products.price}
      />
    );
  })}
  
</div> : <Loader/>}</>

 
}

export default ItemListContainer;
