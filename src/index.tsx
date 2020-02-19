import "react-app-polyfill/ie9";
import "core-js/stable";
import "core-js/es/map";
import "core-js/es/set";

import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.scss";
import "./i18n";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
