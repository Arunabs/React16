import React from "react";

const ComponentDetail = props => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.pic} />
      </a>
      <div className="content">
        <a href="/" className="author">
          <span>{props.author}</span>
        </a>
        <div className="metadata">
          <span className="date">{props.timeAgo}</span>
        </div>
        <div className="text">{props.comment}</div>
      </div>
    </div>
  );
};

export default ComponentDetail;
