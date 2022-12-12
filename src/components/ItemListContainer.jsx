import React from "react";
import Item from "./Item";
import getItems from "../MockService/mockService";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

function ItemListContainer() {
  /*const loader = <h3>Cargando...</h3>*/
  const [products, setProducts] = useState(null);
  console.log(useParams());
  const { id } = useParams();
  useEffect(() => {
    getItems(id).then((respuestaDatos) => {
      setProducts(respuestaDatos);
    });
  }, [id]);

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
