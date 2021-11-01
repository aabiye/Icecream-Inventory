import React from "react";
import { FlavorList } from "../products/FlavorList";
import FlavorItem from "../components/FlavorItem";
import "../styles/Brand.css";
import { BrandingWatermark } from "@material-ui/icons";

function Flavor() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Flavors</h1>
      <div className="menuList">
        {FlavorList.map((flavorItem, key) => {
          return (
            <FlavorItem
              key={key}
              image={flavorItem.image}
              name={flavorItem.name}
              price={flavorItem.price}
              quantity={flavorItem.quantity}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Flavor;
