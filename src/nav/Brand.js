import React from "react";
import { BrandList } from "../products/BrandList";
import BrandItem from "../components/BrandItem";
import "../styles/Brand.css";
import { BrandingWatermark } from "@material-ui/icons";

function Brand() {
  return (
    <div className="menu">
      <h1 className="bTitle">Our Top Quality Ice Cream Brands</h1>
      <div className="menuList">
        {BrandList.map((brandItem, key) => {
          return (
            <BrandItem
              key={key}
              image={brandItem.image}
              name={brandItem.name}
            
            />
          );
        })}
      </div>
    </div>
  );
}

export default Brand;
