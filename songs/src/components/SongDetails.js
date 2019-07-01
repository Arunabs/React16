import React from "react";
import { connect } from "react-redux";
const getSongDetails = props => {
  const { title, duration } = props.selectedSong;
  return (
    <div>
      <div className="ui card">
        <div className="content">
          <div className="header"> Select Song:</div>
          <div class="meta">
            <label>Title:</label>
            <span class="category"> {title}</span>
          </div>
          <div class="meta">
            <label>Duration:</label>
            <span class="category"> {duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
/*
const SongDetails = props => {
  console.log("songs details child component", props.selectedSong);
  return <div>{getSongDetails(props)}</div>;
}; */

// Simple approach

const SongDetails = ({ selectedSong }) => {
  if (!selectedSong) {
    return "Please select song";
  }
  return (
    <div>
      <h4>Songs Details:</h4>
      <p>Title: {selectedSong.title}</p>
      <p>Duration: {selectedSong.duration}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    selectedSong: state.selectedSong
  };
};
export default connect(mapStateToProps)(SongDetails);
