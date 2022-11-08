import React from 'react'
import Item from './Item'

function ItemListContainer() {
  return (
    <div>
        <h1> Catálogo </h1>
        <Item title = "Procesador I5" price = {30000}></Item>
    </div>
  )
}

export default ItemListContainer