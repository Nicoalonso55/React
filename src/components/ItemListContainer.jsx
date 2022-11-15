import React from 'react';
import Item from './Item';
import getItems from '../MockService/mockService';
import  {useState, useEffect} from 'react';


function ItemListContainer() {
  const [products, setProducts] = useState([]);
  useEffect (
    () => { 
      getItems().then( (respuestaDatos) =>{
      setProducts (respuestaDatos);
      });
    }, []

  
  );
  
  return (
    
    <div className='catalogo'>
        {products.map((products) => {
          return (
            <Item
              key=    {products.id}
              id=     {products.id}
              imgurl= {products.imgurl}
              title=  {products.title}
              price=  {products.price}
              />
          )
        })}
    </div>
  );
}

export default ItemListContainer