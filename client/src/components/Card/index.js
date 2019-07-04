import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Card(props) {
  return (
    <div className="card" class="card">
      <div className="jobTitle">
        {props.title}
      </div>
    <div className="img-container">
      <img 
        alt={"This is image " + props.id} 
        src={props.image}
        onClick={() => props.checkIfClicked(props.id)}
      />
    </div>
  </div>
  );
}



export default Card;
