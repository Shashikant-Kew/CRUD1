import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ErrorBouondry from "./ErrorBoundry";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ErrorBouondry>
      <App />
    </ErrorBouondry>
  </React.StrictMode>,
  rootElement
);
