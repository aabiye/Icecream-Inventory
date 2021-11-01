import React from "react";
import { Link } from "react-router-dom";
import "../styles/Misc.css";


function FlavorItem({ id, image, name, price, quantity }) {
 
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1 id="bnames"> {name} </h1>
      <p className="checkoutProduct__price">
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <h3 > Quantity: {quantity} </h3>
      <button >Add to Cart</button>
    </div>
  );
}

export default FlavorItem;
