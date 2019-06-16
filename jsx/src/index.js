// Import the React and ReactDOM libraries

import React from "react";
import ReactDOM from "react-dom";

//Create a react component
function getButtonText() {
  return "ClickMe!!!";
}
class Mycomp extends React.Component {
  clickMe = () => {
    return "You clicked on ME!!!";
  };
  render() {
    const buttonName = "Click Me!!!";
    return (
      <div>
        <label className="label" htmlFor="name">
          Enter Name:
        </label>
        <input type="text" id="name" />
        <button style={{ backgroundColor: "blue", color: "red" }}>
          {buttonName}
        </button>
        <button style={{ backgroundColor: "blue", color: "red" }}>
          {this.clickMe()}
        </button>
        <button style={{ backgroundColor: "blue", color: "red" }}>
          {getButtonText()}
        </button>
      </div>
    );
  }
}

//Take the react component and show it on the screen
ReactDOM.render(<Mycomp />, document.querySelector("#root"));
