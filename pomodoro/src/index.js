import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { render } from "react-dom";
import Demo from "./demo";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

const rootElement = document.querySelector("#root");
if (rootElement) {
  render(<Demo />, rootElement);
}
