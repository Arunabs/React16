import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import streamCreate from "./streams/StreamCreate";
import streamEdit from "./streams/StreamEdit";
import streamDelete from "./streams/StreamDelete";
import streamShow from "./streams/StreamShow";
import streamList from "./streams/StreamList";

import Header from "./Header";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <div>
          <Route path="/" exact component={streamList} />
          <Route path="/streams/edit" component={streamEdit} />
          <Route path="/streams/delete" component={streamDelete} />
          <Route path="/streams/show" component={streamShow} />
          <Route path="/streams/create" component={streamCreate} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
