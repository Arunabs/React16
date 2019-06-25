import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
class App extends React.Component {
  state = { images: [] };

  /**
   * call back method passed to child component
   * on click of sumbit button this method will be invoked from the child component
   * @param {*} val
   */
  onSearchSubmit = async val => {
    const res = await unsplash.get("/search/photos", {
      params: { query: val }
    });
    this.setState({ images: res.data.results });
  };
  /*
  onSearchSubmit = async val => {
    const res = await axios.get("/search/photos", {
      params: { query: val },
      headers: {
        Authorization:
          "Client-ID 45e472bb82a2e3298b4460301eea2ebea0456fe6cc4cb7078cf9f7eca1307fbf"
      }
    });
    //.then(res => console.log(res.data.results));
    console.log(res.data.results);
    this.setState({ images: res.data.results });
  }; */

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList imageList={this.state.images} />
      </div>
    );
  }
}

export default App;
