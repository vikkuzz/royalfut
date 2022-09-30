import React from "react";
import ReactDOM, {hydrate} from "react-dom";
import { Provider } from "react-redux";
import createSsr from '@issr/core';
import store from "./store";
import "./index.scss";
import App from "./components/App";

const SSR = createSsr(window.SSR_DATA);


hydrate(
  <SSR>
    <Provider store={store}>
      <App />
    </Provider>
  </SSR>,
  document.getElementById("root")
);
