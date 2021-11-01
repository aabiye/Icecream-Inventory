import React from "react";
import multiple from "../image/multiple.jpg";
import "../styles/About.css";


function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${multiple})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Since 2021, we’ve kept it simple: source the finest ingredients and transform them into the most luxurious ice cream. Because we believe that luxury is found wherever you are – in moments large and small. Here’s to choosing deliciousness every single time.
        </p>
      </div>
    </div>
  );
}

export default About;
