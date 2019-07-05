import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import { createStore, applyMiddleware, compose } from "redux";

import Reducer from "./reducers";

import App from "./components/App";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

ReactDOM.render(
  <Provider store={createStore(Reducer, composeEnhancers(applyMiddleware()))}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
