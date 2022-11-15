import React from 'react';
import ItemDetail from './ItemDetail';
import {getSingleItem} from '../MockService/mockService';
import  {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  useEffect (
    () => { 
      getSingleItem().then( (respuestaDatos) =>{
      setProduct (respuestaDatos);
      });
    }, []

  
  );
  

    
   return <ItemDetail product = {product} />
 
}

export default ItemDetailContainer