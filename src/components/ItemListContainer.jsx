import React from "react";
import Item from "./Item";
import getItems from "../MockService/mockService";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  console.log(useParams());
  const {id}= useParams();
  useEffect(() => {
    getItems(id).then((respuestaDatos) => {
      setProducts(respuestaDatos);
    });
  }, [id]);

  return (
    <div className="catalogo">
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
    </div>
  );
}

export default ItemListContainer;
