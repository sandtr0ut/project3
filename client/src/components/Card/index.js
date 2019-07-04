import React from "react";
import "./style.css";
import ReactCardFlip from 'react-card-flip';
// import ReactCardFlip, {YOUR_FRONT_CCOMPONENT} from 'react-card-flip';
// import ReactCardFlip, {YOUR_BACK_COMPONENT} from 'react-card-flip';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
class App extends React.Component {
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
        <YOUR_FRONT_COMPONENT key="front">
          This is the front of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </YOUR_FRONT_COMPONENT>
 
        <YOUR_BACK_COMPONENT key="back">
          This is the back of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </YOUR_BACK_COMPONENT>
      </ReactCardFlip>
    )
  }
}


export default Card;
