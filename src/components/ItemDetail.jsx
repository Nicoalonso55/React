import React from 'react'
function ItemDetail ({product}) {
    return (
        <div>
            <div>
                <img src={product.imgurl} alt="" />
            </div>
            <div>
                <h2>{product.title}</h2>
                <p>{product.descripcion}</p>
                <h4>{product.price}</h4>
            </div>
        </div>
    );
}

export default ItemDetail;