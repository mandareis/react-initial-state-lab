import React from "react";

class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsLeft: this.props.initialCount,
    };
  }

  render() {
    if (this.state.secondsLeft === 0) {
      return <h1>Boom!</h1>;
    }
    return <div>{this.props.initialCount} seconds left before I go boom!</div>;
  }
}
export default Bomb;
