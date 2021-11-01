import React from "react";
import { Link } from "react-router-dom";
import multicecream from "../image/multicecream.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${multicecream})` }}>
      <div className="headerContainer">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>
          {" "}
          Real ice cream
          <br />
          for real ice cream lovers
        </h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Link to="/brand">
          <button> ORDER NOW </button>
        </Link>
        <br />
        <br />
      </div>
    </div>
  );
}

export default Home;
