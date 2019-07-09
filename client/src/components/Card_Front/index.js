import React from "react";
import Card from "../Card";

// import "./style.css";


function CardFront(props) {
  return (
    <div className="card">
    <h3>Front</h3>
    <h1>Job Title</h1>
    <br></br>
    <h2>Company</h2>
    <button onClick={Card.handleClick}>Click to flip</button>
    </div>
  );
}

export default CardFront;
