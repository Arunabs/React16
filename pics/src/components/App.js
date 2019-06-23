import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./SearchBar";

class App extends React.Component {
  /**
   * call back method passed to child component
   * on click of sumbit button this method will be invoked from the child component
   * @param {*} val
   */
  onSearchSubmit(val) {
    console.log(val);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
