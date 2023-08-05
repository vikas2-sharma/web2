import React, { Component } from "react";

export default class HomeCopy extends Component {
  handleClick = () => {
    console.log("Hi there, user!");
  };

  render() {
    return (
      <div onClick={this.handleClick()}>
        <p>Click this text to see the event bubbling</p>
        <button onClick={this.handleClick()}>Click me</button>
      </div>
    );
  }
}
