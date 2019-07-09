import React from "react";
import "./style.css";
// import ReactCardFlip from 'react-card-flip';
// import CardFront from '../Card_Front'
// import CardBack from '../Card_Back'
// import ReactCardFlip, {YOUR_FRONT_CCOMPONENT} from 'react-card-flip';
// import ReactCardFlip, {YOUR_BACK_COMPONENT} from 'react-card-flip';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually



class Card extends React.Component {
  function EmployeeCard(props){
    return(
      <div className="card-container container">
          <h1>Job Title:</h1><br>
          <h2>Employer:</h2><br>
          <h2>Salary</h2><br>
          <h2>Location:</h2><br>
      </div>
    )
  }
}


export default EmployeeCard;
