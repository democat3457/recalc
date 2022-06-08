import React from "react";
import ReactDOM from "react-dom";
import "scss/index.css";
import "scss/index.scss";
import reportWebVitals from "./reportWebVitals";
import Routing from "./Routing";
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
tailwind.config = {
  theme: {
    extend: {
      colors: {
        "recalc-blue": "#006eb6",
      },
    },
    container: {
      center: true,
    },
  },
};

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
