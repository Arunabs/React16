import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errMessage: null };
  }
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errMessage: err.message });
      }
    );
  }
  /**
   * helper function to avoid the multiple return method inside the
   * render method
   */
  getContent() {
    if (this.state.errMessage && !this.state.lat) {
      return <div> Error: {this.state.errMessage}</div>;
    }
    if (!this.state.errMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner />;
  }

  // Mandatory to declare the rendor
  render() {
    return <div className="border red">{this.getContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
