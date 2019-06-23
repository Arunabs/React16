import "./SeasonDisplay.css";
import React from "react";
const SeasonConfig = {
  summer: {
    text: "Let's hit the beach",
    iconName: "sun"
  },
  winter: {
    text: "Burr, its chilly",
    iconName: "snowflake"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  var seasonName = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = SeasonConfig[seasonName];
  return (
    <div className={`season-display ${seasonName}`}>
      <h1>Season Display</h1>
      <br />
      <i className={`icon-left ${iconName} icon massive`} />
      <p className={`season-text`}>Season: {text}</p>
      <i className={`icon-right ${iconName} icon massive`} />
    </div>
  );
};

export default SeasonDisplay;
