import React from "react";
import Card from "../Card";
// import "./style.css";

function CardBack(props) {
  return (
    <div className="card">
    <h3>Back</h3>
    <p>
        Descriptive text about the job
    </p>
    <button onClick={Card.handleClick}>Click to flip</button>
    </div>
  );
}

export default CardBack;
