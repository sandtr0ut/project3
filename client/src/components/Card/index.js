import React from "react";
import "./style.css";
import ReactCardFlip from 'react-card-flip';
import CardFront from '../Card_Front'
import CardBack from '../Card_Back'
// import ReactCardFlip, {YOUR_FRONT_CCOMPONENT} from 'react-card-flip';
// import ReactCardFlip, {YOUR_BACK_COMPONENT} from 'react-card-flip';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually



class Card extends React.Component {
  constructor() {
    super();
      this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
 
  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
 

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <CardFront key="front">
        <button onClick={this.handleClick}>Click to flip</button>
        </CardFront>
 
        <CardBack key="back">
          This is the back of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </CardBack>
      </ReactCardFlip>
    )
  }
}


export default Card;
