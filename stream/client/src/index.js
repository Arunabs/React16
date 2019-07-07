import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

import { createStore, applyMiddleware, compose } from "redux";

import Reducer from "./reducers";

import App from "./components/App";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

ReactDOM.render(
  <Provider
    store={createStore(Reducer, composeEnhancers(applyMiddleware(reduxThunk)))}
  >
    <App />
  </Provider>,
  document.querySelector("#root")
);
