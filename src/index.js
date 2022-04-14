import React from "react";
import "./index.css";
import ReactGA from "react-ga";
import App from "./App";

import TagManager from "react-gtm-module";

import { createRoot } from "react-dom/client";

const tagManagerArgs = {
  gtmId: "GTM-NBW8RKR",
};

TagManager.initialize(tagManagerArgs);
ReactGA.initialize("UA-205064366-1");
ReactGA.pageview(window.location.pathname + window.location.search);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
