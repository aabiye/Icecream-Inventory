import React from "react";
import { Link } from "react-router-dom";
import "../styles/Misc.css";

function BrandItem({ image, name }) {
  return (
    <div className="menuItem" id="card" >
      <div   style={{ backgroundImage: `url(${image})` }}> </div>
      <h1 id="bnames"> {name} </h1>
      <Link to="/flavor">
        <button type="submit"> View Flavors</button>
      </Link>
    </div>
  );
}

export default BrandItem;
