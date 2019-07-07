import React from "react";

import { BrowserRouter, Route, Router } from "react-router-dom";

import history from "../history";

import streamCreate from "./streams/StreamCreate";
import streamEdit from "./streams/StreamEdit";
import streamDelete from "./streams/StreamDelete";
import streamShow from "./streams/StreamShow";
import streamList from "./streams/StreamList";

import Header from "./Header";

const App = () => {
  return (
    <div className="ui container">
      {/* <BrowserRouter> */}
      <Router history={history}>
        <Header />
        <div>
          <Route path="/" exact component={streamList} />
          <Route path="/streams/edit/:id" component={streamEdit} />
          <Route path="/streams/delete" component={streamDelete} />
          <Route path="/streams/show" component={streamShow} />
          <Route path="/streams/create" component={streamCreate} />
        </div>
      </Router>
      {/* </BrowserRouter> */}
    </div>
  );
};

export default App;
