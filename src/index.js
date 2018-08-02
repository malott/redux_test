import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import combineReducers from "./reducers";
import App from "./components/App";
import "./index.css";

const store = createStore(combineReducers);

console.log(store.getState());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
