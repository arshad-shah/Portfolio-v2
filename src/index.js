import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import ReactGA from "react-ga";
import App from "./App";

ReactGA.initialize("UA-205064366-1"); // add your tracking id here.
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(<App />, document.getElementById("root"));
