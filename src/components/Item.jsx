import React from "react";
import products from "../data/data";
import { Link } from "react-router-dom";

function Item({ title, imgurl, price, id }) {
  const urlDetail = `/detail/${id}`;

  return (
    <div className="products">
      <div className="card-img">
        <img src={imgurl} alt={title} />
      </div>

      <h3>{title}</h3>

      <p>{price}</p>

      <Link to={urlDetail}>
        <button>Ver más</button>
      </Link>
    </div>
  );
}

export default Item;
