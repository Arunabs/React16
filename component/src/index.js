// Import React and ReactDOM

import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = () => (
  <div className="ui container comments">
    <ApprovalCard>
      <CommentDetail
        author="sam"
        timeAgo="Today at 4.50AM"
        pic={faker.image.avatar()}
        comment="Hello Sam, test"
      />
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail
        author="ram"
        timeAgo="Today at 5.50AM"
        pic={faker.image.avatar()}
        comment="Hello Ram, test"
      />
    </ApprovalCard>
    <ApprovalCard>
      {" "}
      <CommentDetail
        author="bam"
        timeAgo="Today at 7.50AM"
        pic={faker.image.avatar()}
        comment="Hello Bam, test"
      />
    </ApprovalCard>
  </div>
);
//Render
ReactDOM.render(<App />, document.querySelector("#root"));
