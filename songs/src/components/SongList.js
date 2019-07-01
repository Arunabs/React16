import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderList = () => {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  };
  render() {
    console.log(this.props);
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}
// Configure mapStateProps
// here state is the redux data (state)
// all the redux data available in the state
const mapStateToProps = state => {
  console.log(state);
  // get whatever data needed for the component
  return { songs: state.songs };
};

// configure connect with mapStateToProps
export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);
