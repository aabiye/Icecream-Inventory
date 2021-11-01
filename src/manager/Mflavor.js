import React from "react";
import { FlavorList } from "../products/FlavorList";
import FlavorItem from "../components/FlavorItem";
import "../styles/Brand.css";
import { BrandingWatermark } from "@material-ui/icons";

function Mflavor() {
  return (
    <div className="menu">
      <div className="taskbtn">
        <button
          className="btn btn-outline-dark btn-block rounded-pill"
          id="creatTaskBtn"
          // onClick={() => setModal(true)}
        >
          Add New Flavor
        </button>
      </div>
      <h1 className="menuTitle">Our Flavors</h1>
      <div className="menuList">
        {FlavorList.map((flavorItem, key) => {
          return (
            <FlavorItem
              key={key}
              image={flavorItem.image}
              name={flavorItem.name}
              quantity={flavorItem.quantity}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Mflavor;
