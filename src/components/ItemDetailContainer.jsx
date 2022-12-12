import React from "react";
import ItemDetail from "./ItemDetail";
import { getSingleItem } from "../MockService/mockService";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    getSingleItem(id).then((respuestaDatos) => {
      setProduct(respuestaDatos);
      setIsLoading(false);
    });
  }, []);

  if (isLoading){
    return (<Loader/>)
  }
  return <ItemDetail product={product} />;
}

export default ItemDetailContainer;
